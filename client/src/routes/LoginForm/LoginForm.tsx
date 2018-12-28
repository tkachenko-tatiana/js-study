import * as React from 'react';
import { observer } from 'mobx-react';

import Button from '@material-ui/core/Button';
import { Field, Form, Formik } from 'formik';
import TextFieldForm from '../../_shared/Form/TextField';
import Paper from '@material-ui/core/Paper';

import { required } from '../../utils/validate';
import StyledLink from '../../_shared/StyledLink';
import Routes from '../Routes';

import styles from '../../layout/Layout.scss';

interface ILoginFormValues {
  uid: string;
  password: string;
}

interface ILoginFormProps {
  store: any;
}

const LoginForm: React.SFC<ILoginFormProps> = (props) => {
  const { store } = props;

  const onSubmit = () => {
    store.registerUser();
  };

  return (
    <Formik
      initialValues={{} as ILoginFormValues}
      onSubmit={onSubmit}
    >
    {({ isSubmitting, values }) => (
      <Paper className={styles.paperForm}>
        <Form>
          <Field
            id="uid-field"
            name="uid"
            label="Login*"
            fullWidth
            component={TextFieldForm}
            validate={required}
          />
          <Field
            id="password-field"
            name="password"
            type="password"
            label="Password*"
            fullWidth
            component={TextFieldForm}
            validate={required}
          />
          <div className={styles.forgotPassword}>
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

export default observer(LoginForm);
