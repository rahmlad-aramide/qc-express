import { useState } from "react";
import MainContainer from "../../components/containers/MainContainer";
import { toast, ToastContainer } from "react-toastify";

const NewUser = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const backToSettings = () => {
    window.history.back();
  };

  const access_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaG1sYWRhcmFtaWRlQGdtYWlsLmNvbSIsInVzZXJJZCI6IjY1NjhmODI5YmY4NTc3MDAzZTVhYmMzZiIsInVzZXJuYW1lIjoiUmFobWxhZCBBcmFtaWRlIiwiZmlyc3RuYW1lIjoiNjU2OGY4MjhiZjg1NzcwMDNlNWFiYzNkIiwidHlwZSI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwMTY3MjA5OSwiZXhwIjoxNzAxNjc1Njk5fQ.H5e1daGwjfWvliIzoDQv_XuNxPNJCSdUOB9EjEaPZso";

  const createUser = () => {
    fetch(
      "https://qcbackendtest.onrender.com/api/v1/business_admin/user/create/",
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
        console.log(data);
        if (data.status === "success") {
          toast.success("User created successfully", {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          window.location.reload();
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
        }
      });
  };

  return (
    <MainContainer activeTab="Settings">
        <ToastContainer />
        <span onClick={backToSettings} className="cursor-pointer">
            {"<< "}back
        </span>

        <h2 className="text-[32px] font-semibold mt-3">Create New User</h2>
        <div className="mt-10 w-[50%] space-y-8">
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
            Submit
          </button>
        </div>
      </div>
    </MainContainer>
  );
};

export default NewUser;
