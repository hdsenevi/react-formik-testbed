import './App.css'
import {
  withFormik,
  Form,
  Field,
} from 'formik'
import * as Yup from 'yup'

function App({
  values,
  errors,
  touched,
}) {
  return (
    <Form>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field
          type="email"
          name="email"
          placeholder="Email"
        />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <label>
        <Field type="checkbox" name="newsletter" checked={values.newsletter} />
        Join our newsletter
      </label>
      <Field component="select" name="plan">
        <option value="free">Free</option>
        <option value="premium">Premium</option>
      </Field>
      <button>Submit</button>
    </Form>
  );
}

const FormikApp = withFormik({
  mapPropsToValues({
    email,
    password,
    newsletter,
    plan,
  }) {
    return {
      email: email || 'test text',
      password: password || "",
      newsletter: newsletter || false,
      plan: plan || 'free',
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(9).required(),
  }),
  handleSubmit(values) {
    console.log(values)
  }
})(App)

export default FormikApp;
