import { useEffect, useState } from "react";
import {
  BallLoader,
  Card,
  // DownloadModal,
  MainContainer,
  Pagination,
  TopBookingTable,
} from "../../components";
import { TopBooking, Data } from "../types";
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

const Dashboard = () => {
  const {resData, setResData} = useData();
  const [isLoading, setIsLoading] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const cardData = [
    { name: "Booking Count", value: resData?.bookingCount },
    { name: "States Count", value: resData?.stateCount.length },
    {
      name: "Total Value",
      value: resData?.totalValue[0]?.declaredValue,
    },
  ];

  const fetchData = async () => {
    const response = await axiosCalls("/business_admin/kpis", "GET");
    setResData(response?.data);
    setErrMessage(response?.err);
    setIsLoading(false)
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  if (isLoading) {
    return (
      <MainContainer activeTab="Home">
        <div className="flex justify-center items-center h-full w-full -mt-4">
          <BallLoader />
        </div>
      </MainContainer>
    );
  }

  if (errMessage) {
    warn(errMessage)
    return (
      <MainContainer activeTab="Home">
        <div className="flex justify-center items-center h-full w-full -mt-4 text-lg mx-2">
          {errMessage}
        </div>
      </MainContainer>
    );
  }
  if (resData=== null || undefined) {
    return (
      <MainContainer activeTab="Home">
        <div className="flex justify-center items-center h-full w-full -mt-4 text-lg mx-2">
          Something went wrong, try again later. If the error persists, kindly re-login.
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
      <div className="mb-4">
        <h2 className="text-dark font-medium text-xl mb-3">Top Booking</h2>
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
      </div>
    </MainContainer>
  );
};

export default Dashboard;
