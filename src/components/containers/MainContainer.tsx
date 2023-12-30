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
      <div className="flex h-[92vh]">
        <div className="lg:min-w-[160px] w-fit lg:w-[15%] border-r">
          <SideNav activeTab={activeTab} />
        </div>
        <div className="w-[85%] mx-auto lg:px-10 px-4 h-[92vh] lg:pt-10 pt-4 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
