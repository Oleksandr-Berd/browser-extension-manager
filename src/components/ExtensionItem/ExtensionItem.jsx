import * as SC from "./ExtensionItemStyled";

import switchOnIcon from "../../assets/images/switchOn.svg";
import switchOffIcon from "../../assets/images/switchOff.svg";
import { useState } from "react";
const ExtensionItem = (props) => {
  const [isSwitch, setIsSwitch] = useState(false);
  const { title, text, pic } = props || {};

  const handleSwitch = () => setIsSwitch(!isSwitch);

  return (
    <SC.ItemStyled>
      <SC.ContentCon>
        <SC.Thumb>
          <img src={pic} alt="icon" />
        </SC.Thumb>
        <SC.TextCon>
          <h4>{title}</h4>
          <p>{text}</p>
        </SC.TextCon>
      </SC.ContentCon>
      <SC.BtnCon>
        <SC.RemoveBtn type="button">Remove</SC.RemoveBtn>
        <button type="button" onClick={handleSwitch}>
          <img src={isSwitch ? switchOnIcon : switchOffIcon} alt="" />
        </button>
      </SC.BtnCon>
    </SC.ItemStyled>
  );
};

export default ExtensionItem;
