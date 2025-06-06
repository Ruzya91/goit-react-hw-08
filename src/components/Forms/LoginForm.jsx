import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login as logIn } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
      }}
    >
      <Form autoComplete="off">
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
