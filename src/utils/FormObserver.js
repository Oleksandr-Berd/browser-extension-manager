import { useFormikContext } from "formik";
import { useEffect } from "react";

const FormObserver = ({ onChange }) => {
  const { values } = useFormikContext();

useEffect(() => {
    onChange(values);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return null;
};

export default FormObserver