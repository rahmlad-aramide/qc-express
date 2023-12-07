import { useEffect, useState } from "react";
import { MainContainer } from "../../components";
import { ToastContainer, toast } from "react-toastify";
import Modal from "../../components/default/Modal";

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

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState<Feedbacks[]>([]);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);


  const access_token = sessionStorage
    .getItem("access_token")
    ?.replace(/["']/g, "");

  const deleteFeedback = (id: string) => {
    fetch(`https://qcbackend.onrender.com/api/v1/feedback/delete/?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Feedback resolved!", {
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
      "https://qcbackend.onrender.com/api/v1/feedback/fetch?limit=10&page=1",
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
      });
  }, [access_token]);

  return (
    <MainContainer activeTab="Feedback">
      <ToastContainer />
      <div className="mt-10">
        <h2 className="text-[32px] font-semibold mt-3">Feedbacks</h2>
        <div className="mt-10 w-[100%]">
          <div className="flex justify-end mb-6 text-[14px] space-x-6">
            <span className="text-primary">0 items selected</span>
            <span className="text-[#ee3300]">Resolve all feedbacks</span>
            <span
              onClick={() => setShowModal(true)}
              className="text-[#276e59] cursor-pointer"
            >
              Add new feedback
            </span>
          </div>
          <table className="w-[100%]">
            <thead>
              <tr className="border-b border-[#ccc] uppercase text-[15px] text-[#6c8073]">
                <th className="font-bold py-1"></th>
                <th className="font-bold text-left">Admin details</th>
                <th className="font-bold text-center">Message</th>
                <th className="font-bold">Action</th>
              </tr>
            </thead>

            <tbody className="text-[#333]">
              {feedbacks.map((feedback) => (
                <tr
                  key={feedback._id}
                  className="border-b border-[#ccc] hover:bg-[#f1f1f1]"
                >
                  <td className="py-3 px-4">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 ">
                    <div className="flex items-center space-x-2">
                      <div>
                        <p className="font-semibold">{feedback.admin_name}</p>
                        <p className="text-[12px]">{feedback.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <p className="">{feedback.content}</p>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <p
                      className="text-[14px] text-[#ee2020] font-semibold cursor-pointer"
                      onClick={() => deleteFeedback(feedback._id)}
                    >
                      Resolve feedback
                    </p>
                    {showModal && <Modal closeModal={closeModal} name={feedback.admin_name} email={feedback.email} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainContainer>
  );
};

export default Feedback;
