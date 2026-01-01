'use client';

import Logo from '../../../../components/Logo';
import Container from '../../../../components/Container/Container';
import Menu from './Menu';
import Link from 'next/link';
import { useCallback, useState } from 'react';

export default function ForMobile() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleHideMenu = useCallback(() => {
    setIsMenuVisible(false);
  }, []);

  const handleToggleMenu = useCallback(() => {
    setIsMenuVisible((prev) => !prev);
  }, []);

  return (
    <div className="bg-white pt-12 pb-6 fixed top-0 w-full z-[999]">
      {/* Match the open-menu header layout so logo + icon stay aligned between states */}
      <div className="pr-[10px]">
        <Container>
          <div className="flex items-center justify-end">
            {/* Left align */}
            <div className="flex-grow">
              <Link href="/">
                <Logo brand="simon-yates" variant="222222" width={149} />
              </Link>
            </div>

            {/* Right align */}
            <div>
              <button
                aria-label={isMenuVisible ? 'close' : 'menu'}
                onClick={handleToggleMenu}
                className="inline-flex items-center justify-center p-2 text-inherit bg-transparent border-0 cursor-pointer rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                {isMenuVisible ? (
                  // Custom SVG X icon (same geometry as Menu close icon)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  // Custom SVG hamburger menu icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </Container>
      </div>

      <Menu onClose={handleHideMenu} visible={isMenuVisible} />
    </div>
  );
}
