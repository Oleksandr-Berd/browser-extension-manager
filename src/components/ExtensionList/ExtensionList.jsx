import * as SC from "./ExtensionListStyled";

import { Field, Form, Formik } from "formik";
import FormObserver from "../../utils/FormObserver";

const ExtensionList = ({ handleFilter }) => {
  return (
    <Formik
      initialValues={{
        filter: "all",
      }}
      onSubmit={({ setSubmitting }) => setSubmitting(false)}
    >
      {({values}) => (
        <Form>
          <FormObserver onChange={handleFilter} />
          <SC.FormStyled>
            <h3>Extension List</h3>
            <SC.RadioList>
              <label>
                <SC.CurrentRadio className={values.filter === "all" ? "selected" : ""}>
                    <p>All</p>
                  <SC.DefaultRadioStyled type="radio" name="filter" value="all" />
                </SC.CurrentRadio>
              </label>
              <label>
                <SC.CurrentRadio className={values.filter === "active" ? "selected" : ""}>
                    <p>Active</p>
                  <SC.DefaultRadioStyled type="radio" name="filter" value="active" />
                </SC.CurrentRadio>
              </label>
              <label>
                <SC.CurrentRadio className={values.filter === "inactive" ? "selected" : ""}>
                    <p>Inactive</p>
                  <SC.DefaultRadioStyled type="radio" name="filter" value="inactive" />
                </SC.CurrentRadio>
              </label>
            </SC.RadioList>
          </SC.FormStyled>
        </Form>
      )}
    </Formik>
  );
};

export default ExtensionList;
