import { ReactNode } from "react";
import FeaturedChips from "./FeaturedChips";
import PublicationName from "./PublicationName";
import PublicationPublisher from "./PublicationPublisher";
import PublicationWhen from "./PublicationWhen";
import PublicationChildren from "./PublicationChildren";

interface Props {
  /**
   * The publication content/description.
   */
  children: ReactNode;
  /**
   * The name/title of the publication.
   */
  name: string;
  /**
   * Whether this is the next publication (adds top padding).
   */
  next?: boolean;
  /**
   * The publisher name.
   */
  publisher: string;
  /**
   * List of tags/chips to display.
   */
  tags: string[];
  /**
   * When the publication was published.
   */
  when: string;
}

export default function FeaturedPublication(props: Props) {
  const { children, name, next, publisher, tags, when } = props;

  return (
    <div className={next ? "pt-[40px]" : ""}>
      <PublicationName>{name}</PublicationName>

      <PublicationPublisher>{publisher}</PublicationPublisher>

      <PublicationWhen>{when}</PublicationWhen>

      <FeaturedChips list={tags} />

      <PublicationChildren>{children}</PublicationChildren>
    </div>
  );
}
