import * as React from 'react';
import {Container, Grid} from "@material-ui/core";
import Typography from '../../styling/Typography';

export default function LifeAsAMaker() {
    return (
        <Container>
            <Grid container>
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
