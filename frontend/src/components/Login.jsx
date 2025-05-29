import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../api/auth';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const Login = () => {
  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const data = await login(values.email, values.password);
      // Store the token in local storage or a cookie
      localStorage.setItem('token', data.token);
      // Redirect to the home page or a protected route
      window.location.href = '/';
    } catch (error) {
      setFieldError('general', error.message || 'Login failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
            <ErrorMessage name="general" component="div" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;