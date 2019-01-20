import * as React from 'react';
import { observer } from 'mobx-react';
import { injectStore } from '../../../stores/StoreContext';

import Button from '@material-ui/core/Button';
import TextField from '../../../_shared/Form/TextField';
import { Field, Form, Formik, FormikProps } from 'formik';
import Paper from '@material-ui/core/Paper';

import { asyncSubmit } from '../../../utils/form-helper';
import { required } from '../../../utils/validate';
import { IUserActivationFormValues } from '../../../../../sdk/models/User';
import UserStore from '../../../stores/User';

import styles from '../../../layout/Layout.scss';

interface ILoginFormProps {
  userStore: UserStore;
}

interface IActivationFormProps extends ILoginFormProps {
  activate: (
    token: string,
    formValues: IUserActivationFormValues
  ) => Promise<void>;
  initialData: Partial<IUserActivationFormValues>;
  token: string;
}

// interface IEnhanced {
//   submit: (formValues: IUserActivationFormValues) => Promise<void>;
// }

// IActivationFormProps & IEnhanced

const ActivationForm: React.SFC<any> = ({
  initialData,
}) => {
  const submit = ({ activate, token }: IActivationFormProps) =>
    asyncSubmit((values: IUserActivationFormValues) => activate(token, values));

  return (
    <Paper className={styles.paperForm}>
      <Formik
        onSubmit={submit}
        initialValues={initialData as any}
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
              label="Last name*"
              fullWidth
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

export default injectStore('userStore')(observer(ActivationForm));
