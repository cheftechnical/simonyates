import * as React from 'react';
import DefaultLayout from '../../layouts/Default/Default';
import Content from './Content';
import MyContainer from '../../styling/MyContainer/MyContainer';

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