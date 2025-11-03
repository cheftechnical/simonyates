import { ReactElement } from "react";

export interface WorkExperienceData {
  /**
   * The name of the employer
   */
  employer: string;
  /**
   * The brand identifier for the logo
   */
  brand:
    | "genworth-canada"
    | "hellofresh"
    | "infomart"
    | "jib-design-and-advertising"
    | "mayo-clinic"
    | "philips-lighting"
    | "rbc"
    | "truenorth"
    | "uncharted-software";
  /**
   * The role performed at this employer
   */
  role: string | ReactElement;
  /**
   * Full date range with months (e.g., "September 2023 to September 2025")
   * or year range with en dash (e.g., "2007–2008")
   */
  when: string;
  /**
   * Where the work was located
   */
  where: string;
  /**
   * The URL path to the detailed work experience page
   */
  href: string;
  /**
   * The section ID for navigation
   */
  sectionId: string;
}

/**
 * Work experience data ordered from most recent to oldest.
 * This is the single source of truth for work experience information.
 */
export const workExperienceData: WorkExperienceData[] = [
  {
    employer: "HelloFresh",
    brand: "hellofresh",
    role: "Senior Frontend Staff Engineer / Accessibility & Inclusive Design Advocate",
    when: "September 2023 to September 2025",
    where: "Toronto, ON, Canada",
    href: "/work/hellofresh",
    sectionId: "hellofresh",
  },
  {
    employer: "TrueNorth Technologies",
    brand: "truenorth",
    role: "Team Lead & Staff Frontend Software Engineer",
    when: "March 2021 to March 2023",
    where: "San Francisco, CA, USA",
    href: "/work/truenorth",
    sectionId: "truenorth",
  },
  {
    employer: "RBC",
    brand: "rbc",
    role: "Lead Software Engineer (Contract, Site Reliability Engineering)",
    when: "July 2018 to March 2021",
    where: "Toronto, Canada",
    href: "/work/rbc",
    sectionId: "rbc",
  },
  {
    employer: "Uncharted Software",
    brand: "uncharted-software",
    role: "Senior Software Architect",
    when: "May 2016 to 2018",
    where: "Toronto, Canada",
    href: "/work/uncharted-software",
    sectionId: "uncharted-software",
  },
  {
    employer: "Mayo Clinic",
    brand: "mayo-clinic",
    role: "Software Engineer (Clinical Decision Support Systems)",
    when: "October 2014 to October 2015",
    where: "Rochester, MN, USA",
    href: "/work/mayo-clinic",
    sectionId: "mayo-clinic",
  },
  {
    employer: "Genworth Canada",
    brand: "genworth-canada",
    role: "Developer (Data Search & Optimization)",
    when: "July 2014 to January 2015",
    where: "Oakville, ON, Canada",
    href: "/work/genworth-canada",
    sectionId: "genworth-canada",
  },
  {
    employer: "Infomart",
    brand: "infomart",
    role: "Architect & Lead Developer (Media Archive Re-Architecture)",
    when: "2012–2014",
    where: "Toronto, Canada",
    href: "/work/infomart",
    sectionId: "infomart",
  },
  {
    employer: "Jib Design & Advertising",
    brand: "jib-design-and-advertising",
    role: "Technical Director (Digital Media Production)",
    when: "2007–2008",
    where: "Toronto, ON, Canada",
    href: "/work/jib-design-and-advertising",
    sectionId: "jib-design-and-advertising",
  },
  {
    employer: "Philips Lighting",
    brand: "philips-lighting",
    role: "Product & Business Data Analyst",
    when: "2002–2006",
    where: "Markham, ON, Canada",
    href: "/work/philips-lighting",
    sectionId: "philips-lighting",
  },
];

/**
 * Formats a date range for the WorkPage (year ranges only with en dash).
 * Extracts years from the full date string.
 *
 * @param when - The full date string (e.g., "September 2023 to September 2025" or "2007–2008")
 * @returns Formatted year range (e.g., "2023–2025" or "2007–2008")
 */
export function formatDateForWorkPage(when: string): string {
  // If it's already a year range with en dash, return as-is
  if (/^\d{4}–\d{4}$/.test(when)) {
    return when;
  }

  // Extract years from full date strings like "September 2023 to September 2025"
  const yearMatch = when.match(/(\d{4}).*?(\d{4})/);
  if (yearMatch) {
    const startYear = yearMatch[1];
    const endYear = yearMatch[2];
    return `${startYear}–${endYear}`;
  }

  // Fallback: try to extract single year or return original
  const singleYearMatch = when.match(/(\d{4})/);
  if (singleYearMatch) {
    return singleYearMatch[1];
  }

  return when;
}

/**
 * Gets work experience data by section ID.
 *
 * @param sectionId - The section ID to look up
 * @returns The work experience data or undefined if not found
 */
export function getWorkExperienceBySectionId(
  sectionId: string
): WorkExperienceData | undefined {
  return workExperienceData.find((data) => data.sectionId === sectionId);
}

/**
 * Gets work experience data by href.
 *
 * @param href - The href to look up
 * @returns The work experience data or undefined if not found
 */
export function getWorkExperienceByHref(
  href: string
): WorkExperienceData | undefined {
  return workExperienceData.find((data) => data.href === href);
}

