import { TopBooking } from "../../pages/types";
import { InfoPopver } from "..";
import { useState } from "react";

const MoreTD = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false)
  return (
      <InfoPopver isPopoverOpen={isPopoverOpen} setIsPopoverOpen={()=>setIsPopoverOpen(!isPopoverOpen)} />
  );
};

const TopBookingTable = ({
  data,
  startIndex,
  endIndex,
}: {
  data: TopBooking[];
  startIndex: number;
  endIndex: number;
}) => {
    console.log(data.slice(startIndex, endIndex).map((item)=>item))
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-spacing-y-2 border-separate">
        <thead className="bg-grayish">
          <tr>
            <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">
              S/N
            </th>
            <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">
              Document
            </th>
            <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">
              Description
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
              <td className="group-hover:rounded-l-lg border-b py-4 px-4 text-sm text-center font-medium text-grayish-600">
                {index + startIndex + 1}
              </td>
              <td className="border-b py-4 px-4 text-sm font-medium text-grayish-600">
                {item.document}
              </td>
              <td className="border-b py-4 px-4 text-sm font-medium text-grayish-600">
                {item.description}
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
                <MoreTD />
              </td>
              {/* <MoreTD />  */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopBookingTable;
