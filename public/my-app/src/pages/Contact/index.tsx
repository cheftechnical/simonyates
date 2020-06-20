import * as React from 'react';
import DefaultLayout from '../../layouts/Default';
import {Grid} from '@material-ui/core';
import ContactForm from './ContactForm';
import SendingMessageDialog from './SendingMessageDialog';
import {Message} from './Message';

export default function Contact() {

	const [isSending, setIsSending] = React.useState();
	const [message, setMessage] = React.useState<Message>();

	const handleSubmit = React.useCallback((value: Message) => {
		console.log('sending message...', value);
		setIsSending(true);
		setMessage(value);
	}, []);

	return (
		<DefaultLayout top="contact">
			<Grid container>
				<Grid item xs={6}>
					<h1>Pleasure to meet you.</h1>
					<p>I&rsquo;m always open to make new connections and chat about software development.</p>
					<ContactForm onSubmit={handleSubmit}/>

					{isSending && <span>Sending&hellip;</span>}
				</Grid>
			</Grid>

			<SendingMessageDialog isOpen={isSending} message={message}/>
		</DefaultLayout>
	);
};
