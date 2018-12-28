import * as React from 'react';
import LoginForm from '../LoginForm';
import User from '../../models/User';

const Login = () => (
  <LoginForm store={User} />
);

export default Login;
