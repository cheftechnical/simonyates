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
      // We want to find the section whose top is closest to (but not too far above) the header offset
      let currentSectionId: string | null = null;
      let closestDistance = Infinity;
      let bestSectionAbove: string | null = null;
      let bestDistanceAbove = Infinity;

      for (const sectionId of sectionIds) {
        // Handle duplicate IDs: find element with actual content
        const allElementsWithId = document.querySelectorAll(`[id="${sectionId}"]`);
        let element: HTMLElement | null = null;
        
        // Find element with dimensions/content
        for (const el of Array.from(allElementsWithId)) {
          const htmlEl = el as HTMLElement;
          if (htmlEl.offsetHeight > 0 || htmlEl.scrollHeight > 0 || htmlEl.getBoundingClientRect().height > 0) {
            element = htmlEl;
            break;
          }
        }
        
        // Fallback to first element
        if (!element && allElementsWithId.length > 0) {
          element = allElementsWithId[0] as HTMLElement;
        }
        
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // Check if section is currently visible in viewport (even if scrolled past header)
          const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
          
          if (isInViewport) {
            const distanceFromHeader = Math.abs(rect.top - headerOffset);
            
            // Prefer sections that are at or below the header offset
            if (rect.top >= headerOffset) {
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
        const allElementsWithId = document.querySelectorAll(`[id="${lastSectionId}"]`);
        let lastSection: HTMLElement | null = null;
        
        // Find element with dimensions
        for (const el of Array.from(allElementsWithId)) {
          const htmlEl = el as HTMLElement;
          if (htmlEl.offsetHeight > 0 || htmlEl.scrollHeight > 0) {
            lastSection = htmlEl;
            break;
          }
        }
        
        if (!lastSection && allElementsWithId.length > 0) {
          lastSection = allElementsWithId[0] as HTMLElement;
        }
        
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
      <ul className="list-none xp-4 break-words">
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