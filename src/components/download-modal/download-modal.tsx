import { FC, useState } from "react";
import { Loader } from "..";
import { useModal } from "../../contexts/ModalContext";
import { axiosCalls } from "../../utils/_api";
import { inform, notify, warn } from "../../App";
import { downloadPDF } from "../../utils/_pdf";

const DownloadModal: FC = () => {
  const { _id, isOpen, setIsOpen } = useModal();
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const handleDownload = async () => {
    inform("Downloading document...");
    setIsLoading(true);
    const response = await axiosCalls(
      `/booking/download-docs?id=${_id}`,
      "GET"
    );
    setErrMessage(response?.err);
    downloadPDF(response.data[0].content, "document.pdf");
    // downloadPDFFromBuffer(response.data.data, 'document.pdf')
    setIsLoading(false);
    setTimeout(() => {
      notify("Downloaded successfully");
      setIsOpen(!isOpen);
    }, 1000);
  };
  if (errMessage) {
    warn(errMessage);
    setIsOpen(!isOpen);
    setIsLoading(false);
  }
  if (!isOpen) {
    if (isLoading) {
      setIsLoading(false);
    }
    return;
  }
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#fff] w-[90%] max-w-[500px] lg:max-w-[600px] mx-auto rounded-lg shadow-2xl p-10 flex flex-col items-start">
        <div className="space-y-4 w-[100%]">
          <div className="flex flex-col py-12 px-8 gap-8">
            <div className="flex flex-col justify-between items-center w-full">
              <div className="flex justify-center bg-[#D1FADF] rounded-full p-3 mb-8 border-[8px] border-[#ECFDF3]">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12"
                    stroke="#039855"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="mb-2 text-xl font-semibold text-center text-[#242128]">
                Download Document
              </div>
              <div className="text-sm text-center text-[#49474D]">
                Are you sure you want to download the document for this
                shipment?
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center space-x-4">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="bg-red-500 h-10 py-2 px-6 text-[#fff] font-semibold rounded-lg"
            >
              Cancel
            </button>
            <button
              disabled={isLoading}
              onClick={handleDownload}
              className="bg-[#4169e2] h-10 py-2 px-6 text-[#fff] font-semibold rounded-lg"
            >
              {isLoading ? <Loader h={20} w={20} /> : "Yes, Download"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
