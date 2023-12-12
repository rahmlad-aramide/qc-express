import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosCalls } from "../../utils/_api";
import { BallLoader, MainContainer, ShipmentTracker } from "../../components";
import { IShipment } from "../types";
import { IoChevronBackOutline } from "react-icons/io5";
import { warn } from "../../App";

// const sampleData = {
//   message: "tracking data fetched",
//   data: {
//     shipments: [
//       {
//         shipmentTrackingNumber: "9356579890",
//         status: "Success",
//         shipmentTimestamp: "2023-10-20T20:53:09",
//         productCode: "N",
//         description: "MATERIAL DIVERSO",
//         shipperDetails: {
//           name: "PRIVALIA MEXICO",
//           postalAddress: {
//             cityName: "Tepozotlan",
//             postalCode: "54605",
//             provinceCode: "MC",
//             countryCode: "MX",
//           },
//           serviceArea: [
//             {
//               code: "MEX",
//               description: "Mexico City-MX",
//             },
//           ],
//         },
//         receiverDetails: {
//           name: "EDNA EDITH QUINTERO COTA",
//           postalAddress: {
//             cityName: "cabo san lucas",
//             countyName: "ventanas fase 1 sn 84 a lado",
//             postalCode: "23454",
//             provinceCode: "BS",
//             countryCode: "MX",
//           },
//           serviceArea: [
//             {
//               code: "LAP",
//               description: "La Paz-MX",
//               facilityCode: "CSL",
//             },
//           ],
//         },
//         totalWeight: 2.7,
//         unitOfMeasurements: "metric",
//         shipperReferences: [],
//         events: [
//           {
//             date: "2023-10-23",
//             time: "14:29:00",
//             typeCode: "PU",
//             description: "Shipment picked up",
//             serviceArea: [
//               {
//                 code: "MEX",
//                 description: "Mexico City-MX",
//               },
//             ],
//           },
//           {
//             date: "2023-10-23",
//             time: "21:28:00",
//             typeCode: "PL",
//             description: "Processed at MEXICO CITY HUB-MEXICO",
//             serviceArea: [
//               {
//                 code: "JJC",
//                 description: "Mexico City Hub-MX",
//               },
//             ],
//           },
//           {
//             date: "2023-10-23",
//             time: "21:31:00",
//             typeCode: "DF",
//             description:
//               "Shipment has departed from a DHL facility MEXICO CITY HUB-MEXICO",
//             serviceArea: [
//               {
//                 code: "JJC",
//                 description: "Mexico City Hub-MX",
//               },
//             ],
//           },
//           {
//             date: "2023-10-23",
//             time: "23:50:00",
//             typeCode: "AF",
//             description: "Arrived at DHL Sort Facility  QUERETARO-MEXICO",
//             serviceArea: [
//               {
//                 code: "QRO",
//                 description: "Queretaro-MX",
//               },
//             ],
//           },
//           {
//             date: "2023-10-24",
//             time: "04:58:00",
//             typeCode: "PL",
//             description: "Processed at QUERETARO-MEXICO",
//             serviceArea: [
//               {
//                 code: "QRO",
//                 description: "Queretaro-MX",
//               },
//             ],
//           },
//           {
//             date: "2023-10-24",
//             time: "05:00:00",
//             typeCode: "DF",
//             description:
//               "Shipment has departed from a DHL facility QUERETARO-MEXICO",
//             serviceArea: [
//               {
//                 code: "QRO",
//                 description: "Queretaro-MX",
//               },
//             ],
//           },
//           {
//             date: "2023-10-24",
//             time: "08:44:00",
//             typeCode: "AR",
//             description: "Arrived at DHL Delivery Facility  LA PAZ-MEXICO",
//             serviceArea: [
//               {
//                 code: "LAP",
//                 description: "La Paz-MX",
//               },
//             ],
//           },
//           {
//             date: "2023-10-24",
//             time: "10:16:00",
//             typeCode: "WC",
//             description: "Shipment is out with courier for delivery",
//             serviceArea: [
//               {
//                 code: "LAP",
//                 description: "La Paz-MX",
//               },
//             ],
//           },
//           {
//             date: "2023-10-24",
//             time: "15:07:00",
//             typeCode: "OK",
//             description: "Delivered",
//             serviceArea: [
//               {
//                 code: "LAP",
//                 description: "La Paz-MX",
//               },
//             ],
//             signedBy: "edgna Edith",
//           },
//         ],
//         numberOfPieces: 1,
//       },
//     ],
//   },
//   success: true,
// };
const ShipmentTracking = () => {
  const navigate = useNavigate();
    const {trackingId} = useParams()
    const [isLoading, setIsLoading] = useState(true);
    const [errMessage, setErrMessage] = useState("");
    const [successState, setSuccessState] = useState(false);
    const [shipmentData, setShipmentData] = useState<IShipment[] | null>(null);
    const backToDashboard = () => {
      navigate('/dashboard');
    };
  // useEffect(() => {
  //   setShipmentData(sampleData.data.shipments);
  // }, []);
  const fetchData = async () => {
    const response = await axiosCalls(`/tracking/single/dashboard?id=${trackingId}`, 'GET')
    console.log(response)
    if(response.success) setIsLoading(false)
    setSuccessState(response?.success)
    setErrMessage(response?.err);
    setShipmentData(response?.data?.shipments)
  }
  useEffect(() => {
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  if(isLoading){
    return <MainContainer activeTab="">
    <div className="flex justify-center items-center h-full w-full -mt-4">
      <BallLoader />
    </div>
    </MainContainer>
  }

  if (errMessage && successState) {
    warn(errMessage)
    return (
      <MainContainer activeTab="">
        <div className="flex justify-center items-center h-full w-full -mt-4 text-lg mx-2">
          {errMessage}
        </div>
      </MainContainer>
    );
  }
  if (errMessage) {
    warn(errMessage)
    return (
      <MainContainer activeTab="">
        <div className="flex justify-center items-center h-full w-full -mt-4 text-lg mx-2">
          {errMessage}
        </div>
      </MainContainer>
    );
  }
  if (shipmentData === null || shipmentData === undefined) {
    return (
      <MainContainer activeTab="">
        <div className="flex justify-center items-center h-full w-full -mt-4 text-lg mx-2">
          Something went wrong, try again later. If the error persists, kindly re-login.
        </div>
      </MainContainer>
    );
  }
  console.log("err", errMessage, "succ", successState, "shipent", shipmentData)

  return (
    <MainContainer activeTab="">
      <button
        onClick={backToDashboard}
        className="cursor-pointer flex items-center text-sm font-semibold"
      >
        <IoChevronBackOutline size={18} className="mr-1" />
        Back
      </button>
      <div>
        <h1 className="text-3xl font-semibold text-center mb-4">
          Shipment Tracking
        </h1>
        <h1 className="text-lg text-center my-4">
          Track your shipment from the timeline below
        </h1>
        <div className="text-xl uppercase font-medium text-center bg-primary text-white py-2 mx-auto max-w-[768px]">{shipmentData[0].status === 'Success'? 'Delivered Successfully': 'Delivery In Progress'}</div>
        <ShipmentTracker events={shipmentData[0].events} />
      </div>
    </MainContainer>
  );
};

export default ShipmentTracking;
