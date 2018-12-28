import * as React from 'react';
import { observer } from 'mobx-react';

import Button from '@material-ui/core/Button';
import { Field, Form, Formik } from 'formik';
import TextFieldForm from '../../_shared/Form/TextField';
import Paper from '@material-ui/core/Paper';

import { required } from '../../utils/validate';
import styles from '../../layout/Layout.scss';

interface IRegistrationFormProps {
  store: any;
}

const RegistrationForm: React.SFC<IRegistrationFormProps> = (props) => {
  const { store } = props;

  const onSubmit = () => {
    store.registerUser();
  };

  return (
    <Formik
      initialValues={{} as any}
      onSubmit={onSubmit}
    >
    {({ isSubmitting }) => (
      <Paper className={styles.paperForm}>
        <Form>
          <Field
            id="uid-name-field"
            name="uid-name"
            label="Name"
            fullWidth
            component={TextFieldForm}
          />
          <Field
            id="email-field"
            name="email"
            type="email"
            label="email*"
            fullWidth
            component={TextFieldForm}
            validate={required}
          />
          <Field
            id="uid-username-field"
            name="uid-username"
            label="user name*"
            fullWidth
            component={TextFieldForm}
            validate={required}
          />
          <Button
            fullWidth
            color="primary"
            type="submit"
            variant="outlined"
            disabled={isSubmitting}
          >
            registration
          </Button>
        </Form>
      </Paper>
    )}
  </Formik>
  );
};

export default observer(RegistrationForm);
