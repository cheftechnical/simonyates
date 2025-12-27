import { useMemo } from "react";

interface Props {
  author?: string;
  link?: string | undefined;
  next?: boolean;
  publisher?: string;
  title: string;
  date: string;
}

export default function WorkAtPublication(props: Props) {
  const { author, link, next, publisher, title, date } = props;

  const renderedTitle = useMemo(() => {
    // Prevent orphans
    const words = title.split(" ");
    const a = words.slice(0, words.length - 1).join(" ");
    const b = words[words.length - 1];

    const content = (
      <>
        {a}&nbsp;{b}
      </>
    );

    if (link) {
      return (
        <em>
          &ldquo;
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 no-underline hover:underline">
            {content}
          </a>
          &rdquo;
        </em>
      );
    }

    return <em>&ldquo;{content}&rdquo;</em>;
  }, [link, title]);

  const renderedAuthor = author ? <>{author}. </> : <></>;

  const renderedPublisher = publisher ? <>. {publisher}</> : <></>;

  return (
    <div className={next ? "pt-4" : ""}>
      <p className="font-primary font-normal text-base leading-normal">
        {renderedAuthor}
        {date}. {renderedTitle}
        {renderedPublisher}
      </p>
    </div>
  );
}
