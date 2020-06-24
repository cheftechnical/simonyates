import * as React from 'react';
import DefaultLayout from '../../layouts/Default';
import Experience from './Experience';
import Highlight from './Highlight';
import Typography from '../../styling/Typography';
import {Container} from '@material-ui/core';

export default function Work() {
    return (
        <DefaultLayout title="Work" top="work">
            <Container>
                <Typography group="primary" variant="h2" weight="regular">
                    Here is a glimpse of my life,<br/>
                    mostly as a programmer.
                </Typography>

                <Experience employer="RBC" href="/work/rbc" title="Full-Stack Developer" when="2018–Present">
                    <Highlight>A something something</Highlight>
                    <Highlight>lorem ipsum</Highlight>
                </Experience>

                <Experience employer="Uncharted Software" href="/work/uncharted-software" title="Senior Software Architect" when="2015–2018">
                    <Highlight>bla</Highlight>
                    <Highlight>bla bla</Highlight>
                </Experience>

                <Experience employer="Mayo Clinic" href="/work/mayo-clinic" title="Software Engineer" when="2014–2015">
                    <Highlight>something</Highlight>
                </Experience>

                <Experience employer="Genworth Canada" href="/work/genworth-canada" title="Developer" when="2014–2015">
                    <Highlight>asdfadf</Highlight>
                </Experience>

                <Experience employer="Infomart" href="/work/infomart" title="Architect & Lead Developer" when="2012–2014">
                    <Highlight>asdf</Highlight>
                </Experience>

                <Experience employer="Jib Design & Advertising" href="/work/jib-design-and-advertising" title="Technical Director" when="2007–2008">
                    <Highlight>asdf</Highlight>
                </Experience>
            </Container>
        </DefaultLayout>
    );
}
