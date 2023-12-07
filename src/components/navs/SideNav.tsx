import { FC } from "react";
import { NavLink } from "react-router-dom";
import { RiHome5Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { RiFeedbackLine } from "react-icons/ri";

interface SideNavProps {
  activeTab: string;
}

const SideNav: FC<SideNavProps> = ({ activeTab }) => {
  return (
    <ul className="pt-10 h-[100%] px-2 space-y-4">
      <li>
        <NavLink
          to="/"
          className={`
          flex items-center font-semibold text-[18px] space-x-3
           ${
             activeTab === "Dashboard"
               ? "text-primary py-2 px-2 rounded-lg"
               : "text-[#333] bg-white py-2 px-2"
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
          flex items-center font-semibold text-[18px] space-x-3
           ${
             activeTab === "Feedback"
               ? "text-primary py-2 px-2 rounded-lg"
               : "text-[#333] bg-white py-2 px-2"
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
          flex items-center font-semibold text-[18px] space-x-3
           ${
             activeTab === "Settings"
               ? "text-primary py-2 px-2 rounded-lg"
               : "text-[#333] bg-white py-2 px-2"
           }
          `}
        >
          <IoSettingsOutline size={25} className="mr-2" />
          Settings
        </NavLink>
      </li>
    </ul>
  );
};

export default SideNav;
