import { useState } from "react";
import AuthContainer from "../components/containers/AuthContainer";
import InputField from "../components/default/InputField";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
  });
  const validateField = (value: string) => {
    if (value === "") {
      return false;
    } else {
      return true;
    }
  };
  const handleLogin = async () => {
    const isEmailValid = validateField(user.email);

    setError({
      email: !isEmailValid ? "Email is required" : "",
    });

    setTimeout(() => {
      setError({
        email: "",
      });
    }, 2000);
  };
  return (
    <AuthContainer>
      <h2 className="text-[#4169e2] font-bold text-[34px]">Sign In</h2>
      <p>To continue, please provide a valid Email.</p>

      <div className="mt-[5vh] space-y-6">
        <InputField
          type="email"
          label="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          emailError={error.email}
        />
        <InputField
          type="password"
          label="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <p className="text-[14px] text-[#333] pt-6">
        By continuing, I represent that I have read, understand, and fully agree
        to the QC Express{" "}
        <span className="text-[#4169e2]">terms of service</span> and{" "}
        <span className="text-[#4169e2]">privacy policy</span>.
      </p>

      <button
        onClick={handleLogin}
        className="text-[#fff] py-3 mt-4 w-[100%] flex justify-center bg-[#000]"
      >
        Continue
      </button>
      <p className="text-[15px] text-[#4169e2] font-semibold my-4">
        Forgot Password?
      </p>
      <hr />
      <p className="mt-4 text-center lg:text-[24px] text-[18px] text-[#333]">
        New to QC Express?
      </p>
      <button className="text-[#fff] py-3 mt-4 w-[100%] flex justify-center bg-[#4169e2]">
        Create your QC Express account
      </button>
    </AuthContainer>
  );
};

export default Login;
