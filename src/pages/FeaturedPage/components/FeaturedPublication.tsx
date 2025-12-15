import { ReactNode } from "react";
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
   * When the publication was published.
   */
  when: string;
}

export default function FeaturedPublication(props: Props) {
  const { children, name, next, publisher, when } = props;

  return (
    <div className={next ? "pt-[40px]" : ""}>
      <PublicationName>{name}</PublicationName>

      <PublicationPublisher>{publisher}</PublicationPublisher>

      <PublicationWhen>{when}</PublicationWhen>

      <PublicationChildren>{children}</PublicationChildren>
    </div>
  );
}
