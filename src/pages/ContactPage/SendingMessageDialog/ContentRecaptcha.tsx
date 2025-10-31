import axios from "axios";
import { useCallback, useMemo } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { MessageFormValues } from "../MessageFormValues";
import { recaptchaSiteKey } from "./config.ts";

interface Props {
  /**
   * If `true`, the component will simulate a send request for testing
   */
  debug?: boolean;

  /**
   * Attributes describing the message to send
   */
  message: MessageFormValues | undefined;

  /**
   * Callback fired when the dialog is closed
   */
  onClose: () => void;

  /**
   * Callback fired when the request was successful
   */
  onSuccess: () => void;
}

export function ContentRecaptcha(props: Props) {
  const { debug, message, onClose, onSuccess } = props;

  const send = useCallback(() => {
    // Serialize the message
    const payload = {
      from: message?.emailAddress,
      name: message?.name,
      subject: message?.subject,
      body: message?.body
    };

    axios
      .post(
        "https://5rygt2fs51.execute-api.us-east-1.amazonaws.com/default/simonyates-send-email",
        payload
      )
      .then((response) => {
        console.log("response", response);
        if (onSuccess) onSuccess();
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        // setIsSending(false);
      });
  }, [message, onSuccess]);

  const handleReCaptchaChange = useCallback(() => {
      send();
    },
    [send]
  );

  const debugButtons = useMemo(() => {
    if (!debug) return <></>;

    return (
      <div className="flex justify-end gap-2 p-4">
        <button
          onClick={send}
          className="px-4 py-2 bg-gray-900 text-gray-50 uppercase text-sm font-medium tracking-[1.25px] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900"
        >
          Test Send
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 text-gray-900 uppercase text-sm font-medium tracking-[1.25px] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900"
        >
          Cancel
        </button>
      </div>
    );
  }, [debug, onClose, send]);

  return (
    <div>
      <h2 id="sending-message-dialog-title" className="text-xl font-semibold p-6 pb-4">
        Are you a human?
      </h2>
      <div className="px-6 pb-4">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="w-[302px] pb-6">
              <ReCAPTCHA
                onChange={handleReCaptchaChange}
                sitekey={recaptchaSiteKey}
              />
            </div>
          </div>
        </div>
      </div>
      {debugButtons}
    </div>
  );
}

export default ContentRecaptcha;