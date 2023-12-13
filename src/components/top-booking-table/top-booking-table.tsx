
import Skeleton from "react-loading-skeleton";

const TopBookingTable:React.FC = () => {
    return (
      <table className="min-w-full bg-white border-spacing-y-2 border-separate">
        {Array.from({ length: 5 }).map((_, index) => (
          <tr key={index} className="group hover:bg-grayish my-2 rounded-r-lg">
            <Skeleton height={40} />
          </tr>
        ))}
      </table>
    );
};

export default TopBookingTable;
