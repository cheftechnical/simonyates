import * as React from 'react';
import {ReactElement} from 'react';
import Items from './Items';

interface Props {
	children?: ReactElement | ReactElement[];
}

function getItemCount(items: ReactElement | ReactElement[]) {
	if (!items) {
		return 0;
	} else if (Array.isArray(items)) {
		return items.length;
	} else {
		return 1;
	}
}

function forward(cursor: number, count: number) {
	const previous = cursor;

	const current = getNextIndex(cursor, count);

	const next = getNextIndex(current, count);

	return {
		previous,
		current,
		next
	}
}

function getNextIndex(cursor: number, count: number) {
	return (cursor < (count - 1))
		? cursor + 1
		: 0;
}

function getPreviousIndex(cursor: number, count: number) {
	return (cursor > 0)
		? cursor - 1
		: count - 1;
}

const defaultPosition = {
	previous: 0,
	current: 0,
	next: 0
}

export default function Carousel(props: Props) {
	const {children} = props;

	const [cursor, setCursor] = React.useState(defaultPosition);
	const [initialized, setInitialized] = React.useState(false);

	React.useEffect(() => {
		if (!children) return;

		const itemCount = getItemCount(children);

		if (!initialized) {
			const defaultIndex = 0;

			setCursor({
				previous: getPreviousIndex(defaultIndex, itemCount),
				current: defaultIndex,
				next: getNextIndex(defaultIndex, itemCount)
			});

			setInitialized(true);

			return;
		}

		// Move to the next slide
		const newValue = forward(cursor.current, itemCount);
		console.log('newValue', newValue);

		setTimeout(() => {
			setCursor(newValue);
		}, 3000);

	}, [children, cursor, initialized]);

	// Is the component empty?
	if (!children) {
		return (<React.Fragment/>);
	}

	// Does the component only have 1 item
	if (!Array.isArray(children)) {
		return (<div>{children}</div>);
	}

	// Render the carousel
	return (
		<div>
			<Items previous={cursor.previous} current={cursor.current} next={cursor.next} items={children}/>
			<hr/>
			{children}
		</div>
	);
};

