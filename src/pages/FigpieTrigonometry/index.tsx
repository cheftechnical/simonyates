import * as React from 'react';
import DefaultLayout from '../../layouts/Default';
import Typography from '../../styling/Typography';
import CircleBasicsGridContainer from './CircleBasicsGridContainer';
import MyMathJaxProvider from './MyMathJaxProvider';
import MyContainer from '../../styling/MyContainer';
import BezierArcGridContainer from './BezierArcGridContainer';
import RotationGridContainer from './RotationGridContainer';

export default function FigpieTrigonometry() {
	return (
		<MyMathJaxProvider>
			<DefaultLayout title="How it Works" top="figpie">
				<MyContainer>
					<Typography group="primary" variant="h1" weight="regular">
						Trigonometry
					</Typography>

					<Typography next group="primary" variant="h2" weight="regular">
						Circle Basics
					</Typography>
					<CircleBasicsGridContainer/>

					<Typography next group="primary" variant="h2" weight="regular">
						B&eacute;zier Arc
					</Typography>
					<BezierArcGridContainer/>

					<Typography next group="primary" variant="h2" weight="regular">
						Rotation
					</Typography>
					<RotationGridContainer/>

				</MyContainer>
			</DefaultLayout>
		</MyMathJaxProvider>
	)
}