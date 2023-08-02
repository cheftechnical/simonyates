import * as React from 'react';
import {Button} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {makeStyles} from '@material-ui/core/styles';

interface Props {
  /**
   * aria-label
   */
  ariaLabel: string;

  /**
   * The URL to link to when the button is clicked. If defined, an a element will be used as the root node.
   */
  href: string;
}

const useStyles = makeStyles((theme) => ({
  readFullDetails: {
    marginTop: theme.spacing(32 / 8)
  }
}));

export default function ReadFullDetails(props: Props) {
  const classes = useStyles();
  const {ariaLabel, href} = props;

  return (
    <div className={classes.readFullDetails}>
      <Button aria-label={ariaLabel} endIcon={<ArrowRightIcon/>} href={href} variant="text">
        Read Full Details
      </Button>
    </div>
  );
}