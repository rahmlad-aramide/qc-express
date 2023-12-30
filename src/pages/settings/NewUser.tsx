import { useState } from "react";
import MainContainer from "../../components/containers/MainContainer";
import { toast, ToastContainer } from "react-toastify";
import { IoChevronBackOutline } from "react-icons/io5";
import { Loader } from "../../components";

const url = String(import.meta.env.VITE_APP_API_URL);

const NewUser = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const backToSettings = () => {
    window.history.back();
  };

  const access_token = sessionStorage
    .getItem("access_token")
    ?.replace(/["']/g, "");

  const createUser = () => {
    setLoading(true);
    fetch(
      `${url}/business_admin/user/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("User created successfully", {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          setUser({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
          });
          setLoading(false);
        } else {
          toast.error("Something went wrong", {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          setLoading(false);
        }
      });
  };

  return (
    <MainContainer activeTab="Settings">
      <ToastContainer />
      <button
        onClick={backToSettings}
        className="cursor-pointer flex items-center text-sm font-semibold"
      >
        <IoChevronBackOutline size={18} />
        Back
      </button>

      <h2 className="text-lg font-semibold mt-2">Create New User</h2>
      <div className="lg:mt-10 mt-6 lg:w-[50%] space-y-8">
        <div className="space-y-2">
          <label className="text-[#333] px-1 font-semibold">Firstname</label>
          <input
            type="text"
            required
            value={user.firstname}
            onChange={(e) => setUser({ ...user, firstname: e.target.value })}
            placeholder="Enter firstname"
            className="bg-[#f1f1f1] w-[100%] py-2 px-4 rounded-lg outline-none border-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[#333] px-1 font-semibold">Lastname</label>
          <input
            type="text"
            required
            value={user.lastname}
            onChange={(e) => setUser({ ...user, lastname: e.target.value })}
            placeholder="Enter lastname"
            className="bg-[#f1f1f1] w-[100%] py-2 px-4 rounded-lg outline-none border-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[#333] px-1 font-semibold">Email</label>
          <input
            type="text"
            required
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter email"
            className="bg-[#f1f1f1] w-[100%] py-2 px-4 rounded-lg outline-none border-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[#333] px-1 font-semibold">Password</label>
          <input
            type="password"
            required
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter password"
            className="bg-[#f1f1f1] w-[100%] py-2 px-4 rounded-lg outline-none border-none"
          />
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={createUser}
            className="bg-[#4169e2] py-2 px-4 text-[#fff] font-semibold rounded-lg"
          >
            {loading ? <Loader /> : "Create User"}
          </button>
        </div>
      </div>
    </MainContainer>
  );
};

export default NewUser;
