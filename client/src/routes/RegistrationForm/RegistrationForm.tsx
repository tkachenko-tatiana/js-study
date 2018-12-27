import * as React from 'react';
import { observer } from 'mobx-react';

import Button from '@material-ui/core/Button';
import { Field, Form, Formik } from 'formik';
import TextFieldForm from '../../_shared/Form/TextField';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { required } from '../../utils/validate';
import { commonStyles } from '../../_shared/styles';

interface IProps {
  store: any;
}

const styles = () => createStyles({
  paper: commonStyles.paperForm,
});

const RegistrationForm: React.SFC<IProps & WithStyles<typeof styles>> = observer((props) => {
  const { classes, store } = props;

  const onSubmit = () => {
    store.registerUser();
  };

  return (
    <Formik
      initialValues={{} as any}
      onSubmit={onSubmit}
    >
    {({ isSubmitting }) => (
      <Paper className={classes.paper}>
        <Form>
          <Field
            id="uid-name-field"
            name="uid-name"
            label="Name"
            fullWidth
            component={TextFieldForm}
            validate={required}
          />
          <Field
            id="email-field"
            name="email"
            type="email"
            label="email"
            fullWidth
            component={TextFieldForm}
            validate={required}
          />
          <Field
            id="uid-username-field"
            name="uid-username"
            label="user name"
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
});

export default withStyles(styles)(RegistrationForm);
