import * as React from 'react';
import DefaultLayout from '../../layouts/Default';
import {Grid} from '@material-ui/core';
import ContactForm from './ContactForm';

export default function Contact() {

	const handleSubmit = React.useCallback((message) => {
		console.log('sending message...', message);
	}, []);

	return (
		<DefaultLayout top="contact">
			<Grid container>
				<Grid item xs={6}>
					<h1>Pleasure to meet you.</h1>
					<p>I&rsquo;m always open to make new connections and chat about software development.</p>
					<ContactForm onSubmit={handleSubmit}/>
				</Grid>
			</Grid>
		</DefaultLayout>
	);
};
