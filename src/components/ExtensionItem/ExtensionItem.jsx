import * as SC from "./ExtensionItemStyled";

import switchOnIcon from "../../assets/images/switchOn.svg";
import switchOffIcon from "../../assets/images/switchOff.svg";
import { useState } from "react";
const ExtensionItem = (props) => {
  const [isSwitch, setIsSwitch] = useState(false);
  const { title, text, pic, filter, handleRemove, _id } = props || {};

  const handleSwitch = () => setIsSwitch(!isSwitch);

  const remove =() =>{

    handleRemove(_id)
  }

  return (
    <SC.ItemStyled _id={_id}>
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
        <SC.RemoveBtn type="button" onClick={remove}>Remove</SC.RemoveBtn>
        <SC.SwitchBtn type="button" onClick={handleSwitch}>
          <img src={filter ? switchOnIcon : switchOffIcon} alt="switch button" />
        </SC.SwitchBtn>
      </SC.BtnCon>
    </SC.ItemStyled>
  );
};

export default ExtensionItem;
