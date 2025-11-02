/* @deprecated */

import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default { title: "Style Guide/Buttons/Contained" };

export const _default = () => <Button variant="contained">Enabled</Button>;
export const _withIcon = () => (
  <Button endIcon={<SendIcon />} variant="contained">
    Enabled
  </Button>
);

export const _disabled = () => (
  <Button disabled variant="contained">
    Disabled
  </Button>
);
