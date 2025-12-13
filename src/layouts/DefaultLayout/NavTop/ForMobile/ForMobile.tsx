import MyContainer from "../../../../styling/MyContainer/MyContainer";
import { NavLink, useMatches } from "react-router-dom";
import Logo from "../../../../components/Logo";
import Menu from "./Menu";
import { ReactNode, useCallback, useMemo, useState } from "react";

interface CustomHandles {
  breadcrumb?: ReactNode;
}

export default function ForMobile() {
  const matches = useMatches();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleHideMenu = useCallback(() => {
    setIsMenuVisible(false);
  }, []);

  const handleShowMenu = useCallback(() => {
    setIsMenuVisible(true);
  }, []);

  const selected = useMemo(() => {
    if (matches && matches[1] && matches[1].handle) {
      const handle = matches[1].handle as CustomHandles;

      if (handle.breadcrumb) {
        return <div>{handle.breadcrumb}</div>;
      }
    }

    return <></>;
  }, [matches]);

  return (
    <div className="bg-white pt-12 pb-6 fixed top-0 w-full z-[999]">
      <MyContainer>
        <div className="flex justify-end">
          {/* Left align */}
          <div className="flex-grow">
            <div className="h-full flex items-center">
              <NavLink to="/">
                <Logo brand="simon-yates" variant="default" width={149} />
              </NavLink>
            </div>
          </div>

          {/*	Right align */}
          <div>
            <div className="h-full flex items-center">
              <div className="font-bold text-sm leading-4 tracking-[1.25px] uppercase pr-1 [&_a]:text-inherit">
                {selected}
              </div>
            </div>
          </div>
          <div>
            <div className="h-full flex items-center">
              <button
                aria-label="menu"
                onClick={handleShowMenu}
                className="inline-flex items-center justify-center p-2 text-inherit bg-transparent border-0 cursor-pointer rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                {/* Custom SVG hamburger menu icon - replaced Material-UI MenuIcon */}
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </MyContainer>

      <Menu onClose={handleHideMenu} visible={isMenuVisible} />
    </div>
  );
}
