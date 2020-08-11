import * as React from 'react';
import MyGridContainer from '../../../styling/MyGridContainer';
import {Box, Grid, Hidden} from '@material-ui/core';
import NavRight from '../../../components/NavRight';
import {SectionItem} from '../../../components/Section/SectionItem';
import MyContainer from '../../../styling/MyContainer';
import {makeStyles} from '@material-ui/core/styles';
import WorkAtEmployer from './WorkAtEmployer';
import WorkAtRole from './WorkAtRole';
import WorkAtWhenWhere from './WorkAtWhenWhere';

interface Props {
	content: React.ReactElement;
	employer: string;
	logo: React.ReactElement;
	sections: SectionItem[];
	role: React.ReactElement | string;
	when: string;
	where: string;
}

const useStyles = makeStyles((theme) => ({
	root: {
		// border: '1px solid lime'
	},
	boxImage: {
		height: '100%'
	},
	role: {
		paddingTop: theme.spacing(28/8),
	}
}));

export default function WorkAtTemplate(props: Props) {
	const classes = useStyles();
	const {content, employer, logo, role, sections, when, where} = props;

	const renderedWorkAtEmployer = React.useMemo(() => {
		return (<WorkAtEmployer employer={employer}/>);
	}, [employer]);

	const renderedWorkAtRole = React.useMemo(() => {
		return (<WorkAtRole>{role}</WorkAtRole>);
	}, [role]);

	const renderedWorkAtWhenWhere = React.useMemo(() => {
		return (<WorkAtWhenWhere when={when} where={where}/>);
	},[when, where]);

	return (
		<MyContainer className={classes.root}>
			<MyGridContainer>
				{/* Avatar */}
				<Grid item sm={1} xs={2}>
					{logo}
				</Grid>

				 {/* xs, sm */}
				<Hidden mdUp>
					<Grid item sm={6} xs={10}>
						<Box alignItems="center" className={classes.boxImage} display="flex">
							<Box>{renderedWorkAtEmployer}</Box>
						</Box>
					</Grid>
					<Grid item sm={12} xs={12}>
						{renderedWorkAtRole}
						{renderedWorkAtWhenWhere}
						{content}
					</Grid>
				</Hidden>

				{/* md, lg, xl */}
				<Hidden smDown>
					{/* Content */}
					<Grid item sm={6} xs={10}>
						<div>
							{renderedWorkAtEmployer}
						</div>
						<div className={classes.role}>
							{renderedWorkAtRole}
						</div>
						{renderedWorkAtWhenWhere}
						{content}
					</Grid>

					{/* Gutter */}
					<Grid item md={2}/>

					{/* Navigation */}
					<Grid item md={3}>
						<NavRight sections={sections}/>
					</Grid>
				</Hidden>
			</MyGridContainer>
		</MyContainer>
	);
};
