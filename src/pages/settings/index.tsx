import { NavLink } from "react-router-dom";
import MainContainer from "../../components/containers/MainContainer";
import { FaChevronRight } from "react-icons/fa";
const Settings = () => {
  const items = [
    { id: 1, name: "Tokens", path: "/settings/reveal-tokens" },
    { id: 4, name: "Users", path: "/settings/list-business-users" },
    { id: 2, name: "Clear Sandbox Data", path: "/settings/clear-sandbox" },
  ];
  return (
    <MainContainer>
      <div>
        <h2 className="text-[32px] font-semibold">Settings</h2>
        <div className="w-[60%] mt-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center px-4 py-3 border-b border-[#ccc] hover:bg-[#f1f1f1]"
            >
              <NavLink to={item.path} className="flex justify-between items-center my-2 w-[100%]">
                <p>{item.name}</p>
                <FaChevronRight />
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </MainContainer>
  );
};

export default Settings;
