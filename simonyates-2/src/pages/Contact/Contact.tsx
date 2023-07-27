// import {Grid} from '@material-ui/core';
// import {makeStyles} from '@material-ui/core/styles';
import {useCallback, useState} from 'react';
import DefaultLayout from '../../layouts/Default/Default';
import {color} from '../../styling/Color/Color';
import MyContainer from '../../styling/MyContainer/MyContainer';
import MyGridContainer from '../../styling/MyGridContainer/MyGridContainer';
import Typography from '../../styling/Typography/Typography';
import ContactForm from './ContactForm';
import {Message} from './Message';
import SendingMessageDialog from './SendingMessageDialog/SendingMessageDialog';
import {Grid, styled} from "@mui/material";

// @todo mui5
// const useStyles = makeStyles((themeMui) => ({
// 	heading: {
// 		marginBottom: themeMui.spacing(8/8)
// 	},
// 	body: {
// 		marginBottom: themeMui.spacing(40/8),
// 		color: color.grey['700']
// 	}
// }));

const StyledTypographyBody = styled(Typography)(({theme}) => ({
		marginBottom: theme.spacing(40/8),
		color: color.grey['700']
}));

const StyledTypographyHeading = styled(Typography)(({theme}) => ({
	marginBottom: theme.spacing(8/8)
}));

export default function Contact() {
	// const classes = useStyles();

	const [isSending, setIsSending] = useState<boolean>(false);
	const [message, setMessage] = useState<Message>();

	const handleSendingDialogClose = useCallback(() => {
		setIsSending(false);
	}, []);

	const handleSubmit = useCallback((value: Message) => {
		setIsSending(true);
		setMessage(value);
	}, []);

	return (
		<DefaultLayout title="Contact" top="contact">
			<MyContainer>
				<MyGridContainer>
					{/* Content */}
					<Grid item md={12} xs={12}>
						<StyledTypographyHeading group="primary" variant="h1" weight="regular">
							Pleasure to meet you.
						</StyledTypographyHeading>
					</Grid>
				</MyGridContainer>

				<MyGridContainer>
					<Grid item md={6} xs={12}>
						<StyledTypographyBody group="primary" variant="body" weight="regular">
							I&rsquo;m always open to make new connections and chat about software&nbsp;development.
						</StyledTypographyBody>

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
