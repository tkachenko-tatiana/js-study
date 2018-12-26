import * as React from 'react';

import Button from '@material-ui/core/Button';
import { Field, Form, Formik } from 'formik';
import TextFieldForm from '../../_shared/Form/TextField';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { required } from '../../utils/validate';
import StyledLink from '../../_shared/StyledLink';
import Routes from '../Routes';

interface ILoginFormValues {
  uid: string;
  password: string;
}

interface IProps {}

const styles = () => createStyles({
  paper: {
    width: '100%',
    margin: '30px auto',
    padding: '15px 20px',
    maxWidth: '600px',
  },
  forgotPassword: {
    margin: '15px 0',
  }
});

const LoginForm: React.SFC<IProps & WithStyles<typeof styles>> = (props) => {
  const { classes } = props;

  const onSubmit = () => {
    console.log('submit');
  };

  return (
    <Formik
      initialValues={{} as ILoginFormValues}
      onSubmit={onSubmit}
    >
    {({ isSubmitting, values }) => (
      <Paper className={classes.paper}>
        <Form>
          <Field
            id="uid-field"
            name="uid"
            label="Login"
            fullWidth
            component={TextFieldForm}
            validate={required}
          />
          <Field
            id="password-field"
            name="password"
            type="password"
            label="Password"
            fullWidth
            component={TextFieldForm}
            validate={required}
          />
          <div className={classes.forgotPassword}>
            <StyledLink
              to={{
                pathname: Routes.ForgotPassword,
                state: { email: values.uid }
              }}
              size="small"
              color="default"
              variant="text"
            >
              Forgot your password?
            </StyledLink>
          </div>
          <Button
            fullWidth
            color="primary"
            type="submit"
            variant="outlined"
            disabled={isSubmitting}
          >
            Login
          </Button>
        </Form>
      </Paper>
    )}
  </Formik>
  );
};

export default withStyles(styles)(LoginForm);
