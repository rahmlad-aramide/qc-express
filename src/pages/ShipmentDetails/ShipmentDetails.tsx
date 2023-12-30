import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MainContainer } from "../../components";
import { IoChevronBackOutline } from "react-icons/io5";

import { ShipmentMeta, Package2, DeliveryInfo } from "../types";
import { warn } from "../../App";
import { useData } from "../../contexts/DataContext";
// import { useData } from "../../contexts/DataContext";

interface ShipmentDetailsProps {
  shipmentMeta: ShipmentMeta;
  packages: Package2[];
  description: string;
  number_items: number;
  delivery_info: DeliveryInfo[];
  updatedAt: string | undefined | null;
}

function formatToLocalDateTime(dateTimeString: string): string {
  const date = new Date(dateTimeString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formattedDate: string = new Intl.DateTimeFormat(
    "default",
    options
  ).format(date);
  return formattedDate;
}

const ShipmentDetails = () => {
  const navigate = useNavigate();
  const {resData} = useData();
  const [shipmentData, setShipmentData] = useState<ShipmentDetailsProps | null>(
    null
  );
  const { trackingId } = useParams();

  const backToDashboard = () => {
    navigate('/dashboard');
  };

  const finalData = resData?.topBooking.filter(booking=> (
    booking.shipmentMeta.trackingId === trackingId
  ))

  useEffect(() => {
    finalData && setShipmentData(finalData[0]);
  }, [finalData]);


  if (resData === null || undefined) {
    warn("An error has occurred, pls re-login")
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
      <div className="space-y-4 py-4">
        <h2 className="text-3xl font-bold">Shipment Information</h2>
        <p className="text-sm text-right -mb-4">
          Last updated on:{" "}
          <span className="bg-gray-300 px-1 rounded">
            {shipmentData?.updatedAt &&
              formatToLocalDateTime(shipmentData?.updatedAt)}
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-300 rounded-lg p-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Tracking Information</h3>
              <p>Tracking ID: {shipmentData?.shipmentMeta.trackingId}</p>
              <p>
                Internal Tracking URL:{" "}
                <Link
                  to={`/tracking/${shipmentData?.shipmentMeta.trackingId}`}
                  className="text-primary underline break-words"
                >
                  Click to track on our website
                </Link>
              </p>
              <p>
                External Tracking URL:{" "}
                <a
                  className="text-primary underline break-words"
                  href={shipmentData?.shipmentMeta.trackingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {shipmentData?.shipmentMeta.trackingUrl}
                </a>
              </p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg p-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Package Information</h3>
              <div>
                {shipmentData?.packages.map((pkg) => (
                  <div key={pkg._id}>
                    <p>Package ID: {pkg.id}</p>
                    <p>Description: {pkg?.description}</p>
                    <p>Weight: {pkg.weight}kg</p>
                    <div>
                      <p className="text-lg font-medium mt-1">Dimension</p>
                      <p>
                        Length: {pkg.dimensions.length}cm Width:{" "}
                        {pkg.dimensions.width}cm Height: {pkg.dimensions.height}
                        cm
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg p-6">
            <div>
              <h3 className="text-xl font-bold mb-2 capitalize">
                {shipmentData?.delivery_info[0].type.toLowerCase()} Information
              </h3>
              <div>
                <div>
                  <div>
                    <p className="text-lg font-medium">Contact Information</p>
                    <p>
                      Full Name:{" "}
                      {
                        shipmentData?.delivery_info[0].contactInformation
                          .fullName
                      }
                    </p>
                    <p>
                      Email Address:{" "}
                      {shipmentData?.delivery_info[0].contactInformation.email}
                    </p>
                    <p>
                      Phone Number:{" "}
                      {shipmentData?.delivery_info[0].contactInformation.phone}
                    </p>
                    <p>
                      Company Name:{" "}
                      {
                        shipmentData?.delivery_info[0].contactInformation
                          .companyName
                      }
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-medium mt-2">Location/Address</p>
                    <p>
                      Address Line 1:{" "}
                      {
                        shipmentData?.delivery_info[0].postalAddress
                          .addressLine1
                      }
                    </p>
                    <p>
                      County/Province:{" "}
                      {shipmentData?.delivery_info[0].postalAddress.countyName}
                    </p>
                    <p>
                      Province Code:{" "}
                      {
                        shipmentData?.delivery_info[0].postalAddress
                          .provinceCode
                      }
                    </p>
                    <p>
                      City (Country Code):{" "}
                      {shipmentData?.delivery_info[0].postalAddress.cityName} (
                      {shipmentData?.delivery_info[0].postalAddress.countryCode}
                      )
                    </p>
                    <p>
                      Postal Code:{" "}
                      {shipmentData?.delivery_info[0].postalAddress.postalCode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg p-6">
            <div>
              <h3 className="text-xl font-bold mb-2 capitalize">
                {shipmentData?.delivery_info[1].type.toLowerCase()} Information
              </h3>
              <div>
                <div>
                  <div>
                    <p className="text-lg font-medium">Contact Information</p>
                    <p>
                      Full Name:{" "}
                      {
                        shipmentData?.delivery_info[1].contactInformation
                          .fullName
                      }
                    </p>
                    <p>
                      Email Address:{" "}
                      {shipmentData?.delivery_info[1].contactInformation.email}
                    </p>
                    <p>
                      Phone Number:{" "}
                      {shipmentData?.delivery_info[1].contactInformation.phone}
                    </p>
                    <p>
                      Company Name:{" "}
                      {
                        shipmentData?.delivery_info[1].contactInformation
                          .companyName
                      }
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-medium mt-2">Location/Address</p>
                    <p>
                      Address Line 1:{" "}
                      {
                        shipmentData?.delivery_info[1].postalAddress
                          .addressLine1
                      }
                    </p>
                    <p>
                      County/Province:{" "}
                      {shipmentData?.delivery_info[1].postalAddress.countyName}
                    </p>
                    <p>
                      Province Code:{" "}
                      {
                        shipmentData?.delivery_info[1].postalAddress
                          .provinceCode
                      }
                    </p>
                    <p>
                      City (Country Code):{" "}
                      {shipmentData?.delivery_info[1].postalAddress.cityName} (
                      {shipmentData?.delivery_info[1].postalAddress.countryCode}
                      )
                    </p>
                    <p>
                      Postal Code:{" "}
                      {shipmentData?.delivery_info[1].postalAddress.postalCode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default ShipmentDetails;
