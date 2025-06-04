import { DNA } from "react-loader-spinner";
import { LoaderWrapper } from "./LoaderWrapper";

const DNASpinner = () => [
  <LoaderWrapper>
    <DNA visible={true} height={80} width={80} />
  </LoaderWrapper>,
];

export default DNASpinner