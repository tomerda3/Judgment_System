import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

import { UserContext, useUsers } from "../context/UserContext";
import Wrapper from "../assets/wrappers/LogoutContainer";
import toast from "react-hot-toast";

const LogoutContainer = () => {
  const navigate = useNavigate();
  const auth = useContext(UserContext);

  const { userData } = useUsers();

  const [showLogout, setShowLogout] = useState(false);

  const logoutHandler = () => {
    auth.logout();
    toast.success("התנתק בהצלחה");
    navigate("/");
  };

  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        {`${userData.firstName} ${userData.lastName}`}
        <FaCaretDown />
      </button>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <button type="button" className="dropdown-btn" onClick={logoutHandler}>
          התנתק
        </button>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;
