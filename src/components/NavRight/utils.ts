/**
 * Scroll offset to account for fixed header when navigating to sections.
 * This should match the scroll-padding-top value in style.css
 */
export const HEADER_OFFSET = 112;

/**
 * Finds an element by ID, handling cases where multiple elements may have the same ID.
 * Prefers elements with actual content/dimensions.
 * 
 * @param id - The element ID to search for
 * @returns The element with content, or the first element found, or null if not found
 */
export function findElementById(id: string): HTMLElement | null {
  const allElementsWithId = document.querySelectorAll(`[id="${id}"]`);
  
  // Find the element with actual dimensions/content
  for (const element of Array.from(allElementsWithId)) {
    const el = element as HTMLElement;
    // Prefer element with content (has height or scrollHeight)
    if (el.offsetHeight > 0 || el.scrollHeight > 0 || el.getBoundingClientRect().height > 0) {
      return el;
    }
  }
  
  // Fallback to first element if none have dimensions
  if (allElementsWithId.length > 0) {
    return allElementsWithId[0] as HTMLElement;
  }
  
  return null;
}

