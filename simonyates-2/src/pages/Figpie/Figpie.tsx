import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout';
import MyContainer from '../../styling/MyContainer/MyContainer';
import Ul from '../../styling/ListsUnordered/Ul/Ul';
import Li from '../../styling/ListsUnordered/Li/Li';
import {Link, Typography} from "@mui/material";

export default function Figpie() {
	return (
		// <DefaultLayout title="Figpie" top="figpie">
			<MyContainer>
				<Typography component="h1" variant="primaryH1">
					Figpie
				</Typography>
				<Typography component="p" variant="primaryH3Next">
					<strong>Figpie</strong> creates beautiful pie charts in Figma.
				</Typography>
				<Typography component="p" variant="primaryBodyNext">
					Creating pie charts in Figma is hard. Working with vectors can be challenging, and creating a chart that lines up correctly is more tricky than it sounds!
				</Typography>
				<Typography component="p" variant="primaryBodyNext">
					I created Figpie to be as simple and intuitive as possible. It is a tool for designers.
				</Typography>
				<Typography component="p" variant="primaryBodyNext">
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
				<Typography component="p" variant="primaryBodyNext">
					And it&rsquo;s 100% free!
				</Typography>

				<Typography component="h2" variant="primaryH2Next">
					Support
				</Typography>
				<Typography component="p" variant="primaryBodyNext">
					Found a bug or have a feature request?
					Message me on Twitter <Link href="https://twitter.com/cheftechnical" rel="external" target="_blank">
					@ChefTechnical</Link>
				</Typography>
			</MyContainer>
		// </DefaultLayout>
	)
}