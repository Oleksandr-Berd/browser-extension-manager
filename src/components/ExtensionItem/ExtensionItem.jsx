import * as SC from "./ExtensionItemStyled";

import switchOnIcon from "../../assets/images/switchOn.svg";
import switchOffIcon from "../../assets/images/switchOff.svg";
const ExtensionItem = (props) => {
  const { title, text, pic, handleRemove, _id, toggleSwitch, state } = props || {};

  const handleSwitch = () => {

    const newState = state ==="active" ? "inactive" : "active"

     toggleSwitch(_id, newState)
  };

  const remove = () => {
    handleRemove(_id);
   
  };

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
        <SC.RemoveBtn type="button" onClick={remove}>
          Remove
        </SC.RemoveBtn>
        <SC.SwitchBtn type="button" onClick={handleSwitch}>
          <img
            src={state === "active" ? switchOnIcon : switchOffIcon}
            alt="switch button"
          />
        </SC.SwitchBtn>
      </SC.BtnCon>
    </SC.ItemStyled>
  );
};

export default ExtensionItem;
