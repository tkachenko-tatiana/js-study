import * as React from 'react';
import RegistrationForm from '../RegistrationForm';
import User from '../../models/User';

const Registration = () => (
  <RegistrationForm store={User} />
);

export default Registration;
