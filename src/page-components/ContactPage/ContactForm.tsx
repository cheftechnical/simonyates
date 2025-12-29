'use client';

import { MyButton } from "../../components/MyButton";
import { TextField } from "../../components/TextField/TextField";
import { MessageFormValues } from "./MessageFormValues";
/**
 * Resources:
 * https://react-hook-form.com/get-started#IntegratingwithUIlibraries
 */
import { forwardRef, useImperativeHandle } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

// @source https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
const regexEmailAddress = /\S+@\S+\.\S+/;

interface Props {
  /**
   * Callback fired when the form is submitted
   */
  onSubmit: SubmitHandler<MessageFormValues>;
}

export interface ContactFormHandle {
  /**
   * Resets the form to its default values
   */
  reset: () => void;
}

export const ContactForm = forwardRef<ContactFormHandle, Props>(
  function ContactForm(props, ref) {
    const { onSubmit } = props;
    const {
      control,
      formState: { errors },
      handleSubmit,
      reset,
    } = useForm<MessageFormValues>();

    useImperativeHandle(ref, () => ({
      reset: () => {
        reset();
      },
    }));

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
              <TextField
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
              <TextField
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
            <TextField
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
            <TextField
              {...field}
              multiline
              error={!!errors.body}
              helperText={
                errors.body?.message
                  ? errors.body.message.toString()
                  : undefined
              }
              placeholder="Message"
              rows={7}
            />
          )}
          rules={{
            required: "A message is required",
          }}
        />

        {/* Custom SVG send icon - replaced Material-UI SendIcon */}
        <MyButton
          className="mt-4"
          endIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                transform="rotate(90 12 12)"
              />
            </svg>
          }
          type="submit"
        >
          Send
        </MyButton>
      </form>
    </div>
  );
  },
);

export default ContactForm;
