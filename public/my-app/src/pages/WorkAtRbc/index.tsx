import * as React from 'react';
import DefaultLayout from "../../layouts/Default";
import WorkAtHeader from "../../components/workAt/WorkAtHeader";
import WorkAtDescription from "../../components/workAt/WorkAtDescription";
import {Box, Grid} from "@material-ui/core";
import Scrollspy from 'react-scrollspy';
import Section from "../../components/Section";
import NavRight from "../../components/NavRight";
import NavRightItem from "../../components/NavRightItem";
import {makeStyles} from "@material-ui/core/styles";
import Callout from "../../components/Callout";
import WorkAtProject from "../../components/workAt/WorkAtProject";

const useStyles = makeStyles((theme) => ({
    isCurrent: {
        color: 'lime',
        backgroundColor: 'cyan'
    }
}));

export default function WorkAtRbc() {
    const classes = useStyles();

    return (
        <DefaultLayout selectedNavTop="work">
            <Grid container>
                <Grid item xs={1}>[logo]</Grid>
                <Grid item xs={6}>
                    <WorkAtHeader
                        employer="RBC"
                        role="Full-Stack Developer, API Site Reliability Engineering"
                        when="July 2018 to Present"
                        where="Toronto, Canada"
                    />
                    <WorkAtDescription>
                        The Royal Bank of Canada (RBC) is the largest bank in Canada by asset value, with over 80,000
                        employees
                        worldwide.
                    </WorkAtDescription>
                    <Section id="section-2" name="Application Development & Custom Tooling">
                        <WorkAtProject name="SRE Global Dashboard" when="2019–Present"/>
                        <Callout>
                            Node.js + Express &bull;
                            React + Typescript &bull;
                            Elasticsearch &bull;
                            PostgreSQL &bull;
                        </Callout>
                    </Section>
                    <Section id="section-3" name="Machine Learning / Artificial Intelligence"/>
                    <Section id="section-4" name="Budgeting"/>
                    <Section id="section-5" name="Events"/>
                    <Section id="section-6" name="Publications"/>
                    <Section id="section-7" name="Active Research"/>
                    <Section id="section-8" name="Other Activities"/>
                </Grid>
                <Grid item xs={2}>
                    <Box mt={100}>
                        <Scrollspy
                            items={['section-2', 'section-3', 'section-4', 'section-5', 'section-6', 'section-7', 'section-8']}
                            currentClassName={classes.isCurrent}
                        >
                            {/*<NavRight>*/}
                            {/*    <NavRightItem id="section-1" name="Intro"/>*/}
                                <NavRightItem id="section-2" name="Application Development & Custom Tooling"/>
                                <NavRightItem id="section-3" name="Machine Learning / Artificial Intelligence"/>
                                <NavRightItem id="section-4" name="Budgeting"/>
                                <NavRightItem id="section-5" name="Events"/>
                                <NavRightItem id="section-6" name="Publications"/>
                                <NavRightItem id="section-7" name="Active Research"/>
                                <NavRightItem id="section-8" name="Other Activities"/>
                            {/*</NavRight>*/}
                        </Scrollspy>
                    </Box>
                </Grid>
            </Grid>
        </DefaultLayout>
    );
};
