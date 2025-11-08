import "./style.css";
import NavRightItem from "./NavRightItem";
import { Sections } from "../../types/Sections.ts";
import { useEffect, useState } from "react";
import React from "react";
import { HEADER_OFFSET, findElementById } from "./utils";

interface NavRightProps {
  /**
   * The sections on the page - can be a single Sections object or an array of Sections objects
   */
  sections?: Sections | Sections[];
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

  // Normalize to array format
  const sectionsArray = Array.isArray(sections) ? sections : [sections];

  // Collect all section IDs for scroll spy
  const allSectionIds = sectionsArray.flatMap(s => Object.values(s).map(sec => sec.id));

  useEffect(() => {
    const sectionIds = allSectionIds;

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
  }, [allSectionIds]);

  // Calculate width based on container max-widths: 3/12 (25%) of each breakpoint
  // sm: 600px * 0.25 = 150px
  // md: 960px * 0.25 = 240px
  // lg: 1076px * 0.25 = 269px (rounded from 268.33...)
  // 
  // Empirical adjustment: Subtract 13px from each to account for browser subpixel
  // rounding and flexbox calculation differences between percentage-based widths
  // and fixed pixel widths when using position: fixed. This was determined by
  // measuring overflow from a bordered div, which may introduce a ±2px variance
  // (1px border on each side).
  
  return (
    <div className="fixed sm:w-[137px] md:w-[227px] lg:w-[256px] overflow-hidden xbg-[pink]">
      {sectionsArray.map((sectionGroup, groupIndex) => (
        <React.Fragment key={groupIndex}>
          {groupIndex > 0 && (
            <div className="border-t border-gray-100 my-6"></div>
          )}
          <ul className="list-none xp-4 break-words">
            {Object.entries(sectionGroup).map(([key, value]) => (
              <NavRightItem
                key={key}
                section={value}
                isActive={activeSectionId === value.id}
              />
            ))}
          </ul>
        </React.Fragment>
      ))}
    </div>
  );
}

export default NavRight;