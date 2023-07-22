import {useEffect} from 'react';
import { withRouter } from 'react-router-dom';

/**
 * This will force the browser to scroll to the top of each new page load
 * @source https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
 *
 * @param history
 * @constructor
 */

// @ts-ignore
function ScrollToTop({ history }) {
	useEffect(() => {
		const unlisten = history.listen(() => {
			window.scrollTo(0, 0);
		});
		return () => {
			unlisten();
		}
	}, [history]);

	return null;
}

export default withRouter(ScrollToTop)