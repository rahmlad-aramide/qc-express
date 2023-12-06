import { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiHome5Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { notify } from "../../App";
import { ToastContainer } from "react-toastify";

const SideNav: FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const token = sessionStorage.getItem("accessToken");
    // If a token is present, remove it
    if (token) {
      sessionStorage.removeItem("accessToken");
    }
    notify("Loging out...")
    // Use navigate to redirect to the login page
    setTimeout(()=> {
      navigate('/login');
    }, 2500)
  };
  
  return (
    <ul className="pt-10 h-[100%] px-2 space-y-4">
      <ToastContainer />
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center font-semibold w-full bg-primary text-white py-2 px-2 rounded-lg text-lg"
              : "flex items-center text-dark font-semibold w-full bg-white hover:bg-primary hover:text-white py-2 px-2 rounded-lg text-lg"
          }
        >
          <RiHome5Line size={25} className="mr-2" />
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-white font-semibold w-full bg-primary py-2 px-2 rounded-lg text-lg"
              : "flex items-center text-dark font-semibold w-full bg-white hover:bg-primary hover:text-white py-2 px-2 rounded-lg text-lg"
          }
        >
          <IoSettingsOutline size={25} className="mr-2" />
          Settings
        </NavLink>
      </li>
      <li>
        <button onClick={handleLogout} className="border-none rounded-lg w-full flex items-center py-2 px-2 text-dark hover:text-white hover:bg-primary active:scale-90 font-semibold text-lg">
          <MdOutlinePowerSettingsNew size={25} className="mr-2" />
          Logout
        </button>
      </li>
    </ul>
  );
};

export default SideNav;
