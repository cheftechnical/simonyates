import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../../styling/Color';
import Typography from '../../../styling/Typography';
import rem from '../../../styling/rem';

interface Props {
    caption: string;
    value: number;
}

const useStyles = makeStyles((theme) => ({
    value: {
        marginTop: theme.spacing(28/8),
        marginBottom: 0,
        fontSize: rem(64),
        lineHeight: '162%',
        textAlign: 'center',
        color: color.grey['600']
    },
    caption: {
        marginTop: 0,
        marginBottom: theme.spacing(28/8),
        textAlign: 'center'
    }
}));

export default function StatsItem(props: Props) {
    const classes = useStyles();
    const {caption, value} = props;

    return (
        <div>
            <Typography className={classes.value} group="primary" variant="h2" weight="regular">{value}</Typography>
            <Typography className={classes.caption} group="primary" variant="body" weight="regular">{caption}</Typography>
        </div>
    );
};
