const Routes = {
  Main: '/',
  Login: '/login',
  Registration: '/registration',
  ForgotPassword: '/login/forgotPassword',
  Activation: (token: string) => `/users/activation/${token}`,
};

export default Routes;
