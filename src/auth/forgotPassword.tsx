import { useState } from "react";
import AuthContainer from "../components/containers/AuthContainer";
import InputField from "../components/default/InputField";
import axios from "axios";
import { notify, warn } from "../App";
import { Loader } from "../components";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const url = String(import.meta.env.VITE_APP_API_URL);

const defaultState = {
  email: "",
};
const ForgotPassword = () => {
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

  const handleRequest: (
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
        setLoading(false);
        setSuccess(true);
        notify(capitalizeFirstLetter(response?.data.message));
      })
      .catch((error) => {
        setLoading(false);
        warn(
          capitalizeFirstLetter(error?.message && error?.response.data.message)
        );
      });
  };
  return (
    <AuthContainer>
      <ToastContainer />
      {success ? (
        <div className="h-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-5">
            <h1 className="text-8xl mb-5">✅</h1>
            <h2 className="text-[#4169e2] font-bold text-[34px]">Success</h2>
            <p className="text-center">
              Your password reset link has been sent to you, <br /> please check
              your inbox and follow the prompt.
            </p>
          </div>
        </div>
      ) : (
        <div className="h-full flex justify-center items-center">
          <form onSubmit={handleRequest}>
            <h2 className="text-[#4169e2] font-bold text-[34px]">
              Forget Password
            </h2>
            <p>
              Please provide your email address to get a password reset link.
            </p>

            <div className="mt-[5vh] space-y-6">
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
                  : "text-[#fff] py-3 mt-4 w-[100%] flex justify-center bg-[#000] rounded-lg"
              }
            >
              {loading ? <Loader /> : "Continue"}
            </button>
            <hr className="mt-8" />
            <p className="mt-4 text-center lg:text-[24px] text-[18px] text-[#333]">
              Remembered your password?
            </p>
            <Link to="/login">
              <button className="text-[#fff] py-3 mt-4 w-[100%] flex justify-center bg-[#4169e2] rounded-lg">
                Login to your account
              </button>
            </Link>
          </form>
        </div>
      )}
    </AuthContainer>
  );
};

export default ForgotPassword;
