import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { BallLoader } from "../components";

const ProtectedRoute = () => {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const access_token = sessionStorage.getItem("access_token");
    if (access_token) {
      setToken(access_token);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-gray-200 h-full md:h-[calc(100vh_-_60px)] overflow-y-auto">
        <div className="flex mt-8 h-[50vh] bg-white m-10 rounded-lg justify-center items-center">
          <BallLoader />
        </div>
      </div>
    );
  }

  return token ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRoute;
