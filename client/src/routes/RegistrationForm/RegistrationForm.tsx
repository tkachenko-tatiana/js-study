import * as React from 'react';
import { observer, inject } from 'mobx-react';

import Button from '@material-ui/core/Button';
import { Field, Form, Formik } from 'formik';
import TextFieldForm from '../../_shared/Form/TextField';
import AlertNotification from '../../_shared/AlertNotification';

import Paper from '@material-ui/core/Paper';

import { required } from '../../utils/validate';
import styles from '../../layout/Layout.scss';
import { asyncSubmit } from '../../utils/form-helper';

interface IRegistrationFormProps {
  store: any;
}

const RegistrationForm: React.SFC<IRegistrationFormProps> = ({ store }) => {

  const onCloseModal = () => {
    store.closeAlertNotification();
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={{} as any}
        onSubmit={asyncSubmit(store.register)}
      >
      {({ isSubmitting }) => (
          <Paper className={styles.paperForm}>
            <Form>
              <Field
                id="email-field"
                name="email"
                type="email"
                label="email*"
                fullWidth
                component={TextFieldForm}
                validate={required}
              />
              <Button
                className={styles.submitButton}
                fullWidth
                color="primary"
                type="submit"
                variant="contained"
                disabled={isSubmitting}
              >
                registration
              </Button>
          </Form>
          </Paper>
      )}
      </Formik>
      <AlertNotification
        isNotificationOpen={store.sholdShowAlertNotification}
        handleNotificationClose={onCloseModal}
        notificationMessage="Email was send to confirm your email address"
        autoHideDuration={6000}
      />
    </React.Fragment>
  );
};

export default inject('store')(observer(RegistrationForm));
