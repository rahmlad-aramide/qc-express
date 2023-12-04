import MainContainer from "../../components/containers/MainContainer";

const DeleteUser = () => {
  const backToSettings = () => {
    window.history.back();
  };
  return (
    <MainContainer activeTab="Settings">
      <span onClick={backToSettings} className="cursor-pointer">
        {"<< "}back
      </span>

      <h2 className="text-[32px] font-semibold mt-3">Delete User</h2>
      <div className="mt-10 w-[50%]">
        <input
          type="text"
          placeholder="Enter user id"
          className="bg-[#f1f1f1] w-[100%] py-2 px-4 rounded-lg outline-none border-none"
        />
        <div className="flex justify-end mt-6">
          <button className="bg-[#ee2020] py-2 px-4 text-[#fff] font-semibold rounded-lg">
            Delete User
          </button>
        </div>
      </div>
    </MainContainer>
  );
};

export default DeleteUser;
