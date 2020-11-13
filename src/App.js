import './App.css'
import {
  withFormik,
  Form,
  Field,
} from 'formik'
import Yup from 'yup'

function App({
  values,
  handleChange,
}) {
  return (
    <Form>
      <Field
        type="email"
        name="email"
        placeholder="Email"
      />
      <Field
        type="password"
        name="password"
        placeholder="Password"
      />
      <label>
        <Field type="checkbox" name="newsletter" checked={values.newsletter} />
        Join our newsletter
      </label>
      <button>Submit</button>
    </Form>
  );
}

const FormikApp = withFormik({
  mapPropsToValues({email, password, newsletter}) {
    return {
      email: email || 'test text',
      password: password || "",
      newsletter: newsletter || false,
    }
  },
  handleSubmit(values) {
    console.log(values)
  }
})(App)

export default FormikApp;
