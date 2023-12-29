import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notify, warn } from "../../App";
import { Loader } from "../../components";
import { ToastContainer } from "react-toastify";
import { InputField, MainContainer } from "../../components";
import { IoChevronBackOutline } from "react-icons/io5";

const defaultState = {
    password: "",
    confirmPassword: "",
}

const SettingsResetPassword = () => {
  const navigateTo = useNavigate();

  const url = String(import.meta.env.VITE_APP_API_URL);
  const token = sessionStorage.getItem('access_token');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(defaultState);
  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
  });

  const validateField = (value: string) => {
    if (value === "") {
      return false;
    } else {
      return true;
    }
  };

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  const handleReset: (
    e: React.FormEvent<HTMLFormElement>
  ) => Promise<void> = async (e) => {
    e.preventDefault();
    setLoading(true)
    const ispasswordValid = validateField(user.password);
    const isconfirmPasswordValid = validateField(user.confirmPassword);
    

    if(!ispasswordValid || !isconfirmPasswordValid){
      setError({
        password: !ispasswordValid ? "password is required" : "",
        confirmPassword: !isconfirmPasswordValid ? "confirmPassword is required" : "",
      });
    }

    if(ispasswordValid || isconfirmPasswordValid){
      setError({
        password: user.password !== user.confirmPassword ? "Password doesn't match" : "",
        confirmPassword: user.password !== user.confirmPassword ? "Password doesn't match" : "",
      });
    }

    setTimeout(() => {
      setError(defaultState);
      setLoading(false);
      return
    }, 2500);
    if(!ispasswordValid || !isconfirmPasswordValid ){
      setLoading(false);
      return
    }
    if(user.password !== user.confirmPassword ){
      setLoading(false);
      return
    }
    axios
      .put(`${url}/auth/business-user/reset-password`, {token, password: user.password}, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        notify("Reset success, redirecting you...");
        setLoading(false);
        setUser(defaultState)
        setTimeout(() => {
          navigateTo("/settings");
        }, 2500);
      })
      .catch((error) => {
        setLoading(false);
        console.log(capitalizeFirstLetter(error.response.data.message));
        if(error.response.data.message === 'jwt expired'){
          warn("Session expired, pls re-login and try again");
        } else {
          warn(capitalizeFirstLetter(error.response.data.message));
        }
      });
  };
  const backToSettings = () => {
    window.history.back();
  };

  return (
    <MainContainer activeTab="Settings">
      <ToastContainer />
      <button
        onClick={backToSettings}
        className="cursor-pointer flex items-center text-sm font-semibold"
      >
        <IoChevronBackOutline size={18} className="mr-1" />
        Back
      </button>
      <form onSubmit={handleReset} className="w-[90%] mt-2 mx-auto sm:ml-0 max-w-[400px]">
        <h2 className="text-[#4169e2] font-bold text-[34px]">Reset password</h2>
        <p className="text-gray-900 font-medium text-lg">
          To reset your password, fill in the details below
        </p>
        <div className="space-y-6 mt-10">
          
            <InputField
              type="password"
              label="Password"
              placeholder="Enter your new password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              passwordError={error.password}
            />
            <InputField
              type="password"
              label="Confirm Password"
              placeholder="Confirm your new password"
              value={user.confirmPassword}
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
              confirmPasswordError={error.confirmPassword}
            />
          
        </div>
        <button
          disabled={loading}
          type="submit"
          className={
            loading
              ? `py-1.5 mt-4 w-[100%] flex justify-center bg-[#000] rounded-lg cursor-not-allowed`
              : "text-[#fff] py-3 mt-6 w-[100%] flex justify-center bg-[#000] rounded-lg"
          }
        >
          {loading ? <Loader /> : "Submit"}
        </button>
      </form>
    </MainContainer>
  );
};

export default SettingsResetPassword;
