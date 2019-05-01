import * as React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SignOutAuthButton from '../../_shared/SignOutButton';
import Routes from '../../routes/Routes';
import { injectStore } from '../../stores/StoreContext';

import StyledLink from '../../_shared/StyledLink';
import styles from '../Layout.scss';

import UserStore from '../../stores/User';

interface IHeaderProps  {
  userStore: UserStore;
}

const Header: React.FC<IHeaderProps> = ({ userStore: user }) => {
  return (
    <AppBar position="static" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
        >
          <Link to={Routes.Main} className={styles.toolbarHomeLink}>App name</Link>
        </Typography>
        <div>
          {user.isAuthenticated ?
            <SignOutAuthButton className={styles.appBarButton} user={user} color="inherit" /> :
            (
              <React.Fragment>
                <StyledLink to={Routes.Login} className={styles.appBarButton} color="inherit">
                  Login
                </StyledLink>
                <StyledLink to={Routes.Registration} className={styles.appBarButton} color="inherit">
                  Register
                </StyledLink>
              </React.Fragment>
            )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default injectStore('userStore')(observer(Header));
