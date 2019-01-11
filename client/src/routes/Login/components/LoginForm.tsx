import * as React from 'react';
import { observer, inject } from 'mobx-react';

import Button from '@material-ui/core/Button';
import { Field, Form, Formik, FormikActions } from 'formik';
import TextFieldForm from '../../../_shared/Form/TextField';
import Paper from '@material-ui/core/Paper';

import { required } from '../../../utils/validate';
import { asyncSubmit } from '../../../utils/form-helper';
import StyledLink from '../../../_shared/StyledLink';
import Routes from '../../Routes';

import styles from '../../../layout/Layout.scss';
import { injectStore } from '../../../stores/StoreContext';
import UserStore from '../../../stores/User';

export interface ILoginFormValues {
  email: string;
  password: string;
}

interface ILoginFormProps {
  userStore: UserStore;
}

const LoginForm: React.SFC<ILoginFormProps> = ({ userStore: store }) => {

  console.log('User store: ', store);
  return (
    <Formik
      initialValues={{} as ILoginFormValues}
      onSubmit={asyncSubmit(store.login)}
    >
      {({ isSubmitting, values }) => (
        <Paper className={styles.paperForm}>
          <Form>
            <Field
              id="email-field"
              name="email"
              label="Email*"
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
                  state: { email: values.email }
                }}
                size="small"
                color="default"
                variant="text"
              >
                Forgot your password?
              </StyledLink>
            </div>
            <Button
              className={styles.submitButton}
              fullWidth
              color="primary"
              type="submit"
              variant="contained"
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

export default injectStore('userStore')(observer(LoginForm));
