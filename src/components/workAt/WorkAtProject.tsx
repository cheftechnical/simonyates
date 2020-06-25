import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '../../styling/Typography';
import {color} from '../../styling/Color';

interface Props {
    children?: any | any[];
    name: string;
    when: string;
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(56/8)
    },
    nameAndWhen: {
        color: color.grey['600']
    }
}));

export default function WorkAtProject(props: Props) {
    const classes = useStyles();
    const {children, name, when} = props;

    return (
        <div className={classes.root}>
            <Typography className={classes.nameAndWhen} group="primary" variant="h4" weight="semibold">{name}, {when}</Typography>
            <div>{children}</div>
        </div>
    );
};
