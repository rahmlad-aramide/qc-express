import { FC, useState } from "react";
import { InputField, Loader } from "..";
import { useModal } from "../../contexts/ModalContext";
import { axiosCalls } from "../../utils/_api";
import { notify, warn } from "../../App";
import { useData } from "../../contexts/DataContext";
import Skeleton from "react-loading-skeleton";

type BackendData = {
  count: {
    value: number;
    sort: string;
  };
  delivery_from: string;
  delivery_to: string;
  date: string;
  user_email: string;
};
const mapBackendToFrontend = (frontendData: InitialValues) => {
  const backendData: BackendData = {
    count: {
      value: frontendData.count_value,
      sort: frontendData.count_sort,
    },
    delivery_from: frontendData.delivery_from,
    delivery_to: frontendData.delivery_to,
    date: frontendData.date,
    user_email: frontendData.user_email,
  };
  return backendData;
};
type InitialValues = {
  count_value: number;
  count_sort: string;
  delivery_from: string;
  delivery_to: string;
  date: string;
  user_email: string;
};
const initialValues: InitialValues = {
  count_value: 1,
  count_sort: "$lte",
  delivery_from: "",
  delivery_to: "",
  date: "",
  user_email: "",
};

function removeDuplicates(arr: string[]): string[] {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}

