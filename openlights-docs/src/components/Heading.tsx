import { Box, Typography } from "@mui/material";
export const Heading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <Box textAlign={"left"} width={"100%"}>
    <Typography fontSize={30}>{title}</Typography>
    <Box width={"30%"} minWidth={300} borderBottom={5} borderColor={"#444444"} marginY={2}></Box>
    <Typography marginY={2}>{subtitle}</Typography>
  </Box>
);
