import { SectionItem } from "../../components/Sections/SectionItem";

export interface WorkAtContentProps {
  /**
   * Callback fired when the section changes
   *
   * @param newValues
   */
  onChange: (newValues: SectionItem[]) => void;
}
