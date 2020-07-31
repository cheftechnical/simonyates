import * as React from 'react';
import DefaultLayout from '../../layouts/Default';
import {Container, Grid} from '@material-ui/core';
import ContactForm from './ContactForm';
import SendingMessageDialog from './SendingMessageDialog';
import {Message} from './Message';
import Typography from '../../styling/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../styling/Color';
import MyContainer from '../../styling/MyContainer';
import MyGridContainer from '../../styling/MyGridContainer';

const useStyles = makeStyles((theme) => ({
	heading: {
		marginBottom: theme.spacing(8/8)
	},
	body: {
		marginBottom: theme.spacing(40/8),
		color: color.grey['700']
	}
}));

export default function Contact() {
	const classes = useStyles();

	const [isSending, setIsSending] = React.useState(false);
	const [message, setMessage] = React.useState<Message>();

	const handleSendingDialogClose = React.useCallback(() => {
		setIsSending(false);
	}, []);

	const handleSubmit = React.useCallback((value: Message) => {
		console.log('sending message...', value);
		setIsSending(true);
		setMessage(value);
	}, []);

	return (
		<DefaultLayout title="Contact" top="contact">
			<MyContainer>
				<MyGridContainer>
					<Grid item xs={12}>
						<Typography className={classes.heading} group="primary" variant="h1" weight="regular">
							Pleasure to meet you.
						</Typography>
					</Grid>
				</MyGridContainer>

				<MyGridContainer>
					<Grid item xs={6}>
						<Typography className={classes.body} group="primary" variant="body" weight="regular">
							I&rsquo;m always open to make new connections and chat about software development.
						</Typography>

						<ContactForm onSubmit={handleSubmit}/>

						{isSending && <span>Sending&hellip;</span>}
					</Grid>
				</MyGridContainer>
			</MyContainer>

			<SendingMessageDialog
				isOpen={isSending}
				message={message}
				onClose={handleSendingDialogClose}
			/>
		</DefaultLayout>
	);
};
