import * as React from 'react';
import MyGridContainer from '../../../styling/MyGridContainer';
import {Box, Grid, Hidden} from '@material-ui/core';
import NavRight from '../../../components/NavRight';
import {SectionItem} from '../../../components/Section/SectionItem';
import MyContainer from '../../../styling/MyContainer';
import {makeStyles} from '@material-ui/core/styles';

interface Props {
	content: React.ReactElement;
	employer: React.ReactElement;
	logo: React.ReactElement;
	sections: SectionItem[];
	role: React.ReactElement;
	whenWhere: React.ReactElement;
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
	const {content, employer, logo, role, sections, whenWhere} = props;

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
							<Box>{employer}</Box>
						</Box>
					</Grid>
					<Grid item sm={12} xs={12}>
						{role}
						{whenWhere}
						{content}
					</Grid>
				</Hidden>

				{/* md, lg, xl */}
				<Hidden smDown>
					{/* Content */}
					<Grid item sm={6} xs={10}>
						<div>
							{employer}
						</div>
						<div className={classes.role}>
							{role}
						</div>
						{whenWhere}
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
