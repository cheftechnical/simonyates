import * as React from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import {Message} from '../Message';
import {makeStyles} from '@material-ui/core/styles';
import rem from '../../../styling/rem';
import {color} from '../../../styling/Color';

interface Props {
	message: Message | undefined;
	onClose: () => void;
	onSuccess: () => void;
}

const useStyles = makeStyles((theme) => ({
	root: {
		// padding: rem(40),
		textAlign: 'center'
	},
	box: {
		width: 302
	}
}));

export default function RecaptchaFragment(props: Props) {
	const classes = useStyles();
	const {message, onClose, onSuccess} = props;

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

	return (
		<div>
			<DialogTitle id="sending-message-dialog-title">Are you a human?</DialogTitle>
			<DialogContent>
				<div className={classes.root}>
					<Box display="flex" justifyContent="center">
						<Box className={classes.box}>
							<ReCAPTCHA
								onChange={handleReCaptchaChange}
								sitekey="6LfQSKcZAAAAAJCXPWH7aGFHCbUFrapdklKV9JQc"
							/>
						</Box>
					</Box>
				</div>
			</DialogContent>
			<DialogActions>
				<Button color="primary" onClick={send} variant="contained">
					Test Send
				</Button>
				<Button color="primary" onClick={onClose}>
					Cancel
				</Button>
			</DialogActions>
		</div>
	);
};
