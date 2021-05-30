import * as React from 'react';
import {ForwardedRef} from 'react';
import {InputAdornment, TextField} from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import {InputProps as StandardInputProps} from '@material-ui/core/Input/Input';

interface Props {
  defaultValue?: any;

  /**
   * When true, the component will show that it has an error
   */
  error?: boolean;

  /**
   * When provided, additional helper text below the text field will be displayed
   */
  helperText?: string;

  /**
   * If true, a multiline text field will be displayed
   */
  multiline?: boolean;

  /**
   * Name of the component
   */
  name: string;

  /**
   * Callback raised when the component changes
   *
   * @param newValue
   */
  onChange: (newValue: StandardInputProps) => void;

  /**
   * Number of rows to display, requires that `multiline=true`
   */
  rows?: number;

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Value of the component
   */
  value: string;
}

// REMINDER: the tpe of forwardRef is the REVERSE order that they're listed in the callback arguments?!!!
export const MyTextField2 = React.forwardRef<HTMLInputElement, Props>((props: Props, ref: ForwardedRef<HTMLInputElement>) => {
  const {defaultValue, error, helperText, multiline, name, onChange, placeholder, rows, value} = props;

  if (error) {
    return (
      <TextField
        error
        fullWidth
        defaultValue={defaultValue}
        helperText={helperText}
        multiline={multiline}
        name={name}
        ref={ref}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        value={value}
        InputProps={{
          // ...InputProps,
          endAdornment: <InputAdornment position="end"><ErrorOutlineIcon/></InputAdornment>
        }}
      />
    );
  }

  return (
    <TextField
      fullWidth
      defaultValue={defaultValue}
      helperText={helperText}
      multiline={multiline}
      name={name}
      ref={ref}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      value={value}
    />
  )
});


// const Select = React.forwardRef<HTMLSelectElement,
//   { label: string } & ReturnType<UseFormRegister<IFormValues>>>(({onChange, onBlur, name, label}, ref) => (
//   <>
//     <label>{label}</label>
//     <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
//       <option value="20">20</option>
//       <option value="30">30</option>
//     </select>
//   </>
// ));