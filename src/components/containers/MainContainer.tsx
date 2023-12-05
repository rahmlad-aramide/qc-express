import { FC, ReactNode } from "react";
import SideNav from "../navs/SideNav";
import TopNav from "../navs/TopNav";

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return (
    <div>
      <TopNav />
      <div className="flex h-[92vh]">
        <div className="w-[15%] min-w-[160px] border-r">
          <SideNav />
        </div>
        <div className="w-[85%] px-5 h-[92vh] pt-4 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default MainContainer;
