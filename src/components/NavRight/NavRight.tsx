'use client';

import { Sections } from "../../types/Sections";
import NavRightItem from "./NavRightItem";
import "./style.css";
import { HEADER_OFFSET, findElementById } from "./utils";
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

    const handleScroll = () => {
      // Find the section currently in view
      // We want to find the section whose top is closest to (but not too far above) the header offset
      let currentSectionId: string | null = null;
      let closestDistance = Infinity;
      let bestSectionAbove: string | null = null;
      let bestDistanceAbove = Infinity;

      for (const sectionId of sectionIds) {
        const element = findElementById(sectionId);
        
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // Check if section is currently visible in viewport (even if scrolled past header)
          const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
          
          if (isInViewport) {
            const distanceFromHeader = Math.abs(rect.top - HEADER_OFFSET);
            
            // Prefer sections that are at or below the header offset
            if (rect.top >= HEADER_OFFSET) {
              // Section is at or below header - prefer this
              if (distanceFromHeader < closestDistance) {
                closestDistance = distanceFromHeader;
                currentSectionId = sectionId;
              }
            } else {
              // Section is above header but still in viewport - track as fallback
              if (distanceFromHeader < bestDistanceAbove) {
                bestDistanceAbove = distanceFromHeader;
                bestSectionAbove = sectionId;
              }
            }
          }
        }
      }

      // If no section found at/below header, use the best section above header that's still visible
      if (currentSectionId === null && bestSectionAbove !== null) {
        currentSectionId = bestSectionAbove;
      }

      // If we're near the top, select the first section
      if (currentSectionId === null && window.scrollY < 200) {
        currentSectionId = sectionIds[0] || null;
      }

      // If we're past the last section, select the last section
      if (currentSectionId === null && sectionIds.length > 0) {
        const lastSectionId = sectionIds[sectionIds.length - 1];
        const lastSection = findElementById(lastSectionId);
        
        if (lastSection) {
          const rect = lastSection.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            currentSectionId = lastSectionId;
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
    <div className="sticky top-[112px]">
      <ul className="list-none break-words">
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