// import * as React from 'react';
// import {makeStyles} from '@material-ui/core/styles';
// import {color} from '../../Color/Color';

import color from "../../Color";
import { styled } from "@mui/material";

interface Props {
  children?: any;
  className?: any;
}

const StyledLi = styled("li")(({ theme }) => ({
  ...theme.typography.primaryBody,
  marginBottom: theme.spacing(16 / 8),

  marginLeft: "21px", // this moves the whole line (including bullet)
  paddingLeft: 0,

  listStyle: "none",
  color: color.grey[900],

  "&:before": {
    content: `'\\2022'`,

    display: "block",
    position: "relative",
    maxWidth: "0px",
    maxHeight: "0px",
    left: "-27px", // this moves just the bullet
    top: "-4px",
    color: color.grey["800"],
    fontSize: "20px",
  },
}));

export default function Li(props: Props) {
  const { children } = props;

  return <StyledLi>{children}</StyledLi>;
}
