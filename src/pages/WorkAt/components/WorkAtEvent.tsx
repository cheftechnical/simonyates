import Typography from '../../../styling/Typography';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {ReactNode} from 'react';
import classNames from 'classnames';

interface Props {
  /**
   * Date of the event
   */
  date: string;
  /**
   * If `true`, additional padding will be applied to the top of the component
   */
  next?: boolean;
  /**
   * Title of the event
   */
  title: ReactNode | string;
}

const useStyles = makeStyles((theme: Theme) => ({
  next: {
    paddingTop: theme.spacing(2),
  }
}));

export default function WorkAtEvent(props: Props) {
  const classes = useStyles();
  const {date, next, title} = props;

  // const className = (next)
  // 	? `${classes.root} ${classes.next}`
  // 	: classes.root;

  const className = classNames({
    [classes.next]: next,
  });

  return (
    <div className={className}>
      <Typography group="primary" variant="body" weight="regular">
        {date} &bull; {title}
      </Typography>
    </div>
  );
};
