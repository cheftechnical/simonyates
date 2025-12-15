import { NavLink } from "react-router-dom";

enum Variant {
  FadeIn = "fadeIn",
  SlideIn = "slideIn",
  Center = "center",
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

  // Base classes for list items
  const getLiClasses = () => {
    const baseClasses = "ml-12"; // theme.spacing(3) = 24px = ml-12
    
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

  // Base classes for NavLink
  const getLinkClasses = () => {
    const baseClasses = "text-inherit no-underline block relative py-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#222222] after:transition-all after:duration-150";
    
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

  return (
    <div role="navigation">
      <ul className="list-none m-0 p-0 flex flex-wrap justify-center">
        <li className={liClasses}>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              `${linkClasses} text-sm leading-4 tracking-[1.25px] uppercase ${
                isActive || selected === "work" ? "font-bold" : "font-normal"
              }`
            }
          >
            Work
          </NavLink>
        </li>
        <li className={liClasses}>
          <NavLink
            to="/featured"
            className={({ isActive }) =>
              `${linkClasses} text-sm leading-4 tracking-[1.25px] uppercase ${
                isActive || selected === "featured" ? "font-bold" : "font-normal"
              }`
            }
          >
            Featured
          </NavLink>
        </li>
        <li className={liClasses}>
          <NavLink
            to="/appearances"
            className={({ isActive }) =>
              `${linkClasses} text-sm leading-4 tracking-[1.25px] uppercase ${
                isActive || selected === "appearances" ? "font-bold" : "font-normal"
              }`
            }
          >
            Appearances
          </NavLink>
        </li>
        <li className={liClasses}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkClasses} text-sm leading-4 tracking-[1.25px] uppercase ${
                isActive || selected === "about" ? "font-bold" : "font-normal"
              }`
            }
          >
            About
          </NavLink>
        </li>
        <li className={liClasses}>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkClasses} text-sm leading-4 tracking-[1.25px] uppercase ${
                isActive || selected === "contact" ? "font-bold" : "font-normal"
              }`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MenuItems;
