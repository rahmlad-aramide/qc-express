import { FC, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

interface ModalProps {
  name: string;
  email: string;
  closeModal: () => void;
}

const Modal: FC<ModalProps> = ({ name, email, closeModal }) => {
  const [message, setMessage] = useState("");

  const access_token = sessionStorage
    .getItem("access_token")
    ?.replace(/["']/g, "");

  const sendFeedback = () => {
    fetch("https://qcbackend.onrender.com/api/v1/feedback/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        content: message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message, {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } else {
          toast.error("Something went wrong", {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <ToastContainer />
      <div className="bg-[#fff] w-[30vw] mx-auto rounded-lg shadow-2xl p-10 flex flex-col items-start">
        <h2 className="font-semibold text-[18px]">Add new feedback</h2>
        <div className="mt-6 space-y-4 w-[100%]">
          <div className="space-y-2 flex flex-col items-start">
            <label className="text-[#333] px-1 font-semibold">Name</label>
            <input
              type="text"
              placeholder={name}
              disabled
              className="bg-[#f1f1f1] w-[100%] py-2 px-4 rounded-lg outline-none border-none"
            />
          </div>
          <div className="space-y-2 flex flex-col items-start">
            <label className="text-[#333] px-1 font-semibold">Email</label>
            <input
              type="text"
              placeholder={email}
              disabled
              className="bg-[#f1f1f1] w-[100%] py-2 px-4 rounded-lg outline-none border-none"
            />
          </div>
          <div className="space-y-2 flex flex-col items-start">
            <label className="text-[#333] px-1 font-semibold">Message</label>
            <textarea
              placeholder="Enter message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-[#f1f1f1] w-[100%] py-2 px-4 rounded-lg outline-none border-none"
            />
          </div>
          <div className="flex justify-end items-center space-x-4">
            <button
              onClick={sendFeedback}
              className="bg-[#4169e2] py-2 px-4 text-[#fff] font-semibold rounded-lg"
            >
              Send
            </button>
            <button
              onClick={closeModal}
              className="bg-[#ee3300] py-2 px-4 text-[#fff] font-semibold rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
