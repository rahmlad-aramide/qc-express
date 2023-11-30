import AuthContainer from "../components/containers/AuthContainer";
import InputField from "../components/default/InputField";
const Signup = () => {
  return (
    <AuthContainer>
      <h2 className="text-[#4169e2] font-bold text-[34px]">
        Input account details
      </h2>

      <div className="space-y-6">
        <div className="flex justify-between mt-10 w-[100%]">
          <div className="w-[50%]">
            <InputField type="text" label="First name" />
          </div>
          <div className="w-[45%]">
            <InputField type="text" label="Last name" />
          </div>
        </div>
        <InputField type="text" label="Username" />
        <div>
          <h2 className="font-semibold text-[18px] text-[#6c8073] pb-2">
            Country
          </h2>
          <select
            name="country"
            className="w-[100%] px-4 outline-none bg-[#fff] border border-[#333] py-3"
          >
            <option value="select">Select</option>
            <option value="Nigeria(default)">Nigeria(default)</option>
          </select>
        </div>

        <InputField type="email" label="Email" />
        <InputField type="text" label="Phone Number" />
        <div className="flex justify-between w-[100%]">
          <div className="w-[45%]">
            <InputField type="text" label="City" />
          </div>
          <div className="w-[50%]">
            <h2 className="font-semibold text-[18px] text-[#6c8073] pb-2">
              Select State
            </h2>
            <select
              name="country"
              className="px-4 w-[100%] outline-none bg-[#fff] border border-[#333] py-2.5"
            >
              <option value="select">Select</option>
              <option value="Nigeria(default)">Nigeria(default)</option>
            </select>
          </div>
        </div>

        <InputField type="text" label="House/APT/Flat Number" />
        <InputField type="password" label="Password" />
        <InputField type="password" label="Confirm Password" />
      </div>

      <p className="text-[14px] text-[#333] pt-6">
        By continuing, I represent that I have read, understand, and fully agree
        to the QC Express{" "}
        <span className="text-[#4169e2]">terms of service</span> and{" "}
        <span className="text-[#4169e2]">privacy policy</span>.
      </p>
      <button className="text-[#fff] py-3 mt-4 w-[100%] flex justify-center bg-[#000]">
        Continue
      </button>
    </AuthContainer>
  );
};

export default Signup;
