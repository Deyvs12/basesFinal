import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from '../api/auth';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const Register = () => {
  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const data = await register(values.name, values.username, values.password);
      // Store the token in local storage or a cookie
      localStorage.setItem('token', data.token);
      // Redirect to the home page or a protected route
      window.location.href = '/';
    } catch (error) {
      setFieldError('general', error.message || 'Registration failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <Formik
        initialValues={{ name: '', username: '', password: '' }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
            <ErrorMessage name="general" component="div" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;