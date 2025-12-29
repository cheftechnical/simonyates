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

  const handleShowMenu = useCallback(() => {
    setIsMenuVisible(true);
  }, []);

  return (
    <div className="bg-white pt-12 pb-6 fixed top-0 w-full z-[999]">
      <Container>
        <div className="flex justify-end">
          {/* Left align */}
          <div className="flex-grow">
            <div className="h-full flex items-center">
              <Link href="/">
                <Logo brand="simon-yates" variant="default" width={149} />
              </Link>
            </div>
          </div>

          {/*	Right align */}
          <div>
            <div className="h-full flex items-center">
              <div className="font-bold text-sm leading-4 tracking-[1.25px] uppercase pr-1 [&_a]:text-inherit">
                {/* Breadcrumb can be added here if needed */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>

      <Menu onClose={handleHideMenu} visible={isMenuVisible} />
    </div>
  );
}
