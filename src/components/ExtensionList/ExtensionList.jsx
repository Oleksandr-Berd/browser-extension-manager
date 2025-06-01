import { extensions } from "../../db/data";
import ExtensionItem from "../ExtensionItem/ExtensionItem";

const ExtensionList = () => {
  return (
    <ul>
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
    </ul>
  );
};

export default ExtensionList;
