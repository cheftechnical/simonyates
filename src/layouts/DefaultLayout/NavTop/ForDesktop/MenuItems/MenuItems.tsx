'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isNavItemActive } from '../../isNavItemActive';

enum Variant {
  FadeIn = 'fadeIn',
  SlideIn = 'slideIn',
  Center = 'center',
}

export interface Props {
  /**
   * The key of the selected nav item
   */
  selected?: string;
  /**
   * The underline animation
   */
  variant?: Variant.FadeIn | Variant.SlideIn | Variant.Center;
}

export function MenuItems(props: Props) {
  const { selected, variant = Variant.SlideIn } = props;
  const pathname = usePathname();

  // Base classes for list items
  const getLiClasses = () => {
    const baseClasses = 'ml-12'; // theme.spacing(3) = 24px = ml-12

    switch (variant) {
      case Variant.Center:
        return `${baseClasses} [&>a::after]:opacity-100 [&>a::after]:scale-0 [&>a::after]:origin-center [&>a:hover::after]:scale-100 [&>a:focus::after]:scale-100`;
      case Variant.SlideIn:
        return `${baseClasses} [&>a]:overflow-hidden [&>a::after]:opacity-100 [&>a::after]:translate-x-[-105%] [&>a:hover::after]:translate-x-0 [&>a:focus::after]:translate-x-0`;
      case Variant.FadeIn:
      default:
        return baseClasses;
    }
  };

  // Base classes for Link
  const getLinkClasses = () => {
    const baseClasses =
      "text-inherit no-underline block relative py-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#222222] after:transition-all after:duration-150";

    if (variant === Variant.FadeIn) {
      // FadeIn: starts invisible, fades in and moves down on hover
      return `${baseClasses} after:opacity-0 hover:after:opacity-100 hover:after:translate-y-1 focus:after:opacity-100 focus:after:translate-y-1`;
    }

    // For SlideIn and Center, opacity is already set to 1 in li classes
    // Don't override it here - just use base classes
    return baseClasses;
  };

  const liClasses = getLiClasses();
  const linkClasses = getLinkClasses();

  const isActive = (href: string) => isNavItemActive({ pathname, href });

  return (
    <div role="navigation">
      <ul className="list-none m-0 p-0 flex flex-wrap justify-center">
        <li className={liClasses}>
          <Link
            href="/featured"
            className={`${linkClasses} text-sm leading-4 tracking-[1.25px] uppercase ${
              isActive('/featured') || selected === 'featured' ? 'font-bold' : 'font-normal'
            }`}
          >
            Featured
          </Link>
        </li>
        <li className={liClasses}>
          <Link
            href="/work"
            className={`${linkClasses} text-sm leading-4 tracking-[1.25px] uppercase ${
              isActive('/work') || selected === 'work' ? 'font-bold' : 'font-normal'
            }`}
          >
            Work
          </Link>
        </li>
        <li className={liClasses}>
          <Link
            href="/studies"
            className={`${linkClasses} text-sm leading-4 tracking-[1.25px] uppercase ${
              isActive('/studies') || selected === 'studies' ? 'font-bold' : 'font-normal'
            }`}
          >
            Studies
          </Link>
        </li>
        <li className={liClasses}>
          <Link
            href="/appearances"
            className={`${linkClasses} text-sm leading-4 tracking-[1.25px] uppercase ${
              isActive('/appearances') || selected === 'appearances' ? 'font-bold' : 'font-normal'
            }`}
          >
            Appearances
          </Link>
        </li>
        <li className={liClasses}>
          <Link
            href="/about"
            className={`${linkClasses} text-sm leading-4 tracking-[1.25px] uppercase ${
              isActive('/about') || selected === 'about' ? 'font-bold' : 'font-normal'
            }`}
          >
            About
          </Link>
        </li>
        <li className={liClasses}>
          <Link
            href="/contact"
            className={`${linkClasses} text-sm leading-4 tracking-[1.25px] uppercase ${
              isActive('/contact') || selected === 'contact' ? 'font-bold' : 'font-normal'
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuItems;
