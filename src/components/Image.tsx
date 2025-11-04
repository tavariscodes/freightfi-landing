import { Box, BoxProps } from "@mui/material";

interface ImageProps extends Omit<BoxProps, 'component'> {
  src: string;
  alt: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

export default function Image({ src, alt, onError, ...props }: ImageProps) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      onError={onError}
      {...props}
    />
  );
}

