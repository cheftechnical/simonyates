import { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Grid, styled, Typography } from "@mui/material";
import PageWrapper from "../../components/PageWrapper";
import MyContainer from "../../styling/MyContainer/MyContainer";
import MyGridContainer from "../../styling/MyGridContainer/MyGridContainer";
import color from "../../styling/Color";
import ContactForm from "./ContactForm";
import { MessageFormValues } from "./MessageFormValues";
import SendingMessageDialog from "./SendingMessageDialog/SendingMessageDialog";

const StyledTypographyBody = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(40 / 8),
  color: color.grey["700"],
})) as typeof Typography;

const StyledTypographyHeading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(8 / 8),
})) as typeof Typography;

export default function Contact() {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [message, setMessage] = useState<MessageFormValues>();

  const handleSendingDialogClose = useCallback(() => {
    setIsSending(false);
  }, []);

  const handleSubmit: SubmitHandler<MessageFormValues> = useCallback(
    (value: MessageFormValues) => {
      console.log("sending");
      setIsSending(true);
      setMessage(value);
    },
    [],
  );

  return (
    <PageWrapper title="Contact">
      <MyContainer>
        <MyGridContainer>
          {/* Content */}
          <Grid item md={12} xs={12}>
            <StyledTypographyHeading component="h1" variant="primaryH1">
              Pleasure to meet you.
            </StyledTypographyHeading>
          </Grid>
        </MyGridContainer>

        <MyGridContainer>
          <Grid item md={6} xs={12}>
            <StyledTypographyBody component="p" variant="primaryBody">
              I&rsquo;m always open to make new connections and chat about
              software&nbsp;development.
            </StyledTypographyBody>

            <ContactForm onSubmit={handleSubmit} />

            {isSending && <span>Sending&hellip;</span>}
          </Grid>
        </MyGridContainer>
      </MyContainer>

      <SendingMessageDialog
        isOpen={isSending}
        message={message}
        onClose={handleSendingDialogClose}
      />
    </PageWrapper>
  );
}
