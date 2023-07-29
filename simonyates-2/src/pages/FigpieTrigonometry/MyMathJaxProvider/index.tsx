import * as React from 'react';

// @ts-ignore
import MathJax from "mathjax3-react";

interface Props {
	children: any;
}

export default function MyMathJaxProvider(props: Props) {
	const {children} = props;

	// return (
	// 	<MathJax.Provider
	// 		options={{
	// 			loader: {
	// 				load: [
	// 					'[tex]/color',
	// 				]
	// 			},
	// 			tex: {
	// 				packages: {
	// 					'[+]': ['color']
	// 				},
	// 			},
	// 		}}
	// 	>
	// 		{children}
	// 	</MathJax.Provider>
	// )

	return (
		<MathJax.Provider>
			<MathJax.Formula formula="$$\int x^2dx$$" />
		</MathJax.Provider>
	)
}