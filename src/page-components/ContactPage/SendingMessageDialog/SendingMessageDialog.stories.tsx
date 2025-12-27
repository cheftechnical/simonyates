import type { Meta, StoryObj } from "@storybook/react";
import SendingMessageDialog from "./SendingMessageDialog";
import { MessageFormValues } from "../MessageFormValues";

const message: MessageFormValues = {
  name: "John Doe",
  emailAddress: "john.doe@example.com",
  subject: "Subject placeholder",
  body: "Body placeholder",
};

const meta = {
  title: "Pages/Contact/SendingMessageDialog",
  component: SendingMessageDialog,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SendingMessageDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const handleClose = () => {
  console.log("onClose");
};

export const Default: Story = {
  args: {
    isOpen: false,
    message: message,
    onClose: handleClose,
  },
};

export const WithOpen: Story = {
  args: {
    isOpen: true,
    message: message,
    onClose: handleClose,
  },
};

export const WithSuccess: Story = {
  args: {
    defaultFragment: "success",
    isOpen: true,
    message: message,
    onClose: handleClose,
  },
};
