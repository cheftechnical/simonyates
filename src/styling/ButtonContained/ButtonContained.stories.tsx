import ButtonContained from "./ButtonContained";
import SendIcon from "@mui/icons-material/Send";
import { action } from "@storybook/addon-actions";

export default { title: "Style Guide/ButtonContained" };

export const _default = () => <ButtonContained>Label</ButtonContained>;
export const _withIcon = () => (
  <ButtonContained endIcon={<SendIcon style={{ fontSize: "16px" }} />}>
    Enabled
  </ButtonContained>
);
export const _withOnClick = () => (
  <ButtonContained onClick={action("click")}>label</ButtonContained>
);
