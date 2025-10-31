import { Section } from "../../../types/Section.ts";

type NavRightItemProps = {
  section: Section;
  isActive?: boolean;
}

export default function NavRightItem(props: NavRightItemProps) {
  const { section, isActive = false } = props;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const targetId = section.id;
    e.preventDefault();
    
    // Handle duplicate IDs: find the element that actually has content
    const allElementsWithId = document.querySelectorAll(`[id="${targetId}"]`);
    
    // Find the element with actual dimensions/content
    let targetElement: HTMLElement | null = null;
    for (const element of Array.from(allElementsWithId)) {
      const el = element as HTMLElement;
      // Prefer element with content (has height or scrollHeight)
      if (el.offsetHeight > 0 || el.scrollHeight > 0 || el.getBoundingClientRect().height > 0) {
        targetElement = el;
        break;
      }
    }
    
    // Fallback to first element if none have dimensions
    if (!targetElement && allElementsWithId.length > 0) {
      targetElement = allElementsWithId[0] as HTMLElement;
    }

    if (!targetElement) {
      console.warn('Target element not found:', targetId);
      return;
    }
    
    // Function to attempt scrolling
    const attemptScroll = () => {
      const rect = targetElement.getBoundingClientRect();
      const currentScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      
      // If element has valid dimensions, scroll to it
      if (rect.height > 0 || rect.top !== rect.bottom) {
        const absoluteTop = rect.top + currentScrollY;
        const headerOffset = 100;
        const targetScrollPosition = Math.max(0, absoluteTop - headerOffset);
        
        window.scrollTo({
          top: targetScrollPosition,
          behavior: "auto"
        });
        
        // Update URL hash
        window.history.pushState(null, "", `#${targetId}`);
        return true;
      }
      return false;
    };
    
    // Try immediate scroll
    if (attemptScroll()) {
      return;
    }
    
    // If that didn't work, wait for layout and try scrollIntoView
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const rect = targetElement.getBoundingClientRect();
        
        if (rect.height > 0) {
          // Element now has dimensions, use scrollIntoView
          targetElement.scrollIntoView({
            behavior: "auto",
            block: "start",
            inline: "nearest"
          });
        } else {
          // Still zero dimensions - try scrolling to offsetTop
          let elementTop = 0;
          let element: HTMLElement | null = targetElement;
          while (element && element !== document.body) {
            elementTop += element.offsetTop;
            element = element.offsetParent as HTMLElement | null;
          }
          
          if (elementTop > 0) {
            window.scrollTo({
              top: Math.max(0, elementTop - 100),
              behavior: "auto"
            });
          } else {
            // Last resort: use the hash and let browser handle it
            console.warn('All methods failed, using hash navigation');
            window.location.hash = targetId;
            return;
          }
        }
        
        // Update URL hash
        requestAnimationFrame(() => {
          window.history.pushState(null, "", `#${targetId}`);
        });
      });
    });
  };

  return (
    <li
      className={`mb-6 pl-1 text-gray-500 nav-right-item ${
        isActive ? "active-scroll-spy" : ""
      }`}
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
