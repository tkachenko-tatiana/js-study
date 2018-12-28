import * as React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SignOutAuthButton from '../../_shared/SignOutButton';
import Routes from '../../routes/Routes';

import StyledLink from '../../_shared/StyledLink';
import styles from '../Layout.scss';

interface IHeaderProps {
  store: any;
}

const Header: React.SFC<IHeaderProps> = (props) => {
  const { store } = props;

  return (
    <AppBar position="static" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
        >
          <Link to={Routes.Main} className={styles.toolbarHomeLink} >App name</Link>
        </Typography>
        <div>
          {store.isRegistered ?
            <SignOutAuthButton className={styles.appBarButton} user={store.user} /> :
            (
              <React.Fragment>
                <StyledLink to={Routes.Login} className={styles.appBarButton}>
                  Login
                </StyledLink>
                <StyledLink to={Routes.Registration} className={styles.appBarButton}>
                  Register
                </StyledLink>
              </React.Fragment>
            )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default observer(Header);
