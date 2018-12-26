import * as React from 'react';

import Button from '@material-ui/core/Button';
import { Field, Form, Formik } from 'formik';
import TextFieldForm from '../../_shared/Form/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';

import { required } from '../../utils/validate';
import StyledLink from '../../_shared/StyledLink';
import Routes from '../Routes';

interface ILoginFormValues {
  uid: string;
  password: string;
}

interface IProps {}

const styles = () => createStyles({
  form: {
    width: '100%',
    margin: '30px auto',
    boxShadow: '0 0 5px #ccc',
    padding: '15px 20px',
    maxWidth: '600px',
    borderRadius: '5px',
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
      <Form className={classes.form}>
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
        {/* <FormControlLabel
          control={
            <Checkbox
              value="remember"
              color="primary"
              checked={this.state.checked}
              onChange={handleChange}
            />
          }
          label="Remember me"
        /> */}
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
    )}
  </Formik>
  );
};

export default withStyles(styles)(LoginForm);
