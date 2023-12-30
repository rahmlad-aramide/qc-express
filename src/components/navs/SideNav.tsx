import { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiHome5Line, RiFeedbackLine } from "react-icons/ri";
import { RxExternalLink } from "react-icons/rx";
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
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("environment");
    }
    inform("Logging out...")
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
          <RiHome5Line size={30} />
          <span className="lg:block hidden">Dashboard</span>
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
          <RiFeedbackLine size={30} />
          <span className="lg:block hidden">Feedback</span>
        </NavLink>
      </li>
      <li>
        <a
          href="https://documenter.getpostman.com/view/25448990/2s9YkjCjQT" target="_blank"
          className={`
          flex items-center font-semibold text-[#333] active:text-primary px-2 text-[18px] space-x-3 transition duration-300 hover:scale-105
          `}
        >
          <RxExternalLink size={25} />
          <span>API Docs</span>
        </a>
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
          <IoSettingsOutline size={30} />
          <span className="lg:block hidden">Settings</span>
        </NavLink>
      </li>
      <li className="mt-auto">
        <button
          onClick={handleLogout}
          className={`
          flex items-center font-semibold text-[18px] lg:space-x-3 text-red-500 px-2 transition duration-300 hover:scale-105
          `}
        >
          <MdOutlinePowerSettingsNew size={25} />
          <span className="lg:block hidden">Logout</span>
        </button>
      </li>
    </ul>
  );
};

export default SideNav;
