import { useMemo, useState, useEffect } from "react";
import { MessageFormValues } from "../MessageFormValues";
import ContentRecaptcha from "./ContentRecaptcha";
import ContentSuccessful from "./ContentSuccessful";

interface Props {
  defaultFragment?: "recaptcha" | "success";
  isOpen: boolean;
  message?: MessageFormValues;
  onClose: () => void;
  /**
   * Callback fired when the success state is reached
   */
  onSuccess?: () => void;
}

const defaultProps = {
  defaultFragment: "recaptcha"
};

export default function SendingMessageDialog(props: Props) {
  const { defaultFragment, isOpen, message, onClose, onSuccess } = {
    ...defaultProps,
    ...props
  };

  const [content, setContent] = useState(defaultFragment);

  // Reset content when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setContent(defaultFragment);
    }
  }, [isOpen, defaultFragment]);

  // Prevent body scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const currentContent = useMemo(() => {
    switch (content) {
      case "recaptcha":
        return (
          <ContentRecaptcha
            message={message}
            onClose={onClose}
            onSuccess={() => {
              setContent("success");
              onSuccess?.();
            }}
          />
        );
      case "success":
        return <ContentSuccessful onClose={onClose} />;
    }
  }, [content, message, onClose, onSuccess]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1300] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Dialog */}
      <div
        className="relative bg-white rounded-lg shadow-xl max-w-[600px] w-full max-h-[90vh] overflow-y-auto mx-4"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="sending-message-dialog-title"
        aria-modal="true"
      >
        {currentContent}
      </div>
    </div>
  );
}
