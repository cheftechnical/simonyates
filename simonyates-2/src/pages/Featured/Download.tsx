// import ArrowRightIcon from '@material-ui/icons/ArrowRight';
// import {Button} from '@material-ui/core';
// import {makeStyles} from '@material-ui/core/styles';
// import classNames from 'classnames';

// @todo mui5
// const useStyles = makeStyles((theme) => ({
//   root: {
//     marginTop: theme.spacing(24 / 8)
//   },
//   next: {
//     marginTop: theme.spacing(0 / 8),
//   }
// }));

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {Button, Link, styled} from "@mui/material";
import {useCallback} from "react";

interface Props {
  /**
   * The URI of of the resource to be downloaded
   */
  href: string;
  /**
   * The label of the link
   */
  label?: string;
  /**
   * If `true`, additional top padding is applied. This should be used when multiple instances of the same component
   * are used in series.
   */
  next?: boolean;
}

const defaultProps: Props = {
  label: 'Download',
  href: '',
};

const StyledButton = styled(Button)(({theme}) => ({
  // default
}));

const StyledButtonNext = styled(StyledButton)(({theme}) => ({
  marginTop: theme.spacing(0 / 8),
}));

export default function Download(props: Props) {
  // const classes = useStyles();
  const {href, label, next} = {...defaultProps, ...props};

  const handleOnClick = useCallback(() => {
    const link = document.createElement("a");
    link.download = label ? label : '';
    link.href = href;
    link.target = '_blank';
    link.click();
  }, [href, label]);

  const MyStyledButton = (next) ? StyledButtonNext : StyledButton;

  return (
    <MyStyledButton endIcon={<ArrowRightIcon/>} onClick={handleOnClick} variant="text">
      {label}
    </MyStyledButton>
  );
};
