import { ChangeEvent, ForwardedRef, forwardRef } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";

interface Props {
  defaultValue?: string;

  disabled?: boolean;

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
   * Label of the component
   */
  label?: string;

  /**
   * Callback raised when the component changes
   *
   * @param newValue
   */
  onChange: (newValue: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Number of rows to display, requires that `multiline=true`
   */
  rows?: number;

  /**
   * Placeholder text
   */
  placeholder?: string;

  type?: "number";

  /**
   * Value of the component
   */
  value: string;
}

// REMINDER: the tpe of forwardRef is the REVERSE order that they're listed in the callback arguments?!!!
export const MyTextField2 = forwardRef<HTMLInputElement, Props>(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      defaultValue,
      disabled,
      error,
      helperText,
      label,
      multiline,
      name,
      onChange,
      placeholder,
      rows,
      type,
      value,
    } = props;

    if (error) {
      return (
        <TextField
          error
          fullWidth
          defaultValue={defaultValue}
          disabled={disabled}
          helperText={helperText}
          label={label}
          multiline={multiline}
          name={name}
          ref={ref}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          type={type}
          value={value}
          InputProps={{
            // ...InputProps,
            endAdornment: (
              <InputAdornment position="end">
                <ErrorOutline />
              </InputAdornment>
            ),
          }}
        />
      );
    }

    return (
      <TextField
        fullWidth
        defaultValue={defaultValue}
        disabled={disabled}
        helperText={helperText}
        label={label}
        multiline={multiline}
        name={name}
        ref={ref}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        type={type}
        value={value}
      />
    );
  },
);
