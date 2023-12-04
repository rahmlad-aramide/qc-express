import MainContainer from "../../components/containers/MainContainer";

const NewUser = () => {
  const backToSettings = () => {
    window.history.back();
  };
  return (
    <MainContainer activeTab="Settings">
      <span onClick={backToSettings} className="cursor-pointer">
        {"<< "}back
      </span>

      <h2 className="text-[32px] font-semibold mt-3">Create New User</h2>
      <div className="mt-10 w-[50%] space-y-8">
        <div className="space-y-2">
            <label className="text-[#333] px-1 font-semibold">Firstname</label>
            <input
                type="text"
                placeholder="Enter firstname"
                className="bg-[#f1f1f1] w-[100%] py-2 px-4 rounded-lg outline-none border-none"
            />
        </div>
        <div className="space-y-2">
            <label className="text-[#333] px-1 font-semibold">Lastname</label>
            <input
                type="text"
                placeholder="Enter lastname"
                className="bg-[#f1f1f1] w-[100%] py-2 px-4 rounded-lg outline-none border-none"
            />
        </div>
        <div className="space-y-2">
            <label className="text-[#333] px-1 font-semibold">Email</label>
            <input
                type="text"
                placeholder="Enter email"
                className="bg-[#f1f1f1] w-[100%] py-2 px-4 rounded-lg outline-none border-none"
            />
        </div>
        <div className="space-y-2">
            <label className="text-[#333] px-1 font-semibold">Password</label>
            <input
                type="password"
                placeholder="Enter password"
                className="bg-[#f1f1f1] w-[100%] py-2 px-4 rounded-lg outline-none border-none"
            />
        </div>
        <div className="flex justify-end mt-6">
          <button className="bg-[#4169e2] py-2 px-4 text-[#fff] font-semibold rounded-lg">
             Submit
          </button>
        </div>
      </div>
    </MainContainer>
  );
};

export default NewUser;
