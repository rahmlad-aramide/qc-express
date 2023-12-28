import { FC, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Loader } from "..";

interface ModalProps {
  closeModal: () => void;
}

const url = String(import.meta.env.VITE_APP_API_URL);

const Modal: FC<ModalProps> = ({ closeModal }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const access_token = sessionStorage
    .getItem("access_token")
    ?.replace(/["']/g, "");

  const sendFeedback = () => {
    setLoading(true);
    fetch(`${url}/feedback/send`, {
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
          setLoading(false);
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
          setLoading(false);
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
      <div className="bg-[#fff] w-[90%] max-w-[500px] lg:max-w-[600px] mx-auto rounded-lg shadow-2xl p-10 flex flex-col items-start">
        <h2 className="font-semibold text-[18px]">Add new feedback</h2>
        <div className="mt-6 space-y-4 w-[100%]">
          <div className="space-y-2 flex flex-col items-start">
            <textarea
              placeholder="Enter message"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
              className="bg-[#f1f1f1] w-[100%] py-2 px-4 rounded-lg outline-none border-none"
            />
          </div>
          <div className="flex justify-end items-center space-x-4">
            <button
              onClick={closeModal}
              className="bg-red-500 h-10 py-2 px-6 text-[#fff] font-semibold rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={sendFeedback}
              className="bg-[#4169e2] h-10 py-2 px-6 text-[#fff] font-semibold rounded-lg"
            >
              {loading ? <Loader h={20} w={20} /> : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
