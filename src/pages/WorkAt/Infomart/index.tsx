import * as React from 'react';
import DefaultLayout from '../../../layouts/Default';
import {Container, Grid} from '@material-ui/core';
import Logo from '../../../components/Logo';
import NavRight from '../../../components/NavRight';
import {SectionItem} from '../../../components/Section/SectionItem';

export default function Infomart() {
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	return (
		<DefaultLayout title="Work at Infomart" top="work">
			<Container>
				<Grid container spacing={4}>
					<Grid item xs={1}>
						<Logo brand="infomart" variant="default"/>
					</Grid>
					<Grid item xs={6}>[infomart placeholder]</Grid>
					<Grid item xs={2}/>
					<Grid item xs={3}>
						<NavRight sections={sections}/>
					</Grid>
				</Grid>
			</Container>
		</DefaultLayout>
	);
};
