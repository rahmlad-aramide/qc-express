import { FC, useState } from "react";
import { InputField, Loader } from "..";
import { useModal } from "../../contexts/ModalContext";
import { axiosCalls } from "../../utils/_api";
import { notify, warn } from "../../App";
// import { useData } from "../../contexts/DataContext";
import { dashboardData } from "../../pages/data";

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
  const { isOpenFilter, setIsOpenFilter } = useModal();
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [filterValues, setFilterValues] = useState(initialValues);
  // const { resData } = useData();
  const senderLocations = dashboardData.data.topBooking.map(
    (item) => item.delivery_info[0].postalAddress.cityName
  );
  const receiverLocations = dashboardData.data.topBooking.map(
    (item) => item.delivery_info[1].postalAddress.cityName
  );
  const sourceLocations = removeDuplicates(senderLocations)
  const destinationLocations = removeDuplicates(receiverLocations)
  console.log(sourceLocations);
  console.log(destinationLocations);

  const handleFilter = async () => {
    setIsLoading(true);
    const response = await axiosCalls(
      `/booking/developer/booking`,
      "POST",
      mapBackendToFrontend(filterValues)
    );
    setErrMessage(response?.err);
    // downloadPDF(response.data.base64String, 'document.pdf')
    setIsLoading(false);
    setFilterValues(initialValues);
    setTimeout(() => {
      notify("Filtered successfully");
      setIsOpenFilter(!isOpenFilter);
    }, 1000);
  };
  if (errMessage) {
    warn(errMessage);
    setIsOpenFilter(!isOpenFilter);
  }
  if (!isOpenFilter) return;
  return (
    <div className="fixed top-0 left-0 w-full h-screen sm:h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#fff] w-[90%] max-w-[500px] lg:max-w-[600px] mx-auto rounded-lg shadow-2xl p-4 sm:p-10 flex flex-col items-start h-full sm:h-fit">
      <div className="bg-[#fff] w-full flex flex-col items-start h-fit overflow-y-auto">
        <h2 className="font-semibold text-2xl">Filter Booking</h2>
        <form className="space-y-4 w-[100%]">
          <div className="flex flex-col py-4 gap-y-4">
            <div className="flex flex-col justify-between items-center w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="quantity"
                    className="font-semibold text-lg text-[#333]"
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
                    className="border border-[#333] outline-none py-2 px-4 h-[44px] w-[100%] rounded-lg"
                  >
                    <option value="$lte">Less than</option>
                    <option value="$gte">Greater than</option>
                  </select>
                </div>
                <InputField
                  type="number"
                  min={1}
                  label="Quantity Value"
                  value={filterValues.count_value}
                  style={{height: 44}}
                  onChange={(e) =>
                    setFilterValues({
                      ...filterValues,
                      count_value: +e.target.value,
                    })
                  }
                />
                <div className="flex flex-col space-y-2">
                  <label
                    className="font-semibold text-lg text-[#333]"
                  >
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
                    className="border border-[#333] outline-none py-2 px-4 h-[44px] w-[100%] rounded-lg"
                  >
                    {sourceLocations.map((l, idx)=> (
                    <option key={idx} value={l}>{l}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col space-y-2">
                  <label
                    className="font-semibold text-lg text-[#333]"
                  >
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
                    className="border border-[#333] outline-none py-2 px-4 h-[44px] w-[100%] rounded-lg"
                  >
                    {destinationLocations.map((l, idx)=> (
                    <option key={idx} value={l}>{l}</option>
                    ))}
                  </select>
                </div>
                <InputField
                  type="email"
                  label="Email"
                  value={filterValues.user_email}
                  style={{height: 44}}
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
                  value={filterValues.date}
                  onChange={(e) =>
                    setFilterValues({ ...filterValues, date: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center space-x-4">
            <button
              type="button"
              onClick={() => {
                setIsOpenFilter(!isOpenFilter);
              }}
              className="bg-[#ee3300] h-10 py-2 px-6 text-[#fff] font-semibold rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              onClick={handleFilter}
              className="bg-[#4169e2] h-10 py-2 px-6 text-[#fff] font-semibold rounded-lg"
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
