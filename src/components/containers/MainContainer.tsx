import { FC, ReactNode } from "react";
import SideNav from "../navs/SideNav";
import TopNav from "../navs/TopNav";

interface MainContainerProps {
  children: ReactNode;
  activeTab: string;
}

const MainContainer: FC<MainContainerProps> = ({ children, activeTab }) => {
  return (
    <div>
      <TopNav />
      <div className="flex h-[100vh]">
        <div className="w-[15%] border-r-4 border-[#808080]">
          <SideNav activeTab={activeTab} />
        </div>
        <div className="w-[85%] px-10 h-[92vh] overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default MainContainer;
