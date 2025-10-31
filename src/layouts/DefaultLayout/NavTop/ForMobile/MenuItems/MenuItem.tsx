import { NavLink } from "react-router-dom";

interface Props {
  /**
   * The URL of the navigation link
   */
  href: string;
  /**
   * Callback raised when the user clicks on a menu item
   */
  onClick: () => void;
  /**
   * The label
   */
  title: string;
}

export default function MenuItem(props: Props) {
  const { href, onClick, title } = props;

  return (
    <div className="pt-6">
      <NavLink
        onClick={onClick}
        to={href}
        className={({ isActive }) =>
          `text-[#E1E1E1] no-underline text-2xl leading-8 inline-block relative ${
            isActive ? "font-bold" : "font-normal"
          } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#E1E1E1] after:transition-all after:duration-150 after:opacity-0 hover:after:opacity-100 focus:after:opacity-100`
        }
      >
        {title}
      </NavLink>
    </div>
  );
}
