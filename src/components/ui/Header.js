import { Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/Header";
import LogoutContainer from "../LogoutContainer";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <Link to="/">
          <img alt="" src="/logo.jpeg" width="100" height="100" />
        </Link>
      </div>

      <div className="btn-container">
        {/* <LogoutContainer /> */}
        <ThemeToggle />
        <Link className="btn nav-item" to="login">
          התחבר
        </Link>
      </div>
    </Wrapper>
  );
};

export default Header;
