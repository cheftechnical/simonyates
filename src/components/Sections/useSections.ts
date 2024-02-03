import { useState } from "react";
import { SectionItem } from "./SectionItem";

type HandleSectionChange = (newValue: SectionItem[]) => void;

export function useSections(): [
  SectionItem[] | undefined,
  HandleSectionChange,
] {
  const [sections, setSections] = useState<SectionItem[]>();

  const handleSectionChange: HandleSectionChange = (
    newValue: SectionItem[],
  ) => {
    setSections(newValue);
  };

  return [sections, handleSectionChange];
}
