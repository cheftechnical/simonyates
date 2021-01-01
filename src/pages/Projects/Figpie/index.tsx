import * as React from 'react';
import DefaultLayout from '../../../layouts/Default';
import MyContainer from '../../../styling/MyContainer';
import Typography from '../../../styling/Typography';
import Ul from '../../../styling/ListsUnordered/Ul/intex';
import Li from '../../../styling/ListsUnordered/Li/intex';
import {Link} from '@material-ui/core';

export default function Figpie() {
	return (
		<DefaultLayout title="Figpie" top="figpie">
			<MyContainer>
				<Typography group="primary" variant="h1" weight="regular">
					Figpie
				</Typography>
				<Typography next group="primary" variant="h3" weight="regular">
					<strong>Figpie</strong> creates beautiful pie charts in Figma.
				</Typography>
				<Typography next group="primary" variant="body" weight="regular">
					Creating pie charts in Figma is hard. Working with vectors can be challenging, and creating a chart that lines up correctly is more tricky than it sounds!
				</Typography>
				<Typography next group="primary" variant="body" weight="regular">
					I created Figpie to be as simple and intuitive as possible. It is a tool for designers.
				</Typography>
				<Typography next group="primary" variant="body" weight="regular">
					Key Features:
				</Typography>
				<Ul next>
					<Li>
						Creates a pie chart from your data
					</Li>
					<Li>
						Vectors are clean and easy to work with
					</Li>
					<Li>
						A real-time preview lets you see your pie chart before it is created in Figma
					</Li>
					<Li>
						Includes 4 built-in <em>fig</em> themed color palettes :-)
					</Li>
					<Li>
						Complete freedom to modify the pie cart after it's created &mdash; they&rsquo;re just vectors
						after all
					</Li>
				</Ul>
				<Typography next group="primary" variant="body" weight="regular">
					And it's 100% free!
				</Typography>

				<Typography next group="primary" variant="h2" weight="regular">
					Support
				</Typography>
				<Typography next group="primary" variant="body" weight="regular">
					Found a bug or have a feature request?
					Message me on Twitter <Link href="https://twitter.com/cheftechnical" rel="external" target="_blank">
					@ChefTechnical</Link>
				</Typography>
			</MyContainer>
		</DefaultLayout>
	)
}