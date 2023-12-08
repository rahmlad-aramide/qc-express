import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface AuthContainerProps {
  children: ReactNode;
}

const AuthContainer: FC<AuthContainerProps> = ({ children }) => {
  return (
    <div className="w-[90vw] mx-auto flex lg:justify-between">
      <Link to="/" className="absolute top-8 bg-white p-2 pl-0">
        <img src="/assets/logo.png" alt="logo" className="w-[12rem]" />
      </Link>
      <div className="lg:flex hidden items-center justify-center h-[100vh]">
          <img
            src="/assets/auth_banner.jpeg"
            alt="auth_banner"
            className="h-[600px]"
          />
      </div>
      <div className="lg:w-[50%] w-[100%] h-[90vh] overflow-auto lg:px-10 lg:pt-[15vh] pt-[12vh]">
        {children}
      </div>
    </div>
  );
};

export default AuthContainer;
