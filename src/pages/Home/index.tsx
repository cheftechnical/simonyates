import * as React from 'react';
import DefaultLayout from '../../layouts/Default';
import {Container, createStyles, Fade, FormControlLabel, Paper, Switch, Theme} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import HomeContent from './HomeContent';
import WorkContent from '../Work/WorkContent';
import {Transition} from 'react-transition-group';
import {useEffect, useRef} from 'react';
import VisibilitySensor from "react-visibility-sensor";
import ScrollableAnchor, {goToAnchor} from 'react-scrollable-anchor';

const useStyles = makeStyles((theme: Theme) => ({
	typography: {
		// marginTop: theme.spacing(248 / 8),
		// marginBottom: theme.spacing(416 / 8)
	},
	viewport: {
		height: '2000px',
		// height: '100%',
		// backgroundColor: 'magenta'
		// background: 'cyan'
	},
	home: {
		// position: 'absolute',
		// top: 0,
	}
}));

const duration = 300;
const threshold = 250;

const defaultHomeStyle = {
	transition: `opacity ${duration}ms ease, top ${duration}ms ease, height ${duration}ms ease`,
	opacity: 0,
	// position: 'absolute',
};

const defaultWorkStyle = {
	transition: `opacity ${duration}ms ease, padding-top ${duration}ms ease`,
	opacity: 0,
};

type TransitionStatus = 'entering' | 'entered' | 'exiting' | 'exited';

/**
 * WorkContent starts visible, and transitions into a hidden state.
 *
 * i.e. from `exiting` to `exited` when `props.in` changes from `false` to `true`
 */
const transitionStylesHome = {
	entering: {opacity: 1},
	entered: {
		opacity: 1,
		paddingTop: '100px',
	},
	exiting: {
		opacity: 0.5,
		color: 'magenta',
		// top: '0px',
		// height: '100%',
	},
	exited: {
		opacity: 0.5,
		// display: 'none',
		color: 'lime',
		// top: '-100px',
		// height: '0%',
	},
};


/**
 * WorkContent starts hidden, and transitions into a visible state.
 *
 * i.e. from `entering` to `entered` when `props.in` changes from `false` to `true`
 *
 */
const transitionStylesWork = {
	entering: {
		// opacity: 0,
		// display: 'none',
		opacity: 0,
		display: 'block',
		color: 'blue',
		paddingTop: '200px',
	},
	entered: {
		opacity: 1,
		display: 'block',
		color: 'green',
		paddingTop: '10px',
	},
	// exiting: {opacity: 0},
	exiting: {
		color: 'orange'
	},
	exited: {
		opacity: 0,
		display: 'none',
		color: 'red'
	},
};


export function HomeOld() {
	const classes = useStyles();

	const [animate, setAnimate] = React.useState(false);

	React.useEffect(() => {
		// if (animate) return;

		const onScroll = (e: any) => {
			const scrollTop = e.target.documentElement.scrollTop;
			console.log('scrollTop', scrollTop);

			if (scrollTop > threshold) {
				// e.target.documentElement.scrollTop = 1074;
				// e.target.documentElement.scrollTo = 1074;
				// scrollTo(0,1074)

				console.log('Making visible...');
				setAnimate(true);
			}

		}

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, [animate])

	return (
		<div className={classes.viewport}>
			<DefaultLayout>
				<Container>
					<div>
						<div>
							<Transition in={!animate} timeout={duration}>
								{(state: TransitionStatus) => (
									<div className={classes.home} style={{
										...defaultHomeStyle,
										...transitionStylesHome[state]
									}}>
										<HomeContent/>
									</div>
								)}
							</Transition>
						</div>
						<div>
							<Transition in={animate} timeout={duration}>
								{(state: TransitionStatus) => (
									<div style={{
										...defaultWorkStyle,
										...transitionStylesWork[state]
									}}>
										<WorkContent/>
									</div>
								)}
							</Transition>
						</div>
					</div>
				</Container>
			</DefaultLayout>
		</div>
	);
};


const useMountEffect = (fun: any) => useEffect(fun, []);

export default function Home() {
	const myRef = useRef(null);
	// // const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);
	//
	// const scrollToRef = React.useCallback((ref: any) => {
	// 	if (!ref.current) return;
	// 	window.scrollTo(0, ref.current.offsetTop);
	// }, [])

	// Scroll on mount
	// useMountEffect(() => scrollToRef(myRef))

	// React.useEffect(() => {
	// 	// const onScroll = (e: any) => {
	// 	// 	const scrollTop = e.target.documentElement.scrollTop;
	// 	// 	// console.log('scrollTop', scrollTop);
	// 	//
	// 	// 	if (scrollTop > threshold) {
	// 	// 		// console.log('Skipping to next section...');
	// 	// 		scrollToRef(myRef);
	// 	// 	}
	// 	// };react-visibility-sensor
	// 	//
	// 	// window.addEventListener('scroll', onScroll);
	// 	//
	// 	// return () => window.removeEventListener('scroll', onScroll);
	//
	// 	setTimeout(() => {
	// 		scrollToRef(myRef);
	// 	}, 5000);
	// }, []);

	// const [finished, setFinished] = React.useState(false);
	// const [workWasVisible, setWorkWasVisible] = React.useState(false);

	// const onSnapVisible = React.useCallback((isVisible: boolean) => {
	// 	console.log('trigger', {isVisible, workWasVisible});
	//
	// 	if (isVisible && !workWasVisible) {
	// 		console.log('navigating');
	// 		setWorkWasVisible(true);
	// 		goToAnchor('section1')
	// 	}
	//
	//
	// 	//
	// 	//
	// 	// if (isVisible) {
	// 	// 	console.log('triggered. scrolling...');
	// 	// 	setFinished(true);
	// 	// 	// scrollToRef(myRef);
	// 	// 	// window.scrollTo(0, myRef.current.offsetTop);
	// 	// } else {
	// 	// 	// Reset the trigger
	// 	// 	console.log('Resetting the trigger');
	// 	// 	setWorkWasVisible(false);
	// 	// }
	//
	// }, [finished, workWasVisible]);

	// const onWorkVisibilityChange = React.useCallback((isVisible: boolean) => {
	// 	console.log('onWorkVisibilityChange', isVisible);
	// 	setWorkWasVisible(isVisible);
	//
	// 	if (isVisible) {
	// 		console.log('finished scrolling');
	// 		setFinished(true);
	// 	}
	// }, []);

	const onWorkVisibilityChange = React.useCallback((isVisible: boolean) => {
		console.log('workVisibility', isVisible);
	}, []);

	return (
		<div style={{height: '100%', backgroundColor: 'magenta'}}>
			<DefaultLayout>
				<Container>
					<div style={{height: '100%', backgroundColor: 'red'}}>
						<HomeContent/>
					</div>
					{/*<div style={{height: 100, backgroundColor: 'blue'}}>*/}
					{/*	<VisibilitySensor onChange={onSnapVisible}>*/}
					{/*		/!*<button onClick={() => scrollToRef(myRef)}>Next</button>*!/*/}
					{/*		<div>*/}
					{/*			here*/}
					{/*		</div>*/}
					{/*	</VisibilitySensor>*/}
					{/*</div>*/}
					<div style={{height: '100%', backgroundColor: 'green'}} ref={myRef}>
						<VisibilitySensor onChange={onWorkVisibilityChange}>
							<ScrollableAnchor id={'section1'}>
								<WorkContent/>
							</ScrollableAnchor>
						</VisibilitySensor>
					</div>

				</Container>
			</DefaultLayout>
		</div>
	)
}