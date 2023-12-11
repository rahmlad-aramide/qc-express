import { TopBooking } from "../../pages/types";
import { InfoPopver } from "..";
import { useState } from "react";

const MoreTD = ({trackingId, _id}: {trackingId: string, _id: string}) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false)
  return (
      <InfoPopver _id={_id} trackingId={trackingId} isPopoverOpen={isPopoverOpen} setIsPopoverOpen={()=>setIsPopoverOpen(!isPopoverOpen)} />
  );
};

interface TableProps {
  data: TopBooking[];
  startIndex: number;
  endIndex: number;
}
const TopBookingTable:React.FC<TableProps> = ({
  data,
  startIndex,
  endIndex,
}) => {
  
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-spacing-y-2 border-separate">
        <thead className="bg-grayish">
          <tr>
            <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">
              S/N
            </th>
            <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">
              Description
            </th>
            <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">
              Qty
            </th>
            <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">
              Customer
            </th>
            <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">
              Email
            </th>
            <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">
              Source
            </th>
            <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">
              Receiver
            </th>
            <th className="py-2 px-4 text-left text-grayish-400 text-sm font-medium">
              Destination
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
                {item.description}
              </td>
              <td className="border-b py-4 px-4 text-sm text-center font-medium text-grayish-600">
                {item.number_items}
              </td>
              <td className="border-b py-4 px-4 text-sm font-medium text-grayish-600">
                {item.delivery_info[0].contactInformation.fullName}
              </td>
              <td className="border-b py-4 px-4 text-sm font-medium text-grayish-600 break-words max-w-[30ch] 2xl:max-w-none">
                {item.delivery_info[0].contactInformation.email}
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
                <MoreTD trackingId={item.shipmentMeta.trackingId} _id={item._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopBookingTable;
