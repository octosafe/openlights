import { Box, Typography } from "@mui/material";

export const QuoteBox = ({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) => (
  <Box textAlign={"right"} marginY={2}>
    <Typography>"{quote}"</Typography>
    <Typography fontStyle={"italic"}>- {author}</Typography>
  </Box>
);
