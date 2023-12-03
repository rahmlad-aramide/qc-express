import { FC } from "react";

interface SideNavProps {
  activeTab: string;
}

const SideNav:FC<SideNavProps> = ({ activeTab }) => {
  return (
    <div className="mt-10 h-[100%] px-6 space-y-4">
      <p className={`${activeTab === "Dashboard" ? "text-[#4169e2] font-semibold" : "text-[#333]"} text-[18px]`}>Dashboard</p>
      <p className={`${activeTab === "Settings" ? "text-[#4169e2] font-semibold" : "text-[#333]"} text-[18px]`}>Settings</p>
    </div>
  )
}

export default SideNav
