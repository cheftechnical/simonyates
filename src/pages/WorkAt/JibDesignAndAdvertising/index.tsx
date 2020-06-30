import * as React from 'react';
import DefaultLayout from '../../../layouts/Default';
import {Container, Grid} from '@material-ui/core';
import Logo from '../../../components/Logo';
import {SectionItem} from '../../../components/Section/SectionItem';
import NavRight from '../../../components/NavRight';

export default function JibDesignAndAdvertising() {
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	return (
		<DefaultLayout title="Work at Jib Design &amp; Advertising" top="work">
			<Container>
				<Grid container spacing={4}>
					<Grid item xs={1}>
						<Logo brand="jib-design-and-advertising" variant="default"/>
					</Grid>
					<Grid item xs={6}>[jib placeholder]</Grid>
					<Grid item xs={2}/>
					<Grid item xs={3}>
						<NavRight sections={sections}/>
					</Grid>
				</Grid>
			</Container>
		</DefaultLayout>
	);
};
