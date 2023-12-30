import { FaTrashAlt } from "react-icons/fa";
import MainContainer from "../../components/containers/MainContainer";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { IoChevronBackOutline } from "react-icons/io5";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Loader } from "../../components";

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

const url = String(import.meta.env.VITE_APP_API_URL);

const ListBusinessUsers = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoader, setDeleteLoader] = useState(false);

  const access_token = sessionStorage
    .getItem("access_token")
    ?.replace(/["']/g, "");

  const deleteUser = (id: string) => {
    setDeleteLoader(true);
    fetch(`${url}/business_admin/user/delete/?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setDeleteLoader(false);
          toast.success("User deleted successfully", {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          setDeleteLoader(false);
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
    fetch(`${url}/business_admin/user/fetch?tier=2&page=1&limit=10`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setUsers(data.data.docs);
      });
  }, [access_token]);
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

      <div className="flex justify-between items-center w-[100%] mt-2">
        <h2 className="lg:text-lg font-semibold">Business Users</h2>
        <div>
          <NavLink to="/settings/new-user">
            <button className="bg-[#4169e2] lg:block hidden lg:text-[16px] py-2 px-4 text-[#fff] font-semibold rounded-lg">
              Create New User
            </button>

            <button className="bg-[#4169e2] text-[13px] lg:hidden block py-2 px-3 text-[#fff] font-semibold rounded-lg">
              Create User
            </button>
          </NavLink>
        </div>
      </div>
      <div className="mt-10 w-[100%]">
        {loading ? (
          <Skeleton count={5} />
        ) : (
          <div className="overflow-x-auto">
            {users.length > 0 ? (
              <table className="border-collapse border border-[#ccc] w-full">
                <thead>
                  <tr className="border-b border-[#ccc] lg:text-[16px] text-[14px]">
                    <th className="font-semibold py-1 text-left px-4">
                      Firstname
                    </th>
                    <th className="font-semibold text-left px-4">Lastname</th>
                    <th className="font-semibold text-left px-4">Email</th>
                    <th className="font-semibold text-left px-4">Org. Name</th>
                    <th className="font-semibold text-left px-4">
                      Access Tier
                    </th>
                    <th className="font-semibold text-center px-4">
                      Date Joined
                    </th>
                    <th className="font-semibold text-right px-4">Action</th>
                  </tr>
                </thead>
                <tbody className="text-[#333]">
                  {users.map((user) => (
                    <tr
                      key={user._id}
                      className="border-b border-[#ccc] hover:bg-[#f1f1f1] lg:text-[16px] text-[13px]"
                    >
                      <td className="py-3 lg:px-4 px-3 text-left">
                        {user.firstname}
                      </td>
                      <td className="py-3 px-4 text-left">{user.lastname}</td>
                      <td className="py-3 px-4 text-left">{user.email}</td>
                      <td className="py-3 px-4 text-left">{user.org_name}</td>
                      <td className="py-3 px-4 text-center">
                        {user.access_tier}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </td>
                      <td
                        onClick={() => deleteUser(user._id)}
                        className="lg:py-3 pt-6 text-right cursor-pointer text-[#ee2020] flex items-center justify-end px-4"
                      >
                        <FaTrashAlt />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-[#333] text-[15px] text-center">
                No users found
              </p>
            )}
          </div>
        )}
      </div>
      {deleteLoader && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000080] flex justify-center items-center z-50">
          <Loader />
        </div>
      )}
    </MainContainer>
  );
};

export default ListBusinessUsers;
