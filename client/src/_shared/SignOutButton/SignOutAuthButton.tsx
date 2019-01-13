import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import Button, { ButtonProps } from '@material-ui/core/Button';

import Routes from '../../routes/Routes';

interface ISignOutWithRouterProps extends RouteComponentProps, ButtonProps {
  user: any;
}

const SignOutAuthButton: React.SFC<ISignOutWithRouterProps> = (props) => {
  const { history, className, user, staticContext, ...rest } = props;

  const onClick = () => {
    user.isAuthenticated = false;
    history.push(Routes.Main);
  };

  return (
    <Button
      onClick={onClick}
      className={className}
      {...rest}
    >
      Logout
    </Button>
  );
};

export default observer(withRouter(SignOutAuthButton));
