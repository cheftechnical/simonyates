// import * as React from 'react';
// import {Box, Button, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import ReCAPTCHA from 'react-google-recaptcha';
// import axios from 'axios';
import {MessageFormValues} from '../MessageFormValues';
import {Box, Button, DialogActions, DialogContent, DialogTitle, makeStyles, styled} from "@mui/material";
import {useCallback, useMemo} from "react";
import axios from "axios";
// import {makeStyles} from '@material-ui/core/styles';

// https://developers.google.com/recaptcha/docs/display
// v2
const recaptchaSiteKey = '6Ldoc7gZAAAAAK-b8CtvPI9W00OkjyouLoxmdwq1';

interface Props {
	debug?: boolean;
	message: MessageFormValues | undefined;
	onClose: () => void;
	onSuccess: () => void;
}

// @todo mui5
// const useStyles = makeStyles((themeMui) => ({
// 	root: {
// 		textAlign: 'center'
// 	},
// 	box: {
// 		width: 302
// 	}
// }));

const StyledBox = styled(Box)(({theme}) => ({
	width: 302
}));

const StyledDivRoot = styled('div')(({theme}) => ({
	textAlign: 'center'
}));


export default function ContentRecaptcha(props: Props) {
	// const classes = useStyles();
	const {debug, message, onClose, onSuccess} = props;

	const send = useCallback(() => {
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

	const handleReCaptchaChange = useCallback((value: any) => {
		console.log('value', value);
		send();
	}, [send]);

	const debugButtons = useMemo(() => {
		if (!debug) return (<></>);

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
				<StyledDivRoot>
					<Box display="flex" justifyContent="center">
						<StyledBox pb={3}>
							<ReCAPTCHA
								onChange={handleReCaptchaChange}
								sitekey={recaptchaSiteKey}
							/>
						</StyledBox>
					</Box>
				</StyledDivRoot>
			</DialogContent>
			{debugButtons}
		</div>
	);
};
