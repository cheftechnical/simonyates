import {Typography} from "@mui/material";

interface Props {
  children: any;
}

export default function WorkAtRole(props: Props) {
  const {children} = props;

  return (
    <Typography component="p" variant="primaryH4" mb={1}>{children}</Typography>
  );
};
