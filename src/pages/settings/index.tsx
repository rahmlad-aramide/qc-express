import { NavLink } from "react-router-dom";
import MainContainer from "../../components/containers/MainContainer";
import { FaChevronRight } from "react-icons/fa";
import { Loader } from "../../components";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";


const Settings = () => {
  const [loading, setLoading] = useState(false);
  const access_token = sessionStorage
  .getItem("access_token")
  ?.replace(/["']/g, "");
  const storedUserString = sessionStorage.getItem("user");
  let access_tier;
  if (storedUserString !== null) {
    const storedUserObject = JSON.parse(storedUserString);
    access_tier = storedUserObject.access_tier;
  }

  const clearSandboxData = () => {
    setLoading(true);
    fetch(`https://qcbackend.onrender.com/api/v1/business_admin/sandbox/clear`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLoading(false);
          toast.success("Sandbox cleared suucessfully!", {
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
  }

  const items = [
    { id: 1, name: "Tokens", path: "/settings/reveal-tokens" },
    { id: 4, name: "Users", path: "/settings/list-business-users" },
  ];
  return (
    <MainContainer activeTab="Settings">
      <ToastContainer />
      <h2 className="text-[36px] font-semibold">Settings</h2>
      <div className="w-[60%] mt-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center px-4 py-3 border-b border-[#ccc] hover:bg-[#f1f1f1]"
          >
            <NavLink
              to={item.path}
              className="flex justify-between items-center py-2 w-[100%]"
            >
              <p>{item.name}</p>
              <FaChevronRight />
            </NavLink>
          </div>
        ))}
        {access_tier === "1" && (
          <div onClick={clearSandboxData} className="flex justify-between items-center text-[#ee3300] cursor-pointer px-4 py-3 hover:bg-[#f1f1f1]">
            <p>Clear Sandbox Data</p>
            {loading && <Loader />}
          </div>
        )}
      </div>
    </MainContainer>
  );
};

export default Settings;
