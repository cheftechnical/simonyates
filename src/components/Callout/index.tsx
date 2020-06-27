import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../styling/Color';
import Typography from '../../styling/Typography';

interface Props {
    children: any | any[];
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(24/8),
        marginBottom: theme.spacing(24/8),
        padding: theme.spacing(8/8),
        backgroundColor: color.limeWithOpacity['500']['10%'],
        textAlign: 'center'
    },
    typography: {
        color: color.grey['700'],
    }
}));

export default function Callout(props: Props) {
    const classes = useStyles();
    const {children} = props;

    return (
        <div className={classes.root}>
            <Typography className={classes.typography} group="secondary" variant="body" weight="regular">
                {children}
            </Typography>
        </div>
    );
};
