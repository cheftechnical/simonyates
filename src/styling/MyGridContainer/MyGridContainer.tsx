import {Grid} from "@mui/material";
import {ReactNode} from "react";

interface Props {
	children: NonNullable<ReactNode>;
	className?: string | undefined;
}

export default function MyGridContainer(props: Props) {
	const {children, className} = props;

	return (
		<Grid container className={className} spacing={3}>
			{children}
		</Grid>
	);
};