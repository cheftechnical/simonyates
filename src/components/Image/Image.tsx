import rem from '../../styling/rem';
import {styled} from "@mui/material";

interface Props {
  alt: string;
  className?: any;
  src: string;
}

// @todo mui5
// const useStyles = makeStyles((themeMui) => ({
// 	root: {
// 		marginBottom: rem(-4),
// 		width: '100%'
// 	}
// }));

const StyledImg = styled('img')(() => ({
  marginBottom: rem(-4),
  width: '100%'
}))

export default function Image(props: Props) {
  const {alt, className, src} = props;

  return (
    <StyledImg
      alt={alt}
      className={`${className}`}
      // src={process.env.PUBLIC_URL + src} @todo <!---- this needs to be set
      src={src}
    />
  );
}