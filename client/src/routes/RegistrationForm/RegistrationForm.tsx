import * as React from 'react';
import { observer } from 'mobx-react';

import Button from '@material-ui/core/Button';
import { Field, Form, Formik } from 'formik';
import TextFieldForm from '../../_shared/Form/TextField';
import Paper from '@material-ui/core/Paper';

import { required } from '../../utils/validate';
import styles from '../../layout/Layout.scss';
import { asyncSubmit } from '../../utils/form-helper';

interface IRegistrationFormProps {
  store: any;
}

const RegistrationForm: React.SFC<IRegistrationFormProps> = (props) => {
  const { store } = props;

  return (
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
  );
};

export default observer(RegistrationForm);
