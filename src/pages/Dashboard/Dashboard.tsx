import { useEffect, useState } from "react";
import {
  BallLoader,
  Card,
  MainContainer,
  Pagination,
  TopBookingTable,
} from "../../components";
// import { dashboardData } from "../data";
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

const Dashboard = () => {
  // const tData = dashboardData?.data;

  const [resData, setResData] = useState<Data | null>(null);
  const [errMessage, setErrMessage] = useState("");
  const [success, setSuccess] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  // const perpage = 1;
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
    setSuccess(response?.success);
    setResData(response?.data);
    setErrMessage(response?.err);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*  To be removed later on
        ==================================================== */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const repeatItem = (item: any, times: number) => {
    return Array.from({ length: times }, () => ({ ...item }));
  };

  // Repeat each item in the "topBooking" array 11 times
  const repeatedTopBooking = resData?.topBooking.flatMap((item) =>
    repeatItem(item, 21)
  );

  // Update the resData with the repeated "topBooking" array
  const updatedResData = {
    ...resData,
    topBooking: repeatedTopBooking,
  };

  /*  To be removed later on
        ==================================================== */

  
  if (!resData) {
    return (
      <MainContainer activeTab="Home">
        <div className="flex justify-center items-center h-full w-full -mt-4">
          <BallLoader />
        </div>
      </MainContainer>
    );
  }

  if (success === false) {
    return (
      <MainContainer activeTab="Home">
        <div className="flex justify-center items-center h-full w-full -mt-4 text-lg mx-2">
          {errMessage}
        </div>
      </MainContainer>
    );
  }

  return (
    <MainContainer activeTab="Home">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pt-4 pb-8">
        {cardData.map((item, index) => (
          <Card key={index} name={item.name} value={Number(item.value)} />
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
          data={updatedResData?.topBooking as TopBooking[]}
          startIndex={startIndex}
          endIndex={endIndex}
        />
        <Pagination
          totalCount={Math.ceil(
            (updatedResData as Data)?.topBooking?.length / pageSize
          )}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </MainContainer>
  );
};

export default Dashboard;
