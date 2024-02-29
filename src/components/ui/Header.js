import { Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/Header";
import LogoutContainer from "../LogoutContainer";

const Header = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <Link to="/">
          <img alt="" src="/logo.jpeg" width="90" height="90" />
        </Link>
      </div>

      <div className="btn-container">
        {/* <LogoutContainer /> */}
        <Link className="btn nav-item" to="login">
          התחבר
        </Link>
      </div>
    </Wrapper>
  );
};

export default Header;
