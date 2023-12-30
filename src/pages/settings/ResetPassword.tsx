import axios from "axios";
import { useState } from "react";
import { notify, warn } from "../../App";
import { Loader } from "../../components";
import { ToastContainer } from "react-toastify";
import { InputField, MainContainer } from "../../components";
import { IoChevronBackOutline } from "react-icons/io5";

const defaultState = {
  email: "",
};

const SettingsResetPassword = () => {
  const url = String(import.meta.env.VITE_APP_API_URL);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState(defaultState);
  const [errorEmail, setErrorEmail] = useState({
    email: "",
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
    setLoading(true);
    const isEmailValid = validateField(user.email);

    setErrorEmail({
      email: !isEmailValid ? "Email is required" : "",
    });

    setTimeout(() => {
      if (!isEmailValid) {
        setErrorEmail({
          email: "",
        });
      }
    }, 2000);

    if (!isEmailValid) {
      setLoading(false);
      return;
    }
    axios
      .post(`${url}/auth/business-user/password-reset-link`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        notify(capitalizeFirstLetter(response?.data.message));
        setLoading(false);
        setUser(defaultState);
        setSuccess(true);
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.data.message === "jwt expired") {
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
        <IoChevronBackOutline size={18} />
        Back
      </button>
      {!success ? (
        <form
          onSubmit={handleReset}
          className="w-[90%] mt-4 mx-auto sm:ml-0 max-w-[400px]"
        >
          <h2 className="text-gray-900 font-semibold lg:text-lg">
            Enter your email address to get a password reset link.
          </h2>
          <div className="space-y-6 mt-8">
            <InputField
              type="email"
              label="Email Address"
              placeholder="Enter your email address here"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              emailError={errorEmail.email}
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
      ) : (
        <div className="h-[calc(100%_-_20px)] flex justify-center items-center">
          <div className="flex flex-col justify-start items-center space-y-5">
            <h1 className="text-8xl mb-5">✅</h1>
            <h2 className="text-[#4169e2] font-bold text-[34px]">Success</h2>
            <p className="text-center">
              Your password reset link has been sent to you, please check
              your inbox and follow the prompt.
            </p>
          </div>
        </div>
      )}
    </MainContainer>
  );
};

export default SettingsResetPassword;
