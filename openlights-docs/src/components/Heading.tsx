import { Box, Typography } from "@mui/material";
export const Heading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <Box textAlign={"left"}>
    <Box borderBottom={2} width="100%">
      <Typography fontSize={30}>{title}</Typography>
    </Box>
    <Typography>{subtitle}</Typography>
  </Box>
);
