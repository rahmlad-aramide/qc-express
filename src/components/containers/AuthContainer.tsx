import { FC, ReactNode } from "react";

interface AuthContainerProps {
  children: ReactNode;
}

const AuthContainer: FC<AuthContainerProps> = ({ children }) => {
  return (
    <div className="w-[90vw] mx-auto flex lg:justify-between">
      <div className="lg:flex hidden items-center justify-center h-[100vh]">
        <img src="/assets/auth_banner.jpeg" alt="auth_banner" className="h-[600px]" />
      </div>
      <div className="lg:w-[50%] w-[100%] h-[90vh] overflow-auto lg:px-10 lg:pt-[15vh] pt-[5vh]">{children}</div>
    </div>
  );
};

export default AuthContainer;
