import { nanoid } from "nanoid";

import { LoaderWrapper } from "./LoaderWrapper";

const DNASpinner = () => [
  <LoaderWrapper key={nanoid}>
  </LoaderWrapper>,
];

export default DNASpinner