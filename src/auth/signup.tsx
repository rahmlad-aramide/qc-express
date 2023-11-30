import { useState } from "react";
import AuthContainer from "../components/containers/AuthContainer";
import InputField from "../components/default/InputField";
import { States } from "../components/miscellanous/states";

const Signup = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    country: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    house: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    username: "",
    country: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    house: "",
    password: "",
    confirmPassword: "",
  });

  // const [loading, setLoading] = useState(false);

  const validateField = ( value: string) => {
    if (value === "") {
      return false;
    } else {
      return true;
    }
  };

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async () => {
    const isFirstnameValid = validateField(user.firstname);
    const isLastnameValid = validateField(user.lastname);
    const isUsernameValid = validateField(user.username);
    const isCountryValid = validateField(user.country);
    const isEmailValid = validateField(user.email);
    const isPhoneValid = validateField(user.phone);
    const isCityValid = validateField(user.city);
    const isStateValid = validateField(user.state);
    const isHouseValid = validateField(user.house);
    const isPasswordValid = validatePassword(user.password);
    const isConfirmPasswordValid = validatePassword(user.confirmPassword);

    setError({
      firstname: !isFirstnameValid ? "Firstname is required" : "",
      lastname: !isLastnameValid ? "Lastname is required" : "",
      username: !isUsernameValid ? "Username is required" : "",
      country: !isCountryValid ? "Country is required" : "",
      email: !isEmailValid ? "Email is required" : "",
      phone: !isPhoneValid ? "Phone number is required" : "",
      city: !isCityValid ? "City is required" : "",
      state: !isStateValid ? "State is required" : "",
      house: !isHouseValid ? "House number is required" : "",
      password: !isPasswordValid ? "Password must be at least 6 character with at least 1 lowercase, 1 uppercase, 1 digit and 1 special case" : "",
      confirmPassword: !isConfirmPasswordValid ? "passwords do not match" : "",
    });
    setTimeout(() => {
      setError({
        firstname: "",
        lastname: "",
        username: "",
        country: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        house: "",
        password: "",
        confirmPassword: "",
      });
    }, 2000);

    if (user.password !== user.confirmPassword) {
      setError({ ...error, confirmPassword: "passwords do not match" });
    }
  };
  return (
    <AuthContainer>
      <h2 className="text-[#4169e2] font-bold text-[34px]">
        Input account details
      </h2>
      <div className="space-y-6">
        <div className="flex justify-between mt-10 w-[100%]">
          <div className="w-[50%]">
            <InputField
              type="text"
              label="First name"
              value={user.firstname}
              onChange={(e) => setUser({ ...user, firstname: e.target.value })}
              firstNameError={error.firstname}
            />
          </div>
          <div className="w-[45%]">
            <InputField
              type="text"
              label="Last name"
              value={user.lastname}
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
              lastNameError={error.lastname}
            />
          </div>
        </div>
        <InputField
          type="text"
          label="Username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          userNameError={error.username}
        />
        <div>
          <h2 className="font-semibold text-[18px] text-[#6c8073] pb-2">
            Country
          </h2>
          <select
            name="country"
            value={user.country}
            onChange={(e) => setUser({ ...user, country: e.target.value })}
            className="w-[100%] px-4 outline-none bg-[#fff] border border-[#333] py-3"
          >
            <option value="select">Select</option>
            <option value="Nigeria(default)">Nigeria(default)</option>
          </select>
        </div>

        <InputField
          type="email"
          label="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          emailError={error.email}
        />
        <InputField
          type="text"
          label="Phone Number"
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
          phoneError={error.phone}
        />
        <div className="flex justify-between w-[100%]">
          <div className="w-[45%]">
            <InputField
              type="text"
              label="City"
              value={user.city}
              onChange={(e) => setUser({ ...user, city: e.target.value })}
              cityError={error.city}
            />
          </div>
          <div className="w-[50%]">
            <h2 className="font-semibold text-[18px] text-[#6c8073] pb-2">
              Select State
            </h2>
            <select
              name="state"
              value={user.state}
              onChange={(e) => setUser({ ...user, state: e.target.value })}
              className="px-4 w-[100%] outline-none bg-[#fff] border border-[#333] py-2.5"
            >
              <option value="select">Select</option>
              {States.map((state) => (
                <option key={state.id} value={state.state}>
                  {state.state}
                </option>
              ))}
            </select>
          </div>
        </div>

        <InputField
          type="text"
          label="House/APT/Flat Number"
          value={user.house}
          onChange={(e) => setUser({ ...user, house: e.target.value })}
          houseError={error.house}
        />
        <InputField
          type="password"
          label="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          passwordError={error.password}
        />
        <InputField
          type="password"
          label="Confirm Password"
          value={user.confirmPassword}
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
          confirmPasswordError={error.confirmPassword}
        />
      </div>

      <p className="text-[14px] text-[#333] pt-6">
        By continuing, I represent that I have read, understand, and fully agree
        to the QC Express{" "}
        <span className="text-[#4169e2]">terms of service</span> and{" "}
        <span className="text-[#4169e2]">privacy policy</span>.
      </p>
      <button
        onClick={handleSubmit}
        className="text-[#fff] py-3 mt-4 w-[100%] flex justify-center bg-[#000]"
      >
        Continue
      </button>
    </AuthContainer>
  );
};

export default Signup;
