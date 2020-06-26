import * as React from 'react';
import {Container, Grid} from '@material-ui/core';
import Typography from '../../styling/Typography';

export default function CookingArduinoAndPhotography() {
    return (
        <Container>
            <Grid container>
                <Grid item xs={6}>
                    <Typography group="primary" variant="h3" weight="medium">
                        Cooking, Ardureno, Photography
                    </Typography>
                    <Typography group="primary" variant="body" weight="regular">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue vitae neque arcu nunc. Facilisi pulvinar aliquet urna, convallis varius quam sed vitae. Fermentum urna enim sem donec in. Senectus vitae consectetur porttitor pharetra, iaculis nunc, diam id. Sit massa nullam faucibus viverra. Et at arcu, senectus id nulla vulputate lectus. Dictum in felis lacus, a, proin potenti at scelerisque.
                        There was also an in-between era, the era of everything and anything goes.  Ultricies tincidunt volutpat consequat purus. Dignissim at morbi odio id.  Sit massa nullam faucibus viverra.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    [image placeholder]
                </Grid>
            </Grid>
        </Container>
    );
};
