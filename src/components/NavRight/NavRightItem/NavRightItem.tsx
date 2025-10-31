import { Section } from "../../../types/Section.ts";
import { useCallback } from "react";

type NavRightItemProps = {
  section: Section;
  isActive?: boolean;
}

export default function NavRightItem(props: NavRightItemProps) {
  const { section, isActive = false } = props;

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const targetId = section.id;
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        // Calculate position accounting for scroll-padding-top
        const headerOffset = 100; // matches scroll-padding-top in CSS
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      // If preventDefault wasn't called, let the default anchor behavior happen
    },
    [section.id]
  );

  return (
    <li
      id={`nav-${section.id}`}
      className={`mb-6 pl-1 text-gray-500 nav-right-item ${
        isActive ? "active-scroll-spy" : ""
      }`}
      data-to-scrollspy-id={section.id}
    >
      <a
        className="no-underline leading-4 tracking-[0.25px] text-gray-500 hover:text-gray-900"
        href={`#${section.id}`}
        onClick={handleClick}
      >
        {section.title}
      </a>
    </li>
  );
}
