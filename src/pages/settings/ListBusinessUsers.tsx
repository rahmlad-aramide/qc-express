import { FaTrashAlt } from "react-icons/fa";
import MainContainer from "../../components/containers/MainContainer";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

type Users = {
  _id: string;
  access_tier: string;
  business: string;
  createdAt: string;
  email: string;
  firstname: string;
  lastname: string;
  org_name: string;
  updatedAt: string;
};

const ListBusinessUsers = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const access_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaG1sYWRhcmFtaWRlQGdtYWlsLmNvbSIsInVzZXJJZCI6IjY1NjhmODI5YmY4NTc3MDAzZTVhYmMzZiIsInVzZXJuYW1lIjoiUmFobWxhZCBBcmFtaWRlIiwiZmlyc3RuYW1lIjoiNjU2OGY4MjhiZjg1NzcwMDNlNWFiYzNkIiwidHlwZSI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwMTY3MjA5OSwiZXhwIjoxNzAxNjc1Njk5fQ.H5e1daGwjfWvliIzoDQv_XuNxPNJCSdUOB9EjEaPZso";

  const deleteUser = (id: string) => {
    fetch(
      `https://qcbackend.onrender.com/api/v1/business_admin/user/delete/?id=${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("User deleted successfully", {
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

  const backToSettings = () => {
    window.history.back();
  };

  useEffect(() => {
    fetch(
      "https://qcbackend.onrender.com/api/v1/business_admin/user/fetch?tier=2&page=1&limit=10",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data.docs);
      });
  }, []);
  return (
    <MainContainer activeTab="Settings">
      <ToastContainer />
      <span onClick={backToSettings} className="cursor-pointer">
        {"<< "}back
      </span>

      <div className="flex justify-between w-[100%] mt-4">
        <h2 className="text-[32px] font-semibold">Business Users</h2>
        <div>
          <NavLink to="/settings/new-user">
            <button className="bg-[#4169e2] py-2 px-4 text-[#fff] font-semibold rounded-lg">
              Create New User
            </button>
          </NavLink>
        </div>
      </div>
      <div className="mt-10 w-[100%]">
        <table className="border-collapse border border-[#ccc] w-full">
          <thead>
            <tr className="border-b border-[#ccc]">
              <th className="font-semibold py-1">Firstname</th>
              <th className="font-semibold">Lastname</th>
              <th className="font-semibold">Email</th>
              <th className="font-semibold">Organization Name</th>
              <th className="font-semibold">AccessTier</th>
              <th className="font-semibold">Date Joined</th>
              <th className="font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="text-[#333]">
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b border-[#ccc] hover:bg-[#f1f1f1]"
              >
                <td className="py-3 px-4 text-center">{user.firstname}</td>
                <td className="py-3 px-4 text-center">{user.lastname}</td>
                <td className="py-3 px-4 text-center">{user.email}</td>
                <td className="py-3 px-4 text-center">{user.org_name}</td>
                <td className="py-3 px-4 text-center">{user.access_tier}</td>
                <td className="py-3 px-4 text-center">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td
                  onClick={() => deleteUser(user._id)}
                  className="py-3 px-4 text-center cursor-pointer text-[#ee2020] flex items-center justify-center space-x-1"
                >
                  <FaTrashAlt />
                  <span>delete user</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainContainer>
  );
};

export default ListBusinessUsers;
