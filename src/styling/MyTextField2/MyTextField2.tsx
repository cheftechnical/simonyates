import { ChangeEvent, ForwardedRef, forwardRef, useId } from "react";

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
  onChange: (newValue: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

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
export const MyTextField2 = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  (props: Props, ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>) => {
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

    const id = useId();
    const inputId = `textfield-${id}`;
    const helperTextId = helperText ? `helper-${id}` : undefined;

    const baseInputClasses = `w-full py-[14px] px-[14px] font-normal text-base leading-normal bg-transparent border-0 rounded outline-none ${
      error ? "text-red-500" : "text-gray-900"
    } ${disabled ? "text-gray-200 cursor-not-allowed" : ""} placeholder:text-gray-400`;

    const borderClasses = error
      ? "border border-red-500 focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500"
      : "border border-gray-400 hover:border-gray-900 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500";

    return (
      <div className="mb-[24px]">
        {label && (
          <label
            htmlFor={inputId}
            className={`block mb-1 font-normal text-sm leading-4 tracking-[0.25px] ${
              error ? "text-red-500" : "text-gray-900"
            } ${disabled ? "text-gray-200" : ""}`}
          >
            {label}
          </label>
        )}
        <div className={`relative ${borderClasses} ${disabled ? "border-gray-200" : ""} rounded`}>
          {multiline ? (
            <>
              <textarea
                id={inputId}
                ref={ref as ForwardedRef<HTMLTextAreaElement>}
                name={name}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange as (e: ChangeEvent<HTMLTextAreaElement>) => void}
                placeholder={placeholder}
                disabled={disabled}
                rows={rows}
                className={baseInputClasses}
                aria-describedby={helperTextId}
                aria-invalid={error}
              />
              {error && (
                <div className="absolute right-[16px] top-[10px] pointer-events-none">
                  <svg
                    className="w-5 h-5 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
              )}
            </>
          ) : (
            <>
              <input
                id={inputId}
                ref={ref as ForwardedRef<HTMLInputElement>}
                name={name}
                type={type || "text"}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange as (e: ChangeEvent<HTMLInputElement>) => void}
                placeholder={placeholder}
                disabled={disabled}
                className={baseInputClasses}
                aria-describedby={helperTextId}
                aria-invalid={error}
              />
              {error && (
                <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
              )}
            </>
          )}
        </div>
        {helperText && (
          <p
            id={helperTextId}
            className={`mt-1 pl-[16px] pr-[16px] font-normal text-sm leading-4 tracking-[0.25px] ${
              error ? "text-red-500" : "text-gray-900"
            } ${disabled ? "text-gray-200" : ""}`}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  },
);
