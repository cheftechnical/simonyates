import * as React from 'react';
import DefaultLayout from '../../../layouts/Default';
import {Container, Grid} from '@material-ui/core';
import {SectionItem} from '../../../components/Section/SectionItem';
import Logo from '../../../components/Logo';
import NavRight from '../../../components/NavRight';

export default function GenworthCanada() {
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	return (
		<DefaultLayout title="Work at Genworth Canada" top="work">
			<Container>
				<Grid container spacing={4}>
					<Grid item xs={1}>
						<Logo brand="genworth-canada" variant="default"/>
					</Grid>
					<Grid item xs={6}>[genworth placeholder]</Grid>
					<Grid item xs={2}/>
					<Grid item xs={3}>
						<NavRight sections={sections}/>
					</Grid>
				</Grid>
			</Container>
		</DefaultLayout>
	)
}