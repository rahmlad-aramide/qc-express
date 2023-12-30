import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosCalls } from "../../utils/_api";
import { BallLoader, MainContainer, ShipmentTracker } from "../../components";
import { IShipment } from "../types";
import { IoChevronBackOutline } from "react-icons/io5";
import { warn } from "../../App";

const ShipmentTracking = () => {
  const navigate = useNavigate();
  const { trackingId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const [successState, setSuccessState] = useState(false);
  const [shipmentData, setShipmentData] = useState<IShipment[] | null>(null);
  const backToDashboard = () => {
    navigate("/dashboard");
  };
  const fetchData = async () => {
    const response = await axiosCalls(
      `/tracking/single/dashboard?id=${trackingId}`,
      "GET"
    );
    if (response.success) setIsLoading(false);
    setSuccessState(response?.success);
    setErrMessage(response?.err);
    setShipmentData(response?.data?.shipments);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <MainContainer activeTab="">
        <div className="flex justify-center items-center h-full w-full -mt-4">
          <BallLoader />
        </div>
      </MainContainer>
    );
  }

  if (errMessage && successState) {
    warn(errMessage);
    return (
      <MainContainer activeTab="">
        <div className="flex justify-center items-center h-full w-full -mt-4 text-lg mx-2">
          {errMessage}
        </div>
      </MainContainer>
    );
  }
  if (errMessage) {
    warn(errMessage);
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
          Something went wrong, try again later. If the error persists, kindly
          re-login.
        </div>
      </MainContainer>
    );
  }

  return (
    <MainContainer activeTab="">
      <button
        onClick={backToDashboard}
        className="cursor-pointer flex items-center text-sm font-semibold"
      >
        <IoChevronBackOutline size={18} />
        Back
      </button>
      <div>
        <h1 className="text-3xl font-semibold text-center mb-4">
          Shipment Tracking
        </h1>
        <h1 className="text-lg text-center my-4">
          Track your shipment from the timeline below
        </h1>
        <div className="text-xl uppercase font-medium text-center bg-primary text-white py-2 mx-auto max-w-[768px]">
          {shipmentData[0].status === "Success"
            ? "Delivered Successfully"
            : "Delivery In Progress"}
        </div>
        <ShipmentTracker events={shipmentData[0].events} />
      </div>
    </MainContainer>
  );
};

export default ShipmentTracking;
