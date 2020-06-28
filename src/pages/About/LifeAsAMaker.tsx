import * as React from 'react';
import {Container, Grid} from "@material-ui/core";
import Typography from '../../styling/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(120/8)
    }
}));

export default function LifeAsAMaker() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            {/* spacing=3 == 12px*/}
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography group="primary" variant="h1" weight="regular">
                        Life as a Maker
                    </Typography>
                    <Typography group="primary" variant="body" weight="regular">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu tortor, viverra elementum nibh enim, sed. Mauris egestas magna volutpat, arcu nunc, faucibus. Nulla lacus ultricies cras tincidunt ac at ut. Tristique ornare mattis massa habitasse egestas neque arcu magna placerat. Purus suspendisse mauris neque vel sit felis feugiat adipiscing. Ultricies euismod neque imperdiet enim gravida congue risus.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};
