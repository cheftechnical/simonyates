import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../styling/Color';
import Typography from '../../styling/Typography';

interface Props {
    children?: any | any[] | undefined;
    list?: string[] | undefined;
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
    const {children, list} = props;

    const content = React.useMemo(() => {
        if (!list) return children;

        return list.map((item, index) => (
            <span key={index}>
                {item}{(index < list.length - 1) ? <span> &bull; </span>: ''}
            </span>
        ));

    }, [children, list]);

    return (
        <div className={classes.root}>
            <Typography className={classes.typography} group="secondary" variant="body" weight="regular">
                {content}
            </Typography>
        </div>
    );
};
