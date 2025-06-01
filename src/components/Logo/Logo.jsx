import * as SC from "./LogoStyled"

import logoIcon from "../../assets/images/logo-88.svg";
const Logo = () => {
  return (
      <SC.LogoCon>
        <img src={logoIcon} alt="logo" style={{fill:"blue"}}/>
        <p>Extensions</p>
      </SC.LogoCon>
  );
};

export default Logo;
