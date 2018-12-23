import * as React from 'react';
import { default as Portal } from '../../Portal';

const SignInForm = () => (
  <div>
    form goes here
  </div>
);

export const WithPortal = () => (
  <Portal>
    <SignInForm />
  </Portal>
);

export default SignInForm;
