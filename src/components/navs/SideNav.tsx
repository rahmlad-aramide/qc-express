import { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiHome5Line, RiFeedbackLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { inform } from "../../App";
import { ToastContainer } from "react-toastify";

interface SideNavProps {
  activeTab: string;
}

const SideNav: FC<SideNavProps> = ({ activeTab }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      sessionStorage.removeItem("accessToken");
    }
    inform("Loging you out...")
    setTimeout(()=> {
      navigate('/login');
    }, 2500)
  };
  return (
    <ul className="flex flex-col pb-10 h-[100%] gap-8 px-2">
      <ToastContainer />
      <li>
        <NavLink
          to="/dashboard"
          className={`
          flex items-center font-semibold text-[18px] space-x-3 transition duration-300 hover:scale-105
           ${
             activeTab === "Home"
               ? "text-primary px-2"
               : "text-[#333] px-2"
           }
          `}
        >
          <RiHome5Line size={25} className="mr-2" />
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/feedback"
          className={`
          flex items-center font-semibold text-[18px] space-x-3 transition duration-300 hover:scale-105
           ${
             activeTab === "Feedback"
               ? "text-primary px-2"
               : "text-[#333] px-2"
           }
          `}
        >
          <RiFeedbackLine size={25} />
          <span>Feedback</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/settings"
          className={`
          flex items-center font-semibold text-[18px] space-x-3 transition duration-300 hover:scale-105
           ${
             activeTab === "Settings"
               ? "text-primary px-2"
               : "text-[#333] px-2"
           }
          `}
        >
          <IoSettingsOutline size={25} className="mr-2" />
          Settings
        </NavLink>
      </li>
      <li className="mt-auto">
        <button
          onClick={handleLogout}
          className={`
          flex items-center font-semibold text-[18px] space-x-3 text-red-500 px-2 transition duration-300 hover:scale-105
          `}
        >
          <MdOutlinePowerSettingsNew size={25} className="mr-2" />
          Logout
        </button>
      </li>
    </ul>
  );
};

export default SideNav;
