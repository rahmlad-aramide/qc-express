import { InfoPopver } from "..";
import { useState } from "react";
import { MoreData } from "../../pages/more-types";
import Skeleton from "react-loading-skeleton";

const MoreTD = ({ trackingId, _id }: { trackingId: string; _id: string }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
  return (
    <InfoPopver
      _id={_id}
      trackingId={trackingId}
      isPopoverOpen={isPopoverOpen}
      setIsPopoverOpen={() => setIsPopoverOpen(!isPopoverOpen)}
    />
  );
};

interface TableProps {
  data: MoreData;
  isMoreLoading: boolean;
  errMoreMessage: string;
}
const MoreBookingTable: React.FC<TableProps> = ({
  data,
  errMoreMessage,
  isMoreLoading,
}) => {
  if (!data || isMoreLoading) {
    // Loading state, render skeleton loaders
    return (
      <table className="-z-10 min-w-full bg-white border-spacing-y-2 border-separate">
        {Array.from({ length: 5 }).map((_, index) => (
          <tr key={index} className="group my-2 rounded-r-lg">
            <Skeleton height={40} />
          </tr>
        ))}
      </table>
    );
  }
  if (errMoreMessage) {
    return (
      <div className="flex h-[200px] justify-center items-center">
        <h2>{errMoreMessage}</h2>
      </div>
    );
  }
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
          {data?.docs?.map((item, index) => (
            <tr
              key={index}
              className="group hover:bg-grayish my-2 rounded-r-lg"
            >
              <td className="group-hover:rounded-l-lg border-b py-4 px-4 text-sm text-center font-medium text-grayish-600">
                {index + data.limit * data.page - data.limit + 1}
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
                <MoreTD
                  trackingId={item.shipmentMeta.trackingId}
                  _id={item._id}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        {data.docs.length === 0 &&
          <div className="flex h-[200px] justify-center items-center">
            <h2>No data available</h2>
          </div>
        }
    </div>
  );
};

export default MoreBookingTable;
