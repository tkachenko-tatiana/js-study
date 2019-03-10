const Routes = {
  Main: '/',
  Login: '/login',
  Registration: '/registration',
  ForgotPassword: '/login/forgotPassword',
  Activation: (token: string) => `/user/activate/${token}`,
};

export default Routes;
