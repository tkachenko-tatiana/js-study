import { withRouter } from 'react-router-dom';
import * as React from 'react';
import SignOutAuthButton from './SignOutAuthButton';

const SignOutWithRouter: React.SFC<any> = (props) => {
  const SignOutRenderProps = withRouter(
    ({ history }) => (
      <SignOutAuthButton history={history} {...props} />
    )
  );

  return (
      <SignOutRenderProps />
    );
};

export default SignOutWithRouter;
