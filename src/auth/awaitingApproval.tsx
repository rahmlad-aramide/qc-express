import { Link } from "react-router-dom";
import AuthContainer from "../components/containers/AuthContainer";

const AwaitingApproval = () => {
  return (
    <AuthContainer>
      <div className="flex justify-center items-center flex-col space-y-6 gap-4 h-full">
        <h1 className="text-9xl mb-3">✅</h1>
        <p className="text-gray-700 text-center text-sm">
          Your request was sent successfully, you'll hear from us via your mail
          inbox
        </p>
        <Link to="/">
          <button className="rounded-lg bg-primary py-3 px-6 font-bold text-white hover:scale-90 active:scale-100 uppercase transition duration-300">
            Go back to Home
          </button>
        </Link>
      </div>
    </AuthContainer>
  );
};
export default AwaitingApproval;
