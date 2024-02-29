import React from "react";
import Wrapper from "../../assets/wrappers/Header";
import LogoutContainer from "../LogoutContainer";

const Header = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn">
          <img alt="" src="/logo.jpeg" width="90" height="90" />
        </button>
      </div>
      <div className="btn-conainer">
        <LogoutContainer />
      </div>
    </Wrapper>
  );
};

export default Header;
