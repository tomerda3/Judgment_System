import { Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/Header";
import LogoutContainer from "../LogoutContainer";
import ThemeToggle from "../ThemeToggle";
import { useUsers } from "../../context/UserContext";

const Header = () => {
  const { userData } = useUsers();

  return (
    <Wrapper>
      <div className="nav-center">
        <Link to="/">
          <img alt="" src="/logo.jpeg" width="100" height="100" />
        </Link>
      </div>

      <div className="btn-container">
        <ThemeToggle />
        <Link className="btn nav-item" to="/Judgments">
          פסקי דין
        </Link>
        {userData.token && <LogoutContainer />}
        {!userData.token && (
          <Link className="btn nav-item" to="/login">
            התחבר
          </Link>
        )}
      </div>
    </Wrapper>
  );
};

export default Header;
