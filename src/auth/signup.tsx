import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContainer from "../components/containers/AuthContainer";
import InputField from "../components/default/InputField";
import { notify, warn } from "../App";
import { Loader } from "../components";
import { ToastContainer } from "react-toastify";

type FrontendData = {
  email: string;
  firstname: string;
  lastname: string;
  website: string;
  phone: string;
  companyDescription: string;
  intent: string;
  companyName: string;
};

type BackendData = {
  email: string;
  firstname: string;
  lastname: string;
  website: string;
  phonenumber: string;
  company_description: string;
  intent: string;
  company_name: string;
};
const mapBackendToFrontend = (frontendData: FrontendData) => {
  const backendData: BackendData = {
    email: frontendData.email || "",
    firstname: frontendData.firstname || "",
    lastname: frontendData.lastname || "",
    website: frontendData.website || "",
    phonenumber: frontendData.phone || "",
    company_description: frontendData.companyDescription || "",
    intent: frontendData.intent || "",
    company_name: frontendData.companyName || "",
  };

  return backendData;
};

const defaultState = {
    email: "",
    firstname: "",
    lastname: "",
    website: "",
    phone: "",
    companyDescription: "",
    intent: "",
    companyName: "",
}

const Signup = () => {
  const navigateTo = useNavigate();
  const [loading, setLoading] = useState(false);
  const url = String(import.meta.env.VITE_APP_API_URL);

  const [user, setUser] = useState(defaultState);
  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    website: "",
    email: "",
    phone: "",
    companyName: "",
    companyDescription: "",
    intent: "",
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

  const handleSubmit: (
    e: React.FormEvent<HTMLFormElement>
  ) => Promise<void> = async (e) => {
    e.preventDefault();
    setLoading(true)
    const isFirstnameValid = validateField(user.firstname);
    const isLastnameValid = validateField(user.lastname);
    const iswebsiteValid = validateField(user.website);
    const isEmailValid = validateField(user.email);
    const isPhoneValid = validateField(user.phone);
    const isCompanyNameValid = validateField(user.companyName);
    const isCompanyDescriptionValid = validateField(user.companyDescription);
    const isIntentValid = validateField(user.intent);

    setError({
      firstname: !isFirstnameValid ? "Firstname is required" : "",
      lastname: !isLastnameValid ? "Lastname is required" : "",
      website: !iswebsiteValid ? "website is required" : "",
      email: !isEmailValid ? "Email is required" : "",
      phone: !isPhoneValid ? "Phone number is required" : "",
      companyName: !isCompanyNameValid ? "Company name is required" : "",
      companyDescription: !isCompanyDescriptionValid
        ? "Company description is required"
        : "",
      intent: !isIntentValid ? "Intent is required" : "",
    });
    setTimeout(() => {
      setError(defaultState);
      setLoading(false);
      return
    }, 2500);


    axios
      .post(`${url}/onboarding-requests/create`, mapBackendToFrontend(user), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setLoading(false);
        console.log(response)
        notify("Submitted successfully, redirecting you.");
        setTimeout(() => {
          navigateTo("/request-success");
        }, 2500);
      })
      .catch((error) => {
        setLoading(false);
        console.log(capitalizeFirstLetter(error.response.data.message));
        warn(capitalizeFirstLetter(error.response.data.message));
      });
  };
  return (
    <AuthContainer>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h2 className="text-[#4169e2] font-bold text-[34px]">Onboarding</h2>
        <p className="text-gray-900 font-medium text-lg">
          Fill in your details to continue
        </p>
        <div className="space-y-6 mt-10">
          <InputField
            type="email"
            label="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            emailError={error.email}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 w-[100%]">
            <InputField
              type="text"
              label="First name"
              value={user.firstname}
              onChange={(e) => setUser({ ...user, firstname: e.target.value })}
              firstNameError={error.firstname}
            />
            <InputField
              type="text"
              label="Last name"
              value={user.lastname}
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
              lastNameError={error.lastname}
            />
          </div>
          <InputField
            type="text"
            label="Website"
            value={user.website}
            onChange={(e) => setUser({ ...user, website: e.target.value })}
            websiteError={error.website}
          />
          <InputField
            type="text"
            label="Phone Number"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            phoneError={error.phone}
          />
          <InputField
            type="text"
            label="Company Name"
            value={user.companyName}
            onChange={(e) => setUser({ ...user, companyName: e.target.value })}
            companyNameError={error.companyName}
          />
          <InputField
            type="text"
            label="Company Description"
            value={user.companyDescription}
            onChange={(e) =>
              setUser({ ...user, companyDescription: e.target.value })
            }
            companyDescriptionError={error.companyDescription}
          />
          <InputField
            type="text"
            label="Intent"
            value={user.intent}
            onChange={(e) => setUser({ ...user, intent: e.target.value })}
            intentError={error.intent}
          />
        </div>

        <p className="text-[14px] text-[#333] pt-6">
          By continuing, I represent that I have read, understand, and fully
          agree to the QC Express{" "}
          <span className="text-[#4169e2]">terms of service</span> and{" "}
          <span className="text-[#4169e2]">privacy policy</span>.
        </p>
        <button
          disabled={loading}
          type="submit"
          className={
            loading
              ? `py-1.5 mt-4 w-[100%] flex justify-center bg-[#000] cursor-not-allowed`
              : "text-[#fff] py-3 mt-4 w-[100%] flex justify-center bg-[#000]"
          }
        >
          {loading ? <Loader /> : "Continue"}
        </button>
      </form>
    </AuthContainer>
  );
};

export default Signup;
