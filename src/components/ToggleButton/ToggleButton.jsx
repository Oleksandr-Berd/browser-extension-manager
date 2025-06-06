import * as SC from "./ToggleButtonStyled"

import { useContext } from "react";
import darkIcon from "../../assets/images/icon-moon.svg";
import lightIcon from "../../assets/images/icon-sun.svg";
import ThemeContext from "../../context/styled/themeContext";

const ToggleButton = () => {
  const { theme, toggle } = useContext(ThemeContext);
   
const toggleTheme = () => toggle(theme)

  return (
    <SC.ButtonToggleStyled type="button" onClick={toggleTheme}>
      <img src={theme === "light" ? darkIcon : lightIcon} alt="toggleIcon" />
    </SC.ButtonToggleStyled>
  );
};

export default ToggleButton;
