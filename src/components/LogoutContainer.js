import { useState } from "react";

import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";

// import { useDashboardContext } from "../pages/DashboardLayout";
const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  //   const { user, logoutUser } = useDashboardContext();

  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        {"שם השופט"}
        <FaCaretDown />
      </button>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <button type="button" className="dropdown-btn">
          התנתק
        </button>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;
