import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';

import StyledLink from '../../_shared/StyledLink';
import { Link } from 'react-router-dom';

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

interface IProps {}

const Header: React.SFC<IProps & WithStyles<typeof styles>> = (props) => {
  const { classes } = props;

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
          <StyledLink to="signin" className={classes.appBarButton} text="Signin" />
          <StyledLink to="login" className={classes.appBarButton} text="Login" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
