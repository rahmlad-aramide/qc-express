import { useEffect, useState } from "react";
import { Loader, MainContainer } from "../../components";
import { ToastContainer, toast } from "react-toastify";
import Modal from "../../components/default/Modal";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaTrashAlt } from "react-icons/fa";

type Feedbacks = {
  _id: string;
  admin_name: string;
  business: string;
  content: string;
  createdAt: string;
  email: string;
  from: string;
  org_name: string;
  resolved: boolean;
  updatedAt: string;
};

const url = String(import.meta.env.VITE_APP_API_URL);

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState<Feedbacks[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [deleteLoader, setDeleteLoader] = useState(false);

  const closeModal = () => setShowModal(false);

  const access_token = sessionStorage
    .getItem("access_token")
    ?.replace(/["']/g, "");

  const deleteFeedback = (id: string) => {
    setDeleteLoader(true);
    fetch(`${url}/feedback/delete/?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDeleteLoader(false);
        if (data.success) {
          toast.success("Feedback deleted!", {
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
          }, 1000);
        } else {
          setDeleteLoader(false);
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

  useEffect(() => {
    fetch(`${url}/feedback/fetch?limit=10&page=1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data.data.docs);
        setLoading(false);
      });
  }, [access_token]);

  return (
    <MainContainer activeTab="Feedback">
      <ToastContainer />
      <div className="lg:mt-10 mt-2">
        <div className="flex justify-between items-center lg:w-[90%]">
          <h2 className="lg:text-[32px] text-[20px] font-semibold">
            Feedbacks
          </h2>
          <span
            onClick={() => setShowModal(true)}
            className="text-[#4169e2] lg:text-[14px] text-[13px] pt-2 font-semibold cursor-pointer"
          >
            Add feedback
          </span>
        </div>
        <div className="mt-10 lg:w-[90%]">
          {loading ? (
            <Skeleton count={5} />
          ) : (
            <div>
              {feedbacks.length > 0 ? (
                <div className="space-y-4">
                  {feedbacks.map((feedback) => (
                    <div
                      key={feedback._id}
                      className="mt-3 border-b-2 border-[#ccc] pb-3"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                          <p className="text-[16px] lg:text-[20px] w-[90%]">
                            {feedback.content}
                          </p>
                          <p className="text-[12px] lg:text-[15px] font-semibold pt-2">
                            by {feedback.admin_name}
                          </p>
                          <p className="text-[10px] lg:text-[12px]">
                            {feedback.email}
                          </p>
                        </div>
                        <p
                          className="text-[14px] text-[#ee2020] font-semibold cursor-pointer"
                          onClick={() => deleteFeedback(feedback._id)}
                        >
                          <FaTrashAlt />
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[#333] text-[15px] pt-[20vh] text-center">
                  No feedbacks found. Please add a new feedback
                </p>
              )}
            </div>
          )}
        </div>
        {deleteLoader && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000080] flex justify-center items-center z-50">
            <Loader />
          </div>
        )}
        {showModal && <Modal closeModal={closeModal} />}
      </div>
    </MainContainer>
  );
};

export default Feedback;
