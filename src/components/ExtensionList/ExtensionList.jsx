import * as SC from "./ExtensionListStyled";
import ExtensionItem from "../ExtensionItem/ExtensionItem";
import { useEffect } from "react";
import DNASpinner from "../Spinner/DNA/DNA";
import { upDateElement } from "../../utils/services";

const ExtensionList = (props) => {
  
  const { fetch, extensions, isLoading, filter, handleRemove } = props
  
  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


const toggleSwitch = async (_id, newState) => {

const result = await upDateElement(_id, newState)

fetch()
return result
}

  return (
    <>
      {isLoading ? (
        <DNASpinner/>
      ) : (
        <SC.ExtensionListStyled>
          {extensions &&
            extensions.map(({ _id, name, text, coverImage, state }) => (
              <ExtensionItem
                key={_id}
                _id={_id}
                title={name}
                text={text}
                pic={coverImage}
                filter={filter}
                handleRemove={handleRemove}
                toggleSwitch={toggleSwitch}
                state={state}
              />
            ))}
        </SC.ExtensionListStyled>
      )}
    </>
  );
};

export default ExtensionList;
