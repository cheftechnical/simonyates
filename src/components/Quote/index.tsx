import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '../../styling/Typography';
import rem from '../../styling/rem';
import {color} from '../../styling/Color';
import classNames from 'classnames';
import {ReactNode} from 'react';

export interface Props {
  /**
   * The content of the callout.
   */
  children?: ReactNode;
  /**
   * If `true`, additional top padding is applied. This should be used when multiple instances of the same component
   * are used in series.
   */
  next?: boolean;
  /**
   * If provided, this is the source of the quote
   */
  source?: string;
}

const useStyles = makeStyles((theme) => ({
  rootNext: {
    paddingTop: theme.spacing(48 / 8),
  },
  boxQuote: {
    paddingRight: theme.spacing(8 / 8),
    fontFamily: `"Times New Roman"`,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: rem(64),
    lineHeight: '100%',
    color: color.lime['500'],
  },
  boxContent: {
    paddingTop: theme.spacing(12 / 8),
  },
  blockquote: {
    margin: 0,
    padding: 0,
  },
  blockquoteTypography: {
    color: color.grey['800']
  },
  footer: {
    paddingTop: theme.spacing(16 / 8),
  },
  footerTypography: {
    color: color.grey['600']
  },
  span: {
    fontFamily: `"Times New Roman"`,
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: color.lime['500'],
  },
}));

export default function Quote(props: Props) {
  const classes = useStyles();
  const {children, next, source} = props;

  const rootClassName = classNames(
    {[classes.rootNext]: next}
  );

  // const rootClassName = (next)
  //   ? classes.rootNext
  //   : undefined;

  const renderedEndQuote = (
    <span className={classes.span}>&rdquo;</span>
  );

  const renderedSource = (source)
    ? (
      <footer className={classes.footer}>
        <Typography
          className={classes.footerTypography}
          group="primary"
          variant="subtitle"
          weight="regular"
        >
          {source}
        </Typography>
      </footer>
    ) : '';

  return (
    <Box className={rootClassName} display="flex">
      <Box className={classes.boxQuote}>&ldquo;</Box>
      <Box className={classes.boxContent} flexGrow={1}>
        <blockquote className={classes.blockquote} cite={source}>
          <Typography
            className={classes.blockquoteTypography}
            group="secondary"
            variant="body"
            weight="light"
          >
            {children}{renderedEndQuote}
          </Typography>
          {renderedSource}
        </blockquote>
      </Box>
    </Box>
  );
};
