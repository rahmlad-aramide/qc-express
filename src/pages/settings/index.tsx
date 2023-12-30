import { NavLink } from "react-router-dom";
import MainContainer from "../../components/containers/MainContainer";
import { FaChevronRight } from "react-icons/fa";
import { Loader } from "../../components";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const url = String(import.meta.env.VITE_APP_API_URL);

const Settings = () => {
  const [loading, setLoading] = useState(false);
  const access_token = sessionStorage
    .getItem("access_token")
    ?.replace(/["']/g, "");
  const storedUserString = sessionStorage.getItem("user");
  let access_tier;
  let environment;
  if (storedUserString !== null) {
    const storedUserObject = JSON.parse(storedUserString);
    access_tier = storedUserObject.access_tier;
  }

  const environmentString = sessionStorage.getItem("environment");

  if (environmentString === null) {
    sessionStorage.setItem("environment", "sandbox");
  } else {
    environment = environmentString;
  }

  const updateEnvironment = (value: string) => {
    sessionStorage.setItem("environment", value);
    environment = value;
    toast.success("Environment changed!", {
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
  };

  const clearSandboxData = () => {
    setLoading(true);
    fetch(`${url}/business_admin/sandbox/clear`, {
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
          toast.success("Sandbox cleared successfully!", {
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
  };

  const items = [
    { id: 1, name: "Tokens", path: "/settings/reveal-tokens" },
    { id: 4, name: "Users", path: "/settings/list-business-users" },
    { id: 5, name: "Reset Password", path: "/settings/reset-password" },
  ];
  return (
    <MainContainer activeTab="Settings">
      <ToastContainer />
      <h2 className="lg:text-[32px] text-[20px] pt-4 font-semibold">
        Settings
      </h2>
      <div className="lg:w-[60%] w-full max-w-[400px] lg:mt-8 mt-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center lg:px-4 px-1 py-3 border-b border-[#ccc] hover:bg-[#f1f1f1]"
          >
            <NavLink
              to={item.path}
              className="flex justify-between items-center lg:py-2 py-1 text-[14px] lg:text-[16px] w-[100%]"
            >
              <p>{item.name}</p>
              <FaChevronRight />
            </NavLink>
          </div>
        ))}

        <div className="flex items-center justify-between lg:px-4 px-1 py-3 border-b border-[#ccc] hover:bg-[#f1f1f1]">
          <p className="lg:py-2 py-1 lg:text-[16px] text-[14px]">
            Change Environment?
          </p>
          <select
            className="bg-inherit outline-none border-none lg:text-[16px] text-[13px]"
            value={environment}
            onChange={(e) => updateEnvironment(e.target.value)}
          >
            <option value="sandbox">Sandbox</option>
            <option value="production">Production</option>
          </select>
        </div>

        {access_tier === "1" && (
          <div
            onClick={clearSandboxData}
            className="flex justify-between items-center text-red-500 cursor-pointer lg:px-4 px-1 lg:text-[16px] text-[14px] py-3 hover:bg-[#f1f1f1]"
          >
            <p>Clear Sandbox Data</p>
            {loading && <Loader />}
          </div>
        )}
      </div>
    </MainContainer>
  );
};

export default Settings;
