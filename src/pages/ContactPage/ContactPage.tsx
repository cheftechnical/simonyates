import { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Grid } from "@mui/material";
import PageWrapper from "../../components/PageWrapper";
import MyContainer from "../../styling/MyContainer/MyContainer";
import MyGridContainer from "../../styling/MyGridContainer/MyGridContainer";
import ContactForm from "./ContactForm";
import { MessageFormValues } from "./MessageFormValues";
import SendingMessageDialog from "./SendingMessageDialog/SendingMessageDialog";

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
            <h1 className="font-normal text-[54px] leading-[88px] tracking-[0.5px] mb-[8px]">
              Pleasure to meet you.
            </h1>
          </Grid>
        </MyGridContainer>

        <MyGridContainer>
          <Grid item md={6} xs={12}>
            <p className="font-normal text-base leading-6 tracking-[0.5px] mb-[40px] text-gray-700">
              I&rsquo;m always open to make new connections and chat about
              software&nbsp;development.
            </p>

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
