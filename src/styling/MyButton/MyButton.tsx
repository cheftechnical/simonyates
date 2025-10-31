import { ReactNode } from "react";

interface Props {
  /**
   * Button content
   */
  children: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Whether the button is disabled
   */
  disabled?: boolean;

  /**
   * Icon to display at the end of the button
   */
  endIcon?: ReactNode;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Button type attribute
   */
  type?: "button" | "submit" | "reset";
}

export function MyButton({
  children,
  className = "",
  disabled = false,
  endIcon,
  onClick,
  type = "button",
}: Props) {
  const baseClasses = `
    inline-flex items-center justify-center
    px-4 py-4
    font-primary font-medium text-base leading-4 tracking-[1.25px]
    uppercase
    rounded
    shadow-none
    transition-colors duration-200
    cursor-pointer
    text-gray-50 bg-gray-900
    hover:text-gray-900 hover:bg-gray-50 hover:shadow-[inset_0_0_0_2px_var(--color-gray-900)]
    active:text-gray-900 active:bg-gray-50 active:shadow-[inset_0_0_0_2px_var(--color-gray-900)]
    disabled:text-gray-50 disabled:bg-gray-300 disabled:cursor-not-allowed
    ${className}
  `.trim().replace(/\s+/g, " ");

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={baseClasses}
    >
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
}

