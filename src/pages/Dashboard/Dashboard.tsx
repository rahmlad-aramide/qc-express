import { useEffect, useState } from "react";
import {
  Card,
  MainContainer,
  MoreBookingTable,
  MorePagination,
  TopBookingTable,
} from "../../components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { axiosCalls } from "../../utils/_api";
import { warn } from "../../App";
import { useData } from "../../contexts/DataContext";
import { useModal } from "../../contexts/ModalContext";
import { MoreData } from "../more-types";
import Skeleton from "react-loading-skeleton";
// import { dashboardData } from "../data";

const Dashboard = () => {
  const { resData, setResData, moreData, setMoreData } = useData();
  // const resData = dashboardData.data;
  const { isOpenFilter, setIsOpenFilter, filterValues } = useModal();
  const [isLoading, setIsLoading] = useState(true);
  const [isMoreLoading, setIsMoreLoading] = useState(true);
  const [errMoreMessage, setErrMoreMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [currentMorePage, setCurrentMorePage] = useState(1);

  const cardData = [
    { name: "Bookings Count", value: resData?.bookingCount },
    { name: "States Count", value: resData?.stateCount.length },
    {
      name: "Total Value",
      value:
        resData?.totalValue[0]?.declaredValue &&
        resData?.totalValue[0]?.declaredValue / 100,
    },
  ];

  const fetchData = async () => {
    const response = await axiosCalls("/business_admin/kpis", "GET");
    setResData(response?.data);
    setErrMessage(response?.err);
    setIsLoading(false);
  };
  const fetchMoreData = async (page: number) => {
    const response = await axiosCalls(
      `/booking/developer/booking?limit=15&page=${page}`,
      "POST", filterValues
    );
    setMoreData(response?.data);
    setErrMoreMessage(response?.err);
    setIsMoreLoading(false);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    fetchMoreData(currentMorePage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMorePage]);
  const handlePageChange = (page: number) => {
    setCurrentMorePage(page);
  };

  if (isLoading) {
    const dummyItems = Array.from({ length: 3 }, (_, index) => index + 1);
    return (
      <MainContainer activeTab="Home">
        {/* Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pt-4 pb-8">
          {dummyItems.map((index) => (
            <div key={index}>
              <Skeleton height={120} width="100%" />
            </div>
          ))}
        </div>
        <div className="mb-4">
          <h2 className="text-dark font-medium text-xl mb-3">States Data</h2>
          <div className="h-[300px] bg-grayish-400/10 rounded-lg">
            <Skeleton height={300} width="100%" />
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <h2 className="text-dark font-medium text-xl mb-3">Bookings</h2>
          {/* <button onClick={()=>setIsOpenFilter(!isOpenFilter)}>Filter</button> */}
        </div>
        <TopBookingTable />
      </MainContainer>
    );
  }

  if (errMessage) {
    warn(errMessage);
    return (
      <MainContainer activeTab="Home">
        <div className="flex justify-center items-center h-full w-full -mt-4 text-lg mx-2">
          {errMessage}
        </div>
      </MainContainer>
    );
  }
  if (resData === null || undefined) {
    return (
      <MainContainer activeTab="Home">
        <div className="flex justify-center items-center h-full w-full -mt-4 text-lg mx-2">
          Something went wrong, try again later. If the error persists, kindly
          re-login.
        </div>
      </MainContainer>
    );
  }

  return (
    <MainContainer activeTab="Home">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pt-4 pb-8">
        {cardData.map((item, index) => (
          <Card key={index} name={item?.name} value={Number(item?.value)} />
        ))}
      </div>

      <div className="mb-4">
        <h2 className="text-dark font-medium text-xl mb-3">States Data</h2>
        <div className="h-[300px] bg-grayish-400/10 pt-4 pr-4 rounded-lg">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={500} height={300} data={resData?.stateCount}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="_id" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* <div className="mb-4">
        <div className="flex justify-between">
          <h2 className="text-dark font-medium text-xl mb-3">Top Bookings</h2>
        </div>
        <TopBookingTable
          data={resData?.topBooking as TopBooking[]}
          startIndex={startIndex}
          endIndex={endIndex}
        />
        <Pagination
          totalCount={Math.ceil(
            (resData as Data)?.topBooking?.length / pageSize
          )}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div> */}

      <div className="mb-4">
        <div className="flex justify-between">
          <h2 className="text-dark font-medium text-xl mb-3">Bookings</h2>
          <button onClick={() => setIsOpenFilter(!isOpenFilter)}>Filter</button>
        </div>
        <MoreBookingTable data={moreData as MoreData} isMoreLoading={isMoreLoading} errMoreMessage={errMoreMessage} />
        <MorePagination
          data={moreData as MoreData}
          onPageChange={handlePageChange}
          isMoreLoading={isMoreLoading} 
          errMoreMessage={errMoreMessage}
        />
      </div>
    </MainContainer>
  );
};

export default Dashboard;
