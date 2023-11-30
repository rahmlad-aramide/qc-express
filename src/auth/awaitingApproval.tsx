import AuthContainer from "../components/containers/AuthContainer";

const AwaitingApproval = () => {
  return (
    <AuthContainer>
      <div className="flex justify-center items-center flex-col space-y-6 mt-[20vh]">
        <h1 className="text-9xl">🛠️</h1>
        <p className="text-gray-700">
          This page is currently Under construction
        </p>
      </div>
    </AuthContainer>
  );
};
export default AwaitingApproval;
