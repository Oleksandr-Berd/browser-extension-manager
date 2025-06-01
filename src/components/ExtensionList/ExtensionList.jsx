import * as SC from "./ExtensionListStyled"

import { extensions } from "../../db/data";
import ExtensionItem from "../ExtensionItem/ExtensionItem";

const ExtensionList = () => {
  return (
    <SC.ExtensionListStyled>
      {extensions &&
        extensions.map(({ id, title, text, pic }) => (
          <ExtensionItem
            key={id}
            id={id}
            title={title}
            text={text}
            pic={pic}
          />
        ))}
    </SC.ExtensionListStyled>
  );
};

export default ExtensionList;
