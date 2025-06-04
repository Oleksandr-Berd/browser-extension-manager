import * as SC from "./HeaderStyled";

import Logo from "../../components/Logo/Logo";
import ToggleButton from "../../components/ToggleButton/ToggleButton";

const Header = () => {


  return (
    <SC.HeaderStyled>
      <SC.HeaderCon>
        <Logo />
        <ToggleButton />
      </SC.HeaderCon>
    </SC.HeaderStyled>
  );
};

export default Header;
