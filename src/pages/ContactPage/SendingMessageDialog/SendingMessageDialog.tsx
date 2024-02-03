import { useMemo, useState } from "react";
import { Dialog } from "@mui/material";
import { MessageFormValues } from "../MessageFormValues";
import ContentRecaptcha from "./ContentRecaptcha";
import ContentSuccessful from "./ContentSuccessful";

interface Props {
  defaultFragment?: "recaptcha" | "success";
  isOpen: boolean;
  message?: MessageFormValues;
  onClose: () => void;
}

const defaultProps = {
  defaultFragment: "recaptcha"
};

export default function SendingMessageDialog(props: Props) {
  const { defaultFragment, isOpen, message, onClose } = {
    ...defaultProps,
    ...props
  };

  const [content, setContent] = useState(defaultFragment);

  const currentContent = useMemo(() => {
    switch (content) {
      case "recaptcha":
        return (
          <ContentRecaptcha
            message={message}
            onClose={onClose}
            onSuccess={() => setContent("success")}
          />
        );
      case "success":
        return <ContentSuccessful />;
    }
  }, [content, message, onClose]);

  return (
    <Dialog
      fullWidth
      aria-labelledby="sending-message-dialog-title"
      maxWidth="sm"
      onClose={onClose}
      open={isOpen}
    >
      {currentContent}
    </Dialog>
  );
}
