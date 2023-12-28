import { useEffect, useState } from "react";
import { MainContainer } from "../../components";
import { ToastContainer, toast } from "react-toastify";
import Modal from "../../components/default/Modal";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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

  const closeModal = () => setShowModal(false);

  const access_token = sessionStorage
    .getItem("access_token")
    ?.replace(/["']/g, "");

  const deleteFeedback = (id: string) => {
    fetch(`${url}/feedback/delete/?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
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
    fetch(
      `${url}/feedback/fetch?limit=10&page=1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data.data.docs);
        setLoading(false);
      });
  }, [access_token]);

  return (
    <MainContainer activeTab="Feedback">
      <ToastContainer />
      <div className="mt-10">
        <div className="flex justify-between items-center w-[90%]">
          <h2 className="text-[32px] font-semibold mt-3">Feedbacks</h2>
          <div className="flex text-[14px] space-x-6">
            <span
              onClick={() => setShowModal(true)}
              className="text-[#4169e2] font-semibold cursor-pointer"
            >
              Add new feedback
            </span>
          </div>
        </div>
        <div className="mt-10 w-[90%]">
          {loading ? (
            <Skeleton count={5} />
          ) : (
            <div>
              {feedbacks.length > 0 ? (
                <table className="w-[100%]">
                  <thead className="">
                    <tr className="border border-[#ccc] uppercase text-[15px] text-[#6c8073] bg-[#f1f1f1]">
                      <th className="font-bold text-left px-4">
                        Admin details
                      </th>
                      <th className="font-bold text-left">Message</th>
                      <th className="font-bold text-right px-4">Action</th>
                    </tr>
                  </thead>

                  <tbody className="text-[#333]">
                    {feedbacks.map((feedback) => (
                      <tr
                        key={feedback._id}
                        className="border border-[#ccc] hover:bg-[#f1f1f1]"
                      >
                        <td className="py-3 px-4">
                          <div className="flex flex-col text-left">
                            <p className="font-semibold">
                              {feedback.admin_name}
                            </p>
                            <p className="text-[12px]">{feedback.email}</p>
                          </div>
                        </td>
                        <td className="py-3 text-left">
                          <p className="">{feedback.content}</p>
                        </td>
                        <td className="py-3 text-right pr-4">
                          <p
                            className="text-[14px] text-[#ee2020] font-semibold cursor-pointer"
                            onClick={() => deleteFeedback(feedback._id)}
                          >
                            delete feedback
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-[#333] text-[15px] text-center">
                  No feedbacks found. Please add a new feedback
                </p>
              )}
            </div>
          )}
        </div>
        {showModal && <Modal closeModal={closeModal} />}
      </div>
    </MainContainer>
  );
};

export default Feedback;
