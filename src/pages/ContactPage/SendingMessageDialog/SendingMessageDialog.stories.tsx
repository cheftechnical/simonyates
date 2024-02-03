import SendingMessageDialog from "./SendingMessageDialog";
import { MessageFormValues } from "../MessageFormValues";

const message: MessageFormValues = {
  name: "John Doe",
  emailAddress: "john.doe@example.com",
  subject: "Subject placeholder",
  body: "Body placeholder",
};

export default { title: "Pages/Contact/SendingMessageDialog" };

const handleClose = () => {
  console.log("onClose");
};

export const _default = () => (
  <SendingMessageDialog
    isOpen={false}
    message={message}
    onClose={handleClose}
  />
);

export const _withOpen = () => (
  <SendingMessageDialog isOpen={true} message={message} onClose={handleClose} />
);

export const _withSuccess = () => (
  <SendingMessageDialog
    defaultFragment="success"
    isOpen={true}
    message={message}
    onClose={handleClose}
  />
);
