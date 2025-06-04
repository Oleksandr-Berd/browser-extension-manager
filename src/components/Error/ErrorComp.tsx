import * as SC from "./ErrorCompStyled.js"

const ErrorComp = ({isError}) => {

console.log(isError);


    return (
<SC.ErrorCompStyled>
    <h2>{isError}</h2>
</SC.ErrorCompStyled>


     );
}
 
export default ErrorComp;