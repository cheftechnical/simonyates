import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';

interface Props {
    children?: any | any[];
    id?: string;
    name: string;
}

const useStyles = makeStyles((theme) => ({
    jumpTarget: {
        content: '',
        display: 'block',
        height: '106px', /* fixed header height*/
        margin: '-106px 0 0', /* negative fixed header height */
    }
}));

export default function Section(props: Props) {
    const classes = useStyles();
    const {children, id} = props;

    return (
        <div>
            <div className={classes.jumpTarget} id={id}/>
            <section>
                {children}
            </section>
        </div>
    );
};
