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
      {() => (
        <Form>
          <FormObserver onChange={handleFilter}/>
            <div>
              <h3>Extension List</h3>
              <div>
                <label>
                  <Field type="radio" name="filter" value="all" />
                </label>
                <label>
                  <Field type="radio" name="filter" value="active" />
                </label>
                <label>
                  <Field type="radio" name="filter" value="inactive" />
                </label>
              </div>
            </div>
         
        </Form>
      )}
    </Formik>
  );
};

export default ExtensionList;
