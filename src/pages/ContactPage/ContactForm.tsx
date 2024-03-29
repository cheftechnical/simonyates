/**
 * Resources:
 * https://react-hook-form.com/get-started#IntegratingwithUIlibraries
 */
import SendIcon from "@mui/icons-material/Send";
import { Button, styled } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { MyTextField2 } from "../../styling/MyTextField2/MyTextField2";
import { MessageFormValues } from "./MessageFormValues";

// @source https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
const regexEmailAddress = /\S+@\S+\.\S+/;

interface Props {
  /**
   * Callback fired when the form is submitted
   */
  onSubmit: SubmitHandler<MessageFormValues>;
}

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(16 / 8),
}));

export function ContactForm(props: Props) {
  const { onSubmit } = props;
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<MessageFormValues>();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* IMPORTANT: ALWAYS INCLUDE A DEFAULT VALUE, OTHERWISE YOU'LL GET AN UNCONTROLLED COMPONENT WARNING */}
        <Controller
          control={control}
          defaultValue=""
          name="name"
          render={({ field }) => {
            return (
              <MyTextField2
                {...field}
                error={!!errors.name}
                helperText={
                  errors.name?.message
                    ? errors.name.message.toString()
                    : undefined
                }
                placeholder="Name"
              />
            );
          }}
          rules={{
            required: "Your name is required",
          }}
        />

        <Controller
          control={control}
          defaultValue=""
          name="emailAddress"
          render={({ field }) => (
            <MyTextField2
              {...field}
              error={!!errors.emailAddress}
              helperText={
                errors.emailAddress?.message
                  ? errors.emailAddress.message.toString()
                  : undefined
              }
              placeholder="Email"
            />
          )}
          rules={{
            required: "Your email address is required",
            pattern: {
              value: regexEmailAddress,
              message: "You must provide a valid email address",
            },
          }}
        />

        <Controller
          control={control}
          defaultValue=""
          name="subject"
          render={({ field }) => (
            <MyTextField2
              {...field}
              error={!!errors.subject}
              helperText={
                errors.subject?.message
                  ? errors.subject.message.toString()
                  : undefined
              }
              placeholder="Subject"
            />
          )}
          rules={{
            required: "A subject is required",
          }}
        />

        <Controller
          control={control}
          defaultValue=""
          name="body"
          render={({ field }) => (
            <MyTextField2
              {...field}
              multiline
              error={!!errors.body}
              helperText={
                errors.body?.message
                  ? errors.body.message.toString()
                  : undefined
              }
              placeholder="MessageFormValues"
              rows={7}
            />
          )}
          rules={{
            required: "A message is required",
          }}
        />

        <StyledButton
          endIcon={<SendIcon style={{ fontSize: "16px" }} />}
          type="submit"
        >
          Send
        </StyledButton>
      </form>
    </div>
  );
}

export default ContactForm;
