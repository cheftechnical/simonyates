import { Section } from "../../../types/Section.ts";

type NavRightItemProps = {
  section: Section;
}

export default function NavRightItem(props: NavRightItemProps) {
  const { section } = props;

  return (
    <li
      className="mb-6 pl-1 text-gray-500 border-l-2 border-white"
      data-to-scrollspy-id={section.id}
    >
      <a
        className="no-underline leading-4 tracking-[0.25px] text-gray-500 hover:text-gray-900"
        href={`#${section.id}`}
      >
        {section.title}
      </a>
    </li>
  );
}
