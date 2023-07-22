import * as React from 'react';
import {Box, Button, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import {Message} from '../Message';
import {makeStyles} from '@material-ui/core/styles';

// https://developers.google.com/recaptcha/docs/display
// v2
const recaptchaSiteKey = '6Ldoc7gZAAAAAK-b8CtvPI9W00OkjyouLoxmdwq1';

interface Props {
	debug?: boolean;
	message: Message | undefined;
	onClose: () => void;
	onSuccess: () => void;
}

const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: 'center'
	},
	box: {
		width: 302
	}
}));

export default function ContentRecaptcha(props: Props) {
	const classes = useStyles();
	const {debug, message, onClose, onSuccess} = props;

	const send = React.useCallback(() => {
		// Serialize the message
		const payload = {
			from: message?.emailAddress,
			name: message?.name,
			subject: message?.subject,
			body: message?.body,
		};

		axios.post('https://5rygt2fs51.execute-api.us-east-1.amazonaws.com/default/simonyates-send-email', payload)
			.then((response) => {
				console.log('response', response);
				if (onSuccess) onSuccess();

			})
			.catch((error) => {
				console.log('error', error);
			})
			.finally(() => {
				// setIsSending(false);
			});
	}, [message, onSuccess]);

	const handleReCaptchaChange = React.useCallback((value) => {
		console.log('value', value);
		send();
	}, [send]);

	const debugButtons = React.useMemo(() => {
		if (!debug) return (<React.Fragment/>);

		return (
			<DialogActions>
				<Button color="primary" onClick={send} variant="contained">
					Test Send
				</Button>
				<Button color="primary" onClick={onClose}>
					Cancel
				</Button>
			</DialogActions>
		);
	}, [debug, onClose, send]);

	return (
		<div>
			<DialogTitle id="sending-message-dialog-title">Are you a human?</DialogTitle>
			<DialogContent>
				<div className={classes.root}>
					<Box display="flex" justifyContent="center">
						<Box className={classes.box} pb={3}>
							<ReCAPTCHA
								onChange={handleReCaptchaChange}
								sitekey={recaptchaSiteKey}
							/>
						</Box>
					</Box>
				</div>
			</DialogContent>
			{debugButtons}
		</div>
	);
};
