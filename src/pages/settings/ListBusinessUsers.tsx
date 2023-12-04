import { FaTrashAlt } from "react-icons/fa";
import MainContainer from "../../components/containers/MainContainer";
import { NavLink } from "react-router-dom";

const ListBusinessUsers = () => {
  const backToSettings = () => {
    window.history.back();
  };
  return (
    <MainContainer activeTab="Settings">
      <span onClick={backToSettings} className="cursor-pointer">
        {"<< "}back
      </span>

      <div className="flex justify-between w-[70%] mt-4">
        <h2 className="text-[32px] font-semibold">Business Users</h2>
        <div>
          <NavLink to="/settings/new-user">
            <button className="bg-[#4169e2] py-2 px-4 text-[#fff] font-semibold rounded-lg">
              Create New User
            </button>
          </NavLink>
        </div>
      </div>
      <div className="mt-10 w-[70%]">
        <table className="border-collapse border border-[#ccc] w-full">
          <thead>
            <tr className="border-b border-[#ccc]">
              <th className="font-semibold py-1">Firstname</th>
              <th className="font-semibold">Lastname</th>
              <th className="font-semibold">Email</th>
              <th className="font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="text-[#333]">
            <tr className="border-b border-[#ccc] hover:bg-[#f1f1f1]">
              <td className="py-3 px-4 text-center">John</td>
              <td className="py-3 px-4 text-center">Doe</td>
              <td className="py-3 px-4 text-center">johndoe@gmail.com</td>
              <td className="py-3 px-4 text-center text-[#ee2020] flex items-center justify-center space-x-1">
                <FaTrashAlt />
                <span>delete user</span>
              </td>
            </tr>
            <tr className="border-b border-[#ccc] hover:bg-[#f1f1f1]">
              <td className="py-3 px-4 text-center">Jane</td>
              <td className="py-3 px-4 text-center">Doe</td>
              <td className="py-3 px-4 text-center">janedoe@gmail.com</td>
              <td className="py-3 px-4 text-center text-[#ee2020] flex items-center justify-center space-x-1">
                <FaTrashAlt />
                <span>delete user</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </MainContainer>
  );
};

export default ListBusinessUsers;
