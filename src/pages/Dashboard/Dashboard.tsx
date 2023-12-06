import { useEffect, useState } from "react";
import { BallLoader, MainContainer, Pagination } from "../../components";
// import { dashboardData } from "../data";
import vector from "./spinning-bg.svg";

import { FaClipboardList, FaClipboard, FaClipboardCheck } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { Ticons, TCard, TopBooking, Data } from "../types";
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

const icons: Ticons = {
  "Booking Count": FaClipboard,
  "State Count": FaClipboardList,
  "Total Value": FaClipboardCheck,
};

const Card = ({ name, value = 0 }: TCard) => {
  const Icon: React.ElementType = icons[name];

  return (
    <div className="bg-primary relative text-white p-4 rounded-lg shadow-md">
      <img src={vector} alt="" className="absolute spinning-bg" />
      <div className="flex flex-col items-start">
        <div className="flex gap-4 items-center mb-4">
          {Icon && <Icon size={40} className="text-2xl mr-2 mt-1" />}
          <h2 className="font-bold text-4xl">{value}</h2>
        </div>
        <div>
          <p className="font-bold text-lg">{name}</p>
        </div>
      </div>
    </div>
  );
};

const Table = ({
  data,
  startIndex,
  endIndex,
}: {
  data: TopBooking[];
  startIndex: number;
  endIndex: number;
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-spacing-y-2 border-separate">
        <thead className="bg-grayish">
          <tr>
            <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">
              Document
            </th>
            <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">
              Description
            </th>
            <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">
              Value
            </th>
            <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">
              Items No.
            </th>
            <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">
              Tracking ID
            </th>
            <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">
              Customer
            </th>
            <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">
              City
            </th>
            <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">
              Receiver
            </th>
            <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">
              City
            </th>
            <th className="py-2 px-4 text-grayish-400 text-sm font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {data?.slice(startIndex, endIndex).map((item, index) => (
            <tr
              key={index}
              className="group hover:bg-grayish my-2 rounded-r-lg"
            >
              <td className="group-hover:rounded-l-lg border-b py-4 px-4 text-sm font-medium text-grayish-600">
                {item.document}
              </td>
              <td className="border-b py-4 px-4 text-sm font-medium text-grayish-600">
                {item.description}
              </td>
              <td className="border-b py-4 px-4 text-sm font-medium text-grayish-600">
                {item.declaredValue}
              </td>
              <td className="border-b py-4 px-4 text-sm font-medium text-grayish-600">
                {item.number_items}
              </td>
              <td className="border-b py-4 px-4 text-sm font-medium text-grayish-600">
                {item.shipmentMeta.trackingId}
              </td>
              <td className="border-b py-4 px-4 text-sm font-medium text-grayish-600">
                {item.delivery_info[0].contactInformation.fullName}
              </td>
              <td className="border-b py-4 px-4 text-sm font-medium text-grayish-600">
                {item.delivery_info[0].postalAddress.cityName}
              </td>
              <td className="border-b py-4 px-4 text-sm font-medium text-grayish-600">
                {item.delivery_info[1].contactInformation.fullName}
              </td>
              <td className="border-b py-4 px-4 text-sm font-medium text-grayish-600">
                {item.delivery_info[1].postalAddress.cityName}
              </td>
              <td className="group-hover:rounded-r-lg border-b px-2 text-sm font-medium text-grayish-600">
                <button className="rounded mx-auto text-grayish-600 bg-grayish-600/10 hover:bg-grayish-600/20 p-1.5">
                  <IoMdMore />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Pagination totalCount={data.length%10} currentPage={currentPage} onPageChange={setCurrentPage} /> */}
    </div>
  );
};

const Dashboard = () => {
  // const tData = dashboardData?.data;

  const [resData, setResData] = useState<Data | null>(null);
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
    const response = await axiosCalls('/business_admin/kpis', 'GET')
    // console.log(response)
    console.log("axios call response", response)
    // setResData(tData)
    setResData(response?.data)
  }
  useEffect(() => {
    fetchData()
    // setResData(tData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  if(!resData){
    return <MainContainer>
    <div className="flex justify-center items-center h-full w-full -mt-4">
      <BallLoader />
    </div>
    </MainContainer>
  }
  return (
    <MainContainer>
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
        <Table
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
      {/* <div>
        <h2 className="text-dark font-medium text-2xl mb-3">Shipments</h2>
         <Table data={tableData} />
      </div> */}
    </MainContainer>
  );
};

export default Dashboard;
