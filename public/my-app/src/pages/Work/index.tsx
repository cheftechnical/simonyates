import * as React from 'react';
import DefaultLayout from '../../layouts/Default';
import Experience from './Experience';
import Highlight from './Highlight';

export default function Work() {
    return (
        <DefaultLayout top="work">
            Here is a glimpse of my life,<br/>
            mostly as a programmer.

            <Experience employer="RBC" title="Full-Stack Developer" when="2018–Present">
                <Highlight>A something something</Highlight>
                <Highlight>lorem ipsum</Highlight>
            </Experience>

            <Experience employer="Uncharted Software" title="Senior Software Architect" when="2015–2018">
                <Highlight>bla</Highlight>
                <Highlight>bla bla</Highlight>
            </Experience>

            <Experience employer="Mayo Clinic" title="Software Engineer" when="2014–2015">
                <Highlight>something</Highlight>
            </Experience>

            <Experience employer="Genworth Canada" title="Developer" when="2014–2015">
                <Highlight>asdfadf</Highlight>
            </Experience>

            <Experience employer="Infomart" title="Architect & Lead Developer" when="2012–2014">
                <Highlight>asdf</Highlight>
            </Experience>
            
            <Experience employer="Jib Design & Advertising" title="Technical Director" when="2007–2008">
                <Highlight>asdf</Highlight>
            </Experience>
        </DefaultLayout>
    );
}
