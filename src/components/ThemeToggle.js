import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import { useDarkMode } from "../context/DarkModeContext";
import Wrapper from "../assets/wrappers/ThemeToggle";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDarkMode();

  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill />
      )}
    </Wrapper>
  );
};
export default ThemeToggle;
