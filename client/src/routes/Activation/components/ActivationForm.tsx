import * as React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '../../../_shared/Form/TextField';
import { Field, Form, Formik, FormikProps } from 'formik';
import Paper from '@material-ui/core/Paper';

import { asyncSubmit } from '../../../utils/form-helper';
import { required } from '../../../utils/validate';
import { IUserActivationFormValues } from '../../../../../sdk/models/User';

import styles from '../../../layout/Layout.scss';

interface IActivationFormProps {
  activate: (
    token: string,
    formValues: IUserActivationFormValues
  ) => Promise<void>;
  initialData: Partial<IUserActivationFormValues> | null;
  token: string;
}

const ActivationForm: React.SFC<IActivationFormProps> = ({
  activate,
  initialData,
  token,
}) => {

  const activateForm = (data: IUserActivationFormValues) => activate(token, data);

  return (
    <Paper className={styles.paperForm}>
      <Formik
        enableReinitialize
        onSubmit={asyncSubmit(activateForm)}
        initialValues={initialData as IUserActivationFormValues}
      >
        {({ isSubmitting }: FormikProps<any>) => (
          <Form>
            <Field
              id="first-name-field"
              name="firstName"
              label="First name*"
              fullWidth
              component={TextField}
              validate={required}
            />
            <Field
              id="last-name-field"
              name="lastName"
              label="Last name"
              fullWidth
              component={TextField}
            />
            <Field
              id="email-field"
              name="email"
              label="Email*"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
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

export default ActivationForm;
