import { DNA } from "react-loader-spinner";
import { nanoid } from "nanoid";

import { LoaderWrapper } from "./LoaderWrapper";

const DNASpinner = () => [
  <LoaderWrapper key={nanoid}>
    <DNA visible={true} height={80} width={80} />
  </LoaderWrapper>,
];

export default DNASpinner