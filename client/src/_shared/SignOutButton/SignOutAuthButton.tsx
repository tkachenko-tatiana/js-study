import * as React from 'react';
import { observer } from 'mobx-react';
import Button from '@material-ui/core/Button';

import Routes from '../../routes/Routes';

const SignOutAuthButton: React.SFC<any> = observer((props) => {
  const { history, className, user, ...rest } = props;

  const onClick = () => {
    user.isRegistered = false;
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
});

export default SignOutAuthButton;
