import MyContainer from "../../../../styling/MyContainer/MyContainer";
import { NavLink } from "react-router-dom";
import Logo from "../../../../components/Logo";
import { useCallback } from "react";
import MenuItems from "./MenuItems";

interface Props {
  /**
   * Callback raised when the user closes the menu
   */
  onClose: () => void;
  visible: boolean;
}

export default function Menu(props: Props) {
  const { onClose, visible } = props;

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  if (!visible) {
    return <></>;
  }

  return (
    <div className="bg-[#222222] pt-12 fixed top-0 left-0 w-full h-full z-[100]">
      <div className="pr-[10px]">
        <MyContainer>
          <div className="flex justify-end">
            {/* Left align */}
            <div className="flex-grow">
              <NavLink to="/">
                <Logo brand="simon-yates" variant="grey-100" width={149} />
              </NavLink>
            </div>

            {/*	Right align */}
            <div>adf
              <button
                aria-label="close"
                onClick={handleClose}
                className="inline-flex items-center justify-center p-2 text-[#E1E1E1] bg-transparent border-0 cursor-pointer rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                {/* Custom SVG X icon - replaced Material-UI ClearIcon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </MyContainer>
      </div>
      <MyContainer>
        <MenuItems onClick={handleClose} />
      </MyContainer>
    </div>
  );
}
