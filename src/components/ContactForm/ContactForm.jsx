import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsOps";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  number: Yup.string().required("Number is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact({ name: values.name, number: values.number }));
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <div className={styles.contactform}>
          <Form className={styles.form}>
            <label className={styles.label}>Name</label>
            <Field name="name" className={styles.field} />
            {errors.name && touched.name && (
              <div className={styles.error}>{errors.name}</div>
            )}

            <label className={styles.label}>Number</label>
            <Field name="number" className={styles.field} />
            {errors.number && touched.number && (
              <div className={styles.error}>{errors.number}</div>
            )}

            <button type="submit" className={styles.button}>
              Add Contact
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ContactForm;
