// Update ShipmentTracker.tsx
import React from "react";
import { Event } from "../../pages/types";

const CheckmarkIcon: React.FC = () => (
  <div className="flex justify-center bg-green-600 rounded-full p-3 mb-16 -ml-3.5 mr-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999M22 3.99999L12 14.01L9.00001 11.01"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const ShipmentTracker: React.FC<{ events: Event[] }> = ({ events }) => {
  return (
    <div className="w-full max-w-[800px] mx-auto my-4">
      <div className="grid grid-cols-1 ml-4">
        {events.map((event, index) => (
          <div key={index} className="relative">
            <div
              className={`-z-[10] absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300 ${
                index === 0 && "top-12"
              } ${index === events.length - 1 && "bottom-4"}`}
            ></div>
            <div className="p-4 w-full flex items-center">
              <div className={`${index === events.length - 1 && '-mt-6'}`}>
                <CheckmarkIcon />
              </div>
              <div className="flex-1 border-2 border-gray-300 py-2 pl-4">
                {event.date && (
                  <>
                    <p className="text-lg font-semibold mb-2 text-primary">
                      {event.date}
                    </p>
                  </>
                )}
                <p className="text-lg font-semibold mb-2">
                  {event.description}
                </p>
                {event.time && (
                  <p className="text-gray-700">Time: {event.time}</p>
                )}
                {event.serviceArea && (
                  <p className="text-gray-700">
                    Service Area: {event.serviceArea[0].description}
                  </p>
                )}
                {event.signedBy && (
                  <p className="text-gray-700 text-sm mt-1 bg-gray-200 px-2 rounded w-fit">Signed by: <span className="text-primary capitalize font-medium">{event.signedBy}</span></p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShipmentTracker;
