import { TCard } from "../../pages/types";
import vector from "../../assets/dashboard-images/spinning-bg.svg";

import bookingCount from '../../assets/dashboard-images/booking-count.png'
import statesCount from '../../assets/dashboard-images/states-count.png'
import totalValue from '../../assets/dashboard-images/total-value.png'

const cardData = [
    { name: "Booking Count", icon: bookingCount },
    { name: "States Count", icon: statesCount },
    { name: "Total Value", icon: totalValue },
  ];
  
  const Card:React.FC<TCard> = ({ name, value = 0 }) => {
  
    const cardInfo = cardData.find((card) => card.name === name);
  
    if (!cardInfo) {
      return null;
    }
  
    const { icon, name: cardName } = cardInfo;
  
    return (
      <div className="bg-primary relative text-white p-4 rounded-lg shadow-md">
        <img src={vector} alt="" className="absolute spinning-bg" />
        <div className="flex flex-col items-start">
          <div className="flex gap-3 items-center mb-4">
            <img src={icon} alt={cardName} className="w-10 h-10 mt-1" />
            <h2 className="font-bold text-4xl">{value}</h2>
          </div>
          <div>
            <p className="font-bold text-lg">{cardName}</p>
          </div>
        </div>
      </div>
    );
  };

  export default Card