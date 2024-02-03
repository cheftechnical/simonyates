import { useMemo } from "react";
import rem from "../../../styling/rem";
import { Box, Link, Typography } from "@mui/material";

interface Props {
  author?: string;
  link?: string | undefined;
  next?: boolean;
  publisher?: string;
  title: string;
  date: string;
}

// const useStyles = makeStyles(() => ({
// 	root: {
// 		paddingTop: 0,
// 	},
// 	next: {
// 		paddingTop: rem(16),
// 	}
// }));

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
          <Link href={link} target="_blank">
            {content}
          </Link>
          &rdquo;
        </em>
      );
    }

    return <em>&ldquo;{content}&rdquo;</em>;
  }, [link, title]);

  const renderedAuthor = author ? <>{author}. </> : <></>;

  const renderedPublisher = publisher ? <>. {publisher}</> : <></>;

  // const className = (next)
  //   ? `${classes.root} ${classes.next}`
  //   : classes.root;

  return (
    <Box sx={{ paddingTop: next ? rem(16) : 0 }}>
      <Typography component="p" variant="primaryBody">
        {renderedAuthor}
        {date}. {renderedTitle}
        {renderedPublisher}
      </Typography>
    </Box>
  );
}
