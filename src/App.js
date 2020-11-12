import './App.css'
import { withFormik } from 'formik'
import Yup from 'yup'

function App({
  values,
  handleChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email} 
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={values.password} 
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

const FormikApp = withFormik({
  mapPropsToValues({email, password}) {
    return {
      email: email || 'test text',
      password: password || "",
    }
  },
  handleSubmit(values) {
    console.log(values)
  }
})(App)

export default FormikApp;