const FilterModal: FC = () => {
  const { isOpenFilter, setIsOpenFilter, filterValues, setFilterValues } =
    useModal();
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const { moreData, setMoreData } = useData();
  const senderLocations = moreData?.docs.map(
    (item) => item.delivery_info[0].postalAddress.cityName
  );
  const receiverLocations = moreData?.docs.map(
    (item) => item.delivery_info[1].postalAddress.cityName
  );
  const sourceLocations = senderLocations && removeDuplicates(senderLocations);
  const destinationLocations =
    receiverLocations && removeDuplicates(receiverLocations);

  const handleFilter = async () => {
    setIsLoading(true);
    const response = await axiosCalls(
      `/booking/developer/booking?limit=15&page=1`,
      "POST",
      mapBackendToFrontend(filterValues)
    );
    setErrMessage(response?.err);
    setIsLoading(false);
    setMoreData(response?.data);
    setIsOpenFilter(!isOpenFilter);
    notify("Filtered successfully");
    setTimeout(() => {
      setFilterValues(initialValues);
    }, 1000);
  };
  if (errMessage) {
    warn(errMessage);
    setIsOpenFilter(!isOpenFilter);
  }
  if (!isOpenFilter) return;
  if (isOpenFilter && !moreData) {
    return (
      <div className="fixed top-0 left-0 w-full h-screen sm:h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-[#fff] w-[90%] max-w-[500px] lg:max-w-[600px] mx-auto rounded-lg shadow-2xl p-4 sm:p-10 flex flex-col items-start h-full sm:h-fit">
          <div className="hidden sm:flex flex-col w-full items-center justify-center">
            <Skeleton
              height={44}
              width={400}
              style={{ marginBottom: "1rem" }}
            />
            <Skeleton
              height={44}
              width={400}
              style={{ marginBottom: "1rem" }}
            />
            <Skeleton
              height={44}
              width={400}
              style={{ marginBottom: "1rem" }}
            />
            <Skeleton
              height={44}
              width={400}
              style={{ marginBottom: "1rem" }}
            />
          </div>
          <div className="flex sm:hidden flex-col w-full items-center justify-center">
            <Skeleton
              height={44}
              width={280}
              style={{ marginBottom: "1rem" }}
            />
            <Skeleton
              height={44}
              width={280}
              style={{ marginBottom: "1rem" }}
            />
            <Skeleton
              height={44}
              width={280}
              style={{ marginBottom: "1rem" }}
            />
            <Skeleton
              height={44}
              width={280}
              style={{ marginBottom: "1rem" }}
            />
          </div>

          <div className="flex w-full justify-center items-center space-x-4">
            <Skeleton height={40} width={80} style={{ marginRight: "1rem" }} />
            <Skeleton height={40} width={100} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="fixed top-0 left-0 w-full h-screen sm:h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#fff] w-[90%] max-w-[500px] lg:max-w-[600px] mx-auto rounded-lg shadow-2xl p-4 sm:p-10 flex flex-col items-start h-full sm:h-fit">
        <div className="bg-[#fff] w-full flex flex-col items-start h-fit overflow-y-auto">
          <div className="flex justify-end w-full">
            <button
              type="button"
              onClick={() => {
                setIsOpenFilter(!isOpenFilter);
              }}
              className="text-[#ee2020]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 lg:h-8 lg:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>{" "}
            </button>
          </div>
          <h2 className="font-semibold text-2xl mb-4">Filter Booking</h2>
          <form className="space-y-4 w-[100%]">
            <div className="flex flex-col py-4 gap-y-4">
              <div className="flex flex-col justify-between items-center w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor="quantity"
                      className="font-semibold text-lg text-[#8f8391]"
                    >
                      Quantity Filter
                    </label>
                    <select
                      value={filterValues.count_sort}
                      onChange={(e) =>
                        setFilterValues({
                          ...filterValues,
                          count_sort: e.target.value,
                        })
                      }
                      className="border border-[#8f8391] text-[#333] outline-none py-2 px-4 h-[44px] w-[100%] rounded-lg"
                    >
                      <option value="$lte">Less than/Equal to</option>
                      <option value="$gte">Greater than/Equal to</option>
                    </select>
                  </div>
                  <InputField
                    type="number"
                    min={1}
                    label="Quantity Value"
                    labelColor="#8f8391"
                    value={filterValues.count_value}
                    style={{
                      height: 44,
                      borderColor: "#8f8391",
                      color: "#333",
                    }}
                    onChange={(e) =>
                      setFilterValues({
                        ...filterValues,
                        count_value: +e.target.value,
                      })
                    }
                  />
                  <div className="flex flex-col space-y-2">
                    <label className="font-semibold text-lg text-[#8f8e91]">
                      Source
                    </label>

                    <select
                      value={filterValues.delivery_from}
                      onChange={(e) =>
                        setFilterValues({
                          ...filterValues,
                          delivery_from: e.target.value,
                        })
                      }
                      className="border border-[#8f8e91] text-[#333] outline-none py-2 px-4 h-[44px] w-[100%] rounded-lg"
                    >
                      {sourceLocations?.map((l, idx) => (
                        <option key={idx} value={l}>
                          {l}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="font-semibold text-lg text-[#8f8e91]">
                      Destination
                    </label>

                    <select
                      value={filterValues.delivery_from}
                      onChange={(e) =>
                        setFilterValues({
                          ...filterValues,
                          delivery_from: e.target.value,
                        })
                      }
                      className="border border-[#8f8e91] text-[#333] outline-none py-2 px-4 h-[44px] w-[100%] rounded-lg"
                    >
                      {destinationLocations?.map((l, idx) => (
                        <option key={idx} value={l}>
                          {l}
                        </option>
                      ))}
                    </select>
                  </div>
                  <InputField
                    type="email"
                    label="Email"
                    labelColor="#8f8391"
                    value={filterValues.user_email}
                    style={{
                      height: 44,
                      borderColor: "#8f8391",
                      color: "#333",
                    }}
                    onChange={(e) =>
                      setFilterValues({
                        ...filterValues,
                        user_email: e.target.value,
                      })
                    }
                  />
                  <InputField
                    type="date"
                    label="Date"
                    labelColor="#8f8391"
                    style={{ borderColor: "#8f8391", color: "#333" }}
                    value={filterValues.date}
                    onChange={(e) =>
                      setFilterValues({ ...filterValues, date: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                disabled={isLoading}
                onClick={handleFilter}
                className="flex items-center bg-[#4169e2] h-10 py-2 px-6 text-[#fff] font-semibold rounded-lg"
              >
                {isLoading ? <Loader h={20} w={20} /> : "Apply Filter"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
