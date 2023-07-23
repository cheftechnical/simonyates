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

export default function Download(props: Props) {
  // const classes = useStyles();
  const {href, label, next} = {...defaultProps, ...props};

  // @todo mui5
  // const className = classNames([
  //   classes.root,
  //   {[classes.next]: next},
  // ]);

  // return (
  //   <Button download className={className} endIcon={<ArrowRightIcon/>} href={href} variant="text" target="_blank">
  //     {label}
  //   </Button>
  // );

  return (
      <div>[Download]</div>
  )
};
