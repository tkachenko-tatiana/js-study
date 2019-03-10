import { FormikActions } from 'formik';

export function asyncSubmit<T>(
  submitCallback: (formValues: T, actions: FormikActions<T>) => Promise<void>
) {
  return (formValues: T, actions: FormikActions<T>) => {
    actions.setSubmitting(true);

    submitCallback(formValues, actions)
      .then(() => actions.setSubmitting(false))
      .catch(() => actions.setSubmitting(false));
  };
}
