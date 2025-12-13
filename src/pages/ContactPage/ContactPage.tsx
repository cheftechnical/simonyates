import { useCallback, useRef, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import PageWrapper from "../../components/PageWrapper";
import MyContainer from "../../styling/MyContainer/MyContainer";
import ContactForm, { ContactFormHandle } from "./ContactForm";
import { MessageFormValues } from "./MessageFormValues";
import SendingMessageDialog from "./SendingMessageDialog/SendingMessageDialog";

export default function Contact() {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [message, setMessage] = useState<MessageFormValues>();
  const [hasReachedSuccess, setHasReachedSuccess] = useState<boolean>(false);
  const formRef = useRef<ContactFormHandle>(null);

  const handleSendingDialogClose = useCallback(() => {
    setIsSending(false);
    // If we reached success, reset the form
    if (hasReachedSuccess) {
      formRef.current?.reset();
      setHasReachedSuccess(false);
    }
  }, [hasReachedSuccess]);

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
        <div className="flex flex-wrap">
          {/* Content */}
          <div className="w-full">
            <h1 className="font-normal leading-relaxed text-4xl tracking-[0.5px] mb-2">
              Pleasure to meet you.
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <p className="font-normal leading-normal text-base tracking-[0.5px] mb-[40px] text-gray-700">
              I&rsquo;m always open to make new connections and chat about
              software&nbsp;development.
            </p>

            <ContactForm ref={formRef} onSubmit={handleSubmit} />

            {isSending && <span>Sending&hellip;</span>}
          </div>
        </div>
      </MyContainer>

      <SendingMessageDialog
        isOpen={isSending}
        message={message}
        onClose={handleSendingDialogClose}
        onSuccess={() => setHasReachedSuccess(true)}
      />
    </PageWrapper>
  );
}
