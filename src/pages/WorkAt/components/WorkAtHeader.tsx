import * as React from 'react';
import Typography from '../../../styling/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../../styling/Color';

interface Props {
    employer: string;
    role: string;
    when: string;
    where: string;
}

const useStyles = makeStyles((theme) => ({
    employer: {
        marginBottom: theme.spacing(28/8),
        color: color.grey['600']
    },
    role: {
        marginBottom: theme.spacing(8/8),
    },
    whenWhere: {
        marginBottom: theme.spacing(32/8),
        color: color.grey['600']
    },
}));

export default function WorkAtHeader(props: Props) {
    const classes = useStyles();
    const {when, where} = props;

    return (
        <div>
            <Typography className={classes.whenWhere} group="primary" variant="body" weight="regular">{when} &bull; {where}</Typography>
        </div>
    );
};
