import { useState} from 'react'
import { MainContainer } from "../../components";
import {dashboardData} from '../data'
import vector from './spinning-bg.svg'

import { FaClipboardList, FaClipboard, FaClipboardCheck } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { TopBookingData, Ticons, TCard, TableProps } from '../types';

const icons:Ticons = {
  "Booking Count": FaClipboard,
  "State Count": FaClipboardList,
  "Total Value": FaClipboardCheck,
};

const Card = ({ name, value=0 }:TCard) => {
  const Icon: React.ElementType = icons[name];

  return (
    <div className="bg-primary relative text-white p-4 rounded-lg shadow-md">
      <img src={vector} alt="" className="absolute spinning-bg" />
      <div className="flex flex-col items-start">
        <div className="flex gap-4 items-center mb-4">
          {Icon && <Icon size={40} className="text-2xl mr-2 mt-1" />}
          <h2 className="font-bold text-5xl">{value}</h2>
        </div>
        <div>
          <p className="font-bold text-lg">{name}</p>
        </div>
      </div>
    </div>
  );
};

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
    <table className="min-w-full bg-white border-spacing-y-2 border-separate">
      <thead className="bg-grayish">
        <tr>
          <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">Document</th>
          <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">Description</th>
          <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">Value</th>
          <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">Qty</th>
          <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">Tracking ID</th>
          <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">Customer</th>
          <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">Receiver</th>
          <th className="py-2 px-4 text-grayish-400 text-sm font-medium"></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="group hover:bg-grayish my-2 rounded-r-lg">
            <td className="group-hover:rounded-l-lg border-b py-4 px-4 text-sm font-medium text-grayish-600">{item.document}</td>
            <td className="border-b py-4 px-4 text-sm font-medium text-grayish-600">{item.description}</td>
            <td className="border-b py-4 px-4 text-sm font-medium text-grayish-600">{item.declaredValue}</td>
            <td className="border-b py-4 px-4 text-sm font-medium text-grayish-600">{item.number_items}</td>
            <td className="border-b py-4 px-4 text-sm font-medium text-grayish-600">{item.shipmentMeta.trackingId}</td>
            <td className="border-b py-4 px-4 text-sm font-medium text-grayish-600">{item.delivery_info[0].contactInformation.fullName}</td>
            <td className="border-b py-4 px-4 text-sm font-medium text-grayish-600">{item.delivery_info[1].contactInformation.fullName}</td>
            <td className="group-hover:rounded-r-lg border-b px-2 text-sm font-medium text-grayish-600">
              <button className="rounded mx-auto text-grayish-600 bg-grayish-600/10 hover:bg-grayish-600/20 p-1.5"><IoMdMore /></button>
            </td>
          </tr>
       ))}
      </tbody>
    </table>
  </div>
  );
};

const Dashboard = () => {

  const cardData = [
    { name: 'Booking Count', value: dashboardData.data.bookingCount },
    { name: 'State Count', value: 0 },
    { name: 'Total Value', value: 0 },
    // { name: 'State Count', value: dashboardData.data.stateCount },
    // { name: 'Total Value', value: dashboardData.data.totalValue },
  ];


 const tData: TopBookingData[] = dashboardData?.data?.topBooking || { topBooking: [] }

 const [topBookingData] = useState(tData)
//  console.log(topBookingData)
  return (
    <MainContainer>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pt-4 pb-8">
        {cardData.map((item, index) => (
          <Card key={index} name={item.name} value={item.value} />
        ))}
      </div>

      <div className="mb-4">
        <h2 className="text-dark font-medium text-2xl mb-3">Top Booking</h2>
           <Table data={topBookingData} />
      </div>

      {/* <div>
        <h2 className="text-dark font-medium text-2xl mb-3">Shipments</h2>
         <Table data={tableData} />
      </div> */}
    </MainContainer>
  );
};

export default Dashboard;
