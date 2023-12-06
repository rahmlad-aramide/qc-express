import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { BallLoader } from "../components";

const ProtectedRoute = () => {
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    const accessToken = sessionStorage.getItem('accessToken');
    if(accessToken){
      setToken(accessToken);
    }
    setIsLoading(false);
  }, []);

  if(isLoading){
    return (
      <div className="bg-gray-200 h-full md:h-[calc(100vh_-_60px)] overflow-y-auto">
        <div className="flex mt-8 h-[50vh] bg-white m-10 rounded-lg justify-center items-center">
          <BallLoader />
        </div>
      </div>
    )
  }

  return token ? <Outlet /> : <Navigate to="/login" />
}
export default ProtectedRoute;