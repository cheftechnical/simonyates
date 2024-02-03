import { Box, Button, DialogActions, DialogContent, DialogTitle, styled } from "@mui/material";
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

const StyledBox = styled(Box)(() => ({
  width: 302
}));

const StyledDivRoot = styled("div")(() => ({
  textAlign: "center"
}));

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
      <DialogActions>
        <Button color="primary" onClick={send} variant="contained">
          Test Send
        </Button>
        <Button color="primary" onClick={onClose}>
          Cancel
        </Button>
      </DialogActions>
    );
  }, [debug, onClose, send]);

  return (
    <div>
      <DialogTitle id="sending-message-dialog-title">
        Are you a human?
      </DialogTitle>
      <DialogContent>
        <StyledDivRoot>
          <Box display="flex" justifyContent="center">
            <StyledBox pb={3}>
              <ReCAPTCHA
                onChange={handleReCaptchaChange}
                sitekey={recaptchaSiteKey}
              />
            </StyledBox>
          </Box>
        </StyledDivRoot>
      </DialogContent>
      {debugButtons}
    </div>
  );
}

export default ContentRecaptcha;