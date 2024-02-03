// import * as React from 'react';
// import {makeStyles} from '@material-ui/core/styles';
import { color } from "../../styling/Color/Color";
import rem from "../../styling/rem";
import Image from "../Image/Image";
import { ReactElement, useMemo } from "react";
import { Box, Link, styled } from "@mui/material";

// import {Link} from '@material-ui/core';

interface Props {
  alt: string;
  callToAction?: string | ReactElement;
  caption?: string | ReactElement;
  href?: string | undefined;
  next?: boolean;
  src: string;
}

// @todo mui5
// const useStyles = makeStyles((themeMui) => ({
// 	root: {
//
// 	},
// 	rootNext: {
// 		paddingTop: themeMui.spacing(40/8),
// 	},
//
// 	caption: {
// 		marginTop: themeMui.spacing((8-2) /8), // subtract 2 for automatic spacing
//
// 		// @todo I hate the way I coded this — the value is coming from Typography
// 		fontFamily: '"Tiempos Text"',
// 		fontStyle: 'normal',
// 		fontWeight: 'normal',
// 		fontSize: rem(12),
// 		lineHeight: rem(16),
// 		letterSpacing: rem(0.4),
//
// 		color: color.grey['700']
// 	},
// 	image: {
//
// 	}
// }));

const StyledFigCaption = styled("figcaption")(({ theme }) => ({
  marginTop: theme.spacing((8 - 2) / 8), // subtract 2 for automatic spacing

  // @todo I hate the way I coded this — the value is coming from Typography
  fontFamily: '"Tiempos Text"',
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: rem(12),
  lineHeight: rem(16),
  letterSpacing: rem(0.4),

  color: color.grey["700"],
}));

export default function Figure(props: Props) {
  // const classes = useStyles();
  const { alt, callToAction, caption, href, next, src } = props;

  // @todo mui5
  // const rootClassName = (next)
  // 	? `${classes.root} ${classes.rootNext}`
  // 	: classes.root;

  const renderedFigureContent = useMemo(() => {
    const image = <Image alt={alt} src={src} />;

    if (href) {
      return (
        <Link href={href} target="_blank">
          {image}
        </Link>
      );
    }

    return image;
  }, [alt, href, src]);

  const renderedFigureCaption = useMemo(() => {
    if (!caption) return;

    const captionContent = callToAction ? (
      <div>
        <div>{caption}</div>
        <div>
          <Link href={href} target="_blank">
            Watch Video &rsaquo;
          </Link>
        </div>
      </div>
    ) : (
      <>{caption}</>
    );

    return <StyledFigCaption>{captionContent}</StyledFigCaption>;
  }, [callToAction, caption, href]);

  // @todo mui5
  return (
    <Box
      sx={(theme) => ({
        paddingTop: next ? theme.spacing(5) : 0,
      })}
    >
      <figure>
        {renderedFigureContent}
        {renderedFigureCaption}
      </figure>
    </Box>
  );
}
