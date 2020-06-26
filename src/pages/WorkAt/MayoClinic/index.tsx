import * as React from 'react';
import {SectionItem} from '../../../components/Section/SectionItem';
import DefaultLayout from '../../../layouts/Default';
import {Container, Grid} from '@material-ui/core';
import WorkAtHeader from '../../../components/workAt/WorkAtHeader';
import WorkAtDescription from '../../../components/workAt/WorkAtDescription';
import Sections from '../../../components/Sections';
import Section from '../../../components/Section';
import NavRight from '../../../components/NavRight';

export default function MayoClinic() {
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	return (
		<DefaultLayout title="Work at Mayo Clinic" top="work">
			<Container>
				<Grid container>
					<Grid item xs={1}>[logo]</Grid>
					<Grid item xs={6}>
						<WorkAtHeader
							employer="Mayo Clinic"
							role="Software Engineer"
							when="October 2014 to October 15"
							where="Rochester, MN, USA"
						/>
						<WorkAtDescription>
							Mayo Clinic is an American nonprofit academic medical center based in Rochester, MN, focused on
							integrated patient care, education and research. It employs over 4,500 physicians and
							scientists, along with another 58,400 administrative and allied health staff.
						</WorkAtDescription>
						<Sections onChange={handleChange}>
							<Section id="highlights" name="Highlights">
								<ul>
									<li>Elasticsearch, Elastic Marvel, MongoDB, node.js, socket.io, Express framework, hapi.js, RabbitMQ River, Highcharts, D3, MapReduce, YAML</li>
								</ul>
							</Section>
							<Section id="ease" name="EASE">
								asdf
							</Section>
						</Sections>
					</Grid>
					<Grid item xs={2}>
						<NavRight sections={sections}/>
					</Grid>
				</Grid>
			</Container>
		</DefaultLayout>
	)
}