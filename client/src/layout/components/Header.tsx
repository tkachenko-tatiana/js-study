import * as React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import SignOutWithRouter from '../../_shared/SignOutButton';

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

interface IProps {
  store: any;
}

const Header: React.SFC<IProps & WithStyles<typeof styles>> = observer((props) => {
  const { classes, store } = props;

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
        >
          <Link to="/" className={classes.toolbarHomeLink} >App name</Link>
        </Typography>
        <div>
          {store.isRegistered ?
            <SignOutWithRouter className={classes.appBarButton} user={store.user} /> :
            (
              <React.Fragment>
                <StyledLink to="login" className={classes.appBarButton}>
                  Login
                </StyledLink>
                <StyledLink to="registration" className={classes.appBarButton}>
                  Registration
                </StyledLink>
              </React.Fragment>
            )}
        </div>
      </Toolbar>
    </AppBar>
  );
});

export default withStyles(styles)(Header);
