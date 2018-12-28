import * as React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import SignOutAuthButton from '../../_shared/SignOutButton';
import Routes from '../../routes/Routes';

import StyledLink from '../../_shared/StyledLink';

const styles = (theme: Theme) => createStyles({
  appBar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbarHomeLink: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  },
  appBarButton: {
    color: theme.palette.primary.contrastText,
    borderColor: 'currentColor',
    marginLeft: '5px',
  },
});

interface IHeaderProps {
  store: any;
}

const Header: React.SFC<IHeaderProps & WithStyles<typeof styles>> = (props) => {
  const { classes, store } = props;

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
        >
          <Link to={Routes.Main} className={classes.toolbarHomeLink} >App name</Link>
        </Typography>
        <div>
          {store.isRegistered ?
            <SignOutAuthButton className={classes.appBarButton} user={store.user} /> :
            (
              <React.Fragment>
                <StyledLink to={Routes.Login} className={classes.appBarButton}>
                  Login
                </StyledLink>
                <StyledLink to={Routes.Registration} className={classes.appBarButton}>
                  Register
                </StyledLink>
              </React.Fragment>
            )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(observer(Header));
