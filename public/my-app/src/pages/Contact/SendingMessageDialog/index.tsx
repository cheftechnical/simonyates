import * as React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import {Message} from '../Message';
import axios from 'axios';

interface Props {
	isOpen: boolean;
	message?: Message;
	onClose: () => void;
}

export default function SendingMessageDialog(props: Props) {

	const {isOpen, message, onClose} = props;

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
			})
			.catch((error) => {
				console.log('error', error);
			})
			.finally(() => {
				// setIsSending(false);
			});
	}, [message]);

	const handleReCaptchaChange = React.useCallback((value) => {
		console.log('value', value);
		send();

	}, [send]);

	return (
		<Dialog aria-labelledby="sending-message-dialog-title" onClose={onClose} open={isOpen} >
			<DialogTitle id="sending-message-dialog-title">Are you a human?</DialogTitle>
			<DialogContent>
				<ReCAPTCHA
					onChange={handleReCaptchaChange}
					sitekey="6LfQSKcZAAAAAJCXPWH7aGFHCbUFrapdklKV9JQc"
				/>
			</DialogContent>
			<DialogActions>
				<Button color="primary" onClick={send}>
					Test Send
				</Button>
				<Button color="primary" onClick={onClose}>
					Cancel
				</Button>
			</DialogActions>
		</Dialog>
	)
};
