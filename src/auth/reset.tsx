import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContainer from "../components/containers/AuthContainer";
import InputField from "../components/default/InputField";
import { notify, warn } from "../App";
import { Loader } from "../components";
import { ToastContainer } from "react-toastify";

const defaultState = {
  password: "",
  confirmPassword: "",
};

const ResetPassword = () => {
  const navigateTo = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const url = String(import.meta.env.VITE_APP_API_URL);

  const [user, setUser] = useState(defaultState);
  const [token, setToken] = useState("");
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

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token") as string;
    setToken(token);
  }, [location.search]);

  const handleReset: (
    e: React.FormEvent<HTMLFormElement>
  ) => Promise<void> = async (e) => {
    e.preventDefault();
    setLoading(true);
    const ispasswordValid = validateField(user.password);
    const isconfirmPasswordValid = validateField(user.confirmPassword);

    if (!ispasswordValid || !isconfirmPasswordValid) {
      setError({
        password: !ispasswordValid ? "password is required" : "",
        confirmPassword: !isconfirmPasswordValid
          ? "confirmPassword is required"
          : "",
      });
    }

    if (ispasswordValid || isconfirmPasswordValid) {
      setError({
        password:
          user.password !== user.confirmPassword
            ? "Password doesn't match"
            : "",
        confirmPassword:
          user.password !== user.confirmPassword
            ? "Password doesn't match"
            : "",
      });
    }

    setTimeout(() => {
      setError(defaultState);
      setLoading(false);
      return;
    }, 2500);
    if (!ispasswordValid || !isconfirmPasswordValid) {
      setLoading(false);
      return;
    }
    if (user.password !== user.confirmPassword) {
      setLoading(false);
      return;
    }
    axios
      .put(
        `${url}/auth/business-user/reset-password`,
        { token, password: user.password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        setLoading(false);
        setUser(defaultState);
        notify("Reset success, redirecting you...");
        setTimeout(() => {
          navigateTo("/login");
        }, 2500);
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.data.message === "jwt expired") {
          warn("Link expired, pls request for another link");
        } else {
          warn(capitalizeFirstLetter(error.response.data.message));
        }
      });
  };
  return (
    <AuthContainer>
      <ToastContainer />
      <form onSubmit={handleReset}>
        <h2 className="text-[#4169e2] font-bold lg:text-[34px] text-[20px]">
          Reset password
        </h2>
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
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
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
        <Link to="/forget-password" className="flex w-fit my-4 ml-auto">
          <p className="text-[15px] text-[#4169e2] font-semibold">
            Link expired? Request another link
          </p>
        </Link>
        <hr />
        <p className="mt-4 text-center lg:text-[24px] text-[18px] text-[#333]">
          Remembered your password?
        </p>
        <Link to="/login">
          <button className="text-[#fff] py-3 mt-4 w-[100%] flex justify-center bg-[#4169e2] rounded-lg">
            Login to your account
          </button>
        </Link>
      </form>
    </AuthContainer>
  );
};

export default ResetPassword;
