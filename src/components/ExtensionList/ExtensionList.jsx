import * as SC from "./ExtensionListStyled";
import ExtensionItem from "../ExtensionItem/ExtensionItem";
import { useEffect } from "react";
import DNASpinner from "../Spinner/DNA/DNA";

const ExtensionList = ({ fetch, extensions, isLoading }) => {
  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <DNASpinner/>
      ) : (
        <SC.ExtensionListStyled>
          {extensions &&
            extensions.map(({ _id, name, text, coverImage }) => (
              <ExtensionItem
                key={_id}
                id={_id}
                title={name}
                text={text}
                pic={coverImage}
              />
            ))}
        </SC.ExtensionListStyled>
      )}
    </>
  );
};

export default ExtensionList;
