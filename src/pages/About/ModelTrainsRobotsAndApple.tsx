import * as React from 'react';
import {Container, Grid} from '@material-ui/core';
import Typography from '../../styling/Typography';
import {makeStyles} from '@material-ui/core/styles';
import rem from '../../styling/rem';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: rem(180)
    },
    heading: {
        paddingBottom: rem(16)
    },
    body: {

    }
}));

export default function ModelTrainsRobotsAndApple() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            {/* spacing=3 == 12px*/}
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    [image placeholder]
                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.heading} group="primary" variant="h3" weight="medium">
                        Model trains, Robots, Apple 1995
                    </Typography>
                    <Typography className={classes.body} group="primary" variant="body" weight="regular">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue vitae neque arcu nunc. Facilisi pulvinar aliquet urna, convallis varius quam sed vitae. Fermentum urna enim sem donec in. Senectus vitae consectetur porttitor pharetra, iaculis nunc, diam id. Sit massa nullam faucibus viverra. Et at arcu, senectus id nulla vulputate lectus. Dictum in felis lacus, a, proin potenti at scelerisque. Ultricies tincidunt volutpat consequat purus. Dignissim at morbi odio id.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};
