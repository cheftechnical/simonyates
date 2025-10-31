import "./style.css";
import NavRightItem from "./NavRightItem";
import { Sections } from "../../types/Sections.ts";
import { useEffect, useState } from "react";

interface NavRightProps {
  /**
   * The sections on the page
   */
  sections?: Sections;
}

export function NavRight(props: NavRightProps) {
  const { sections } = props;
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  /**
   * If no sections were provided, we can skip this
   */
  if (!sections) {
    return (
      <div>
        [No Nav Items]
      </div>
    );
  }

  useEffect(() => {
    const sectionIds = Object.values(sections).map((s) => s.id);
    const headerOffset = 100; // matches scroll-padding-top

    const handleScroll = () => {
      // Find the section currently in view
      let currentSectionId: string | null = null;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (accounting for header offset)
          if (rect.top <= headerOffset + 50 && rect.bottom >= headerOffset) {
            currentSectionId = sectionId;
          }
        }
      }

      // If we're near the top, select the first section
      if (currentSectionId === null && window.scrollY < 200) {
        currentSectionId = sectionIds[0] || null;
      }

      // If we're past the last section, select the last section
      if (currentSectionId === null && sectionIds.length > 0) {
        const lastSection = document.getElementById(sectionIds[sectionIds.length - 1]);
        if (lastSection) {
          const rect = lastSection.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            currentSectionId = sectionIds[sectionIds.length - 1];
          }
        }
      }

      setActiveSectionId(currentSectionId);
    };

    // Check on mount and hash change
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleScroll);
    };
  }, [sections]);

  return (
    <div className="fixed">
      <ul className="list-none p-4">
        {Object.entries(sections).map(([key, value]) => (
          <NavRightItem
            key={key}
            section={value}
            isActive={activeSectionId === value.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default NavRight;