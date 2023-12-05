import { FC } from "react";
import { NavLink } from "react-router-dom";
import { RiHome5Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePowerSettingsNew } from "react-icons/md";

const SideNav: FC = () => {
  return (
    <ul className="pt-10 h-[100%] px-2 space-y-4">
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
        <button className="border-none rounded-lg w-full flex items-center py-2 px-2 text-dark hover:text-white hover:bg-primary active:scale-90 font-semibold text-lg">
          <MdOutlinePowerSettingsNew size={25} className="mr-2" />
          Logout
        </button>
      </li>
    </ul>
  );
};

export default SideNav;
