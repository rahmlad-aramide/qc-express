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
        <div className="w-[15%] min-w-[160px] border-r">
          <SideNav activeTab={activeTab} />
        </div>
        <div className="w-[85%] px-10 h-[92vh] pt-10 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default MainContainer;
