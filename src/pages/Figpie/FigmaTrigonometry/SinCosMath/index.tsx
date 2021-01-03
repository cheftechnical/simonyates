import * as React from 'react';

// @ts-ignore
import MathJax from "mathjax3-react";

interface Props {
	formula: string;
}

export default function SinCosMath(props: Props) {
	const {formula} = props;

	return (
		<div>
			<MathJax.Formula
				formula={formula}
			/>
		</div>
	)
}
