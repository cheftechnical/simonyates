'use client';

import Logo from '../../../../components/Logo';
import MyContainer from '../../../../styling/MyContainer/MyContainer';
import MenuItems from './MenuItems/MenuItemsNext';
import Link from 'next/link';

interface Props {
  /**
   * The key of the selected nav item
   */
  selected?: string;
}

export default function ForDesktop(props: Props) {
  const { selected } = props;

  return (
    <div className="bg-white pt-12 pb-6 fixed top-0 w-full z-[999]">
      <MyContainer>
        <div className="flex justify-end">
          {/* Left align */}
          <div className="flex-grow">
            <Link href="/">
              <Logo brand="simon-yates" variant="default" width={149} />
            </Link>
          </div>

          {/* Right align */}
          <div>
            <MenuItems selected={selected} />
          </div>
        </div>
      </MyContainer>
    </div>
  );
}
