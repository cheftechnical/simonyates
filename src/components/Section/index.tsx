import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '../../styling/Typography';

interface Props {
    children?: any | any[];
    id?: string;
    name: string;
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(80/8)
    },
}));

export default function Section(props: Props) {
    const classes = useStyles();
    const {children, id, name} = props;

    return (
        <section className={classes.root} id={id}>
            <Typography group="primary" variant="h3" weight="regular">{name}</Typography>
            {children}
        </section>
    );
};
