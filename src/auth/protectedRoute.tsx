import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Loader } from "../components";

const ProtectedRoute = () => {
  const [user, setUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    const userData = sessionStorage.getItem('authUser');
    if(userData){
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  if(isLoading){
    return (
      <div className="bg-gray-200 h-full md:h-[calc(100vh_-_60px)] overflow-y-auto">
        <div className="flex mt-8 h-[50vh] bg-white m-10 rounded-lg justify-center items-center">
          <Loader />
        </div>
      </div>
    )
  }

  return user ? <Outlet /> : <Navigate to="/" />
}
export default ProtectedRoute;