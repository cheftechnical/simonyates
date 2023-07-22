import * as React from 'react';
import DefaultLayout from '../../layouts/Default';
import Content from './Content';
import MyContainer from '../../styling/MyContainer';

export default function Home() {
	return (
		<DefaultLayout fullHeight>
			<MyContainer fullHeight>
				{/* <Content/> */}
				hello
			</MyContainer>
		</DefaultLayout>
	);
};
