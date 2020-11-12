import logo from './logo.svg';
import './App.css';
import { withFormik } from 'formik';
import Yup from 'yup';

function App({
  values,
  handleChange,
}) {
  return (
    <div>
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
      
    </div>
  );
}

const FormikApp = withFormik({
  mapPropsToValues({email, password}) {
    return {
      email: email || 'test text',
      password: password || "",
    }
  }
})(App)

export default FormikApp;
