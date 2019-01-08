import * as React from 'react';
import { observer, inject } from 'mobx-react';

import Button from '@material-ui/core/Button';
import TextField from '../../_shared/Form/TextField';
import { Field, Form, Formik, FormikProps } from 'formik';
import Paper from '@material-ui/core/Paper';

import { asyncSubmit } from '../../utils/form-helper';
import { required } from '../../utils/validate';

import styles from '../../layout/Layout.scss';

const ActivationForm: React.SFC<any> = ({
  initialData,
  validate,
  isResetPassPage
}) => {
  const submit = ({ activate, token }: any) =>
    asyncSubmit((values: any) => activate(token, values));

  return (
    <Paper className={styles.paperForm}>
      <Formik
        onSubmit={submit}
        validate={validate}
        initialValues={initialData as any}
      >
        {({ isSubmitting }: FormikProps<any>) => (
          <Form>
            <Field
              id="first-name-field"
              name="firstName"
              label="First name*"
              fullWidth
              disabled={isResetPassPage}
              component={TextField}
              validate={required}
            />

            <Field
              id="last-name-field"
              name="lastName"
              label="Last name*"
              fullWidth
              disabled={isResetPassPage}
              component={TextField}
              validate={required}
            />

            <Field
              id="email-field"
              name="email"
              label="Email*"
              fullWidth
              disabled
              component={TextField}
              validate={required}
            />

            <Field
              id="password-field"
              name="password"
              type="password"
              label="Password*"
              fullWidth
              component={TextField}
              validate={required}
            />

            <Field
              id="repeat-password-field"
              name="confirmPassword"
              type="password"
              label="Confirm password*"
              fullWidth
              component={TextField}
              validate={required}
            />
            <Button
              id="submit-btn"
              className={styles.submitButton}
              fullWidth
              color="primary"
              type="submit"
              variant="contained"
              disabled={isSubmitting}
            >
              Ok
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default inject('store')(observer(ActivationForm));
