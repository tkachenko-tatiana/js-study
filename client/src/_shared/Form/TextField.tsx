import TextField, { OutlinedTextFieldProps } from '@material-ui/core/TextField';
import * as React from 'react';
import { FieldProps } from 'formik';
import { Omit } from '../../../../sdk/types';

export interface ITextFieldProps extends FieldProps, Omit<OutlinedTextFieldProps, 'variant'> {
  displayedValue?: (value: string) => string;
}

const TextFieldForm: React.SFC<ITextFieldProps> = (props) => {
  const {
    field: { value = '', ...field },
    form: { touched, errors, submitCount },
    displayedValue,
    ...other
  } = props;
  const toShowError = touched[field.name] || submitCount > 0;

  return (
    <TextField
      value={displayedValue ? displayedValue(value) : value}
      margin="normal"
      variant="outlined"
      error={Boolean(toShowError && errors[field.name])}
      helperText={toShowError ? errors[field.name] : undefined}
      {...field}
      {...other}
    />
  );
};

export default TextFieldForm;
