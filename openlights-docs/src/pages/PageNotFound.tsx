import { Box, Typography } from "@mui/material";

export const PageNotFound = () => {
  return (
    <Box textAlign={"center"}>
      <Typography fontSize={30}>This route does not exist (yet)</Typography>
      <Typography>"It's the unknown that draws people."</Typography>
      <Typography fontStyle={"italic"}>- E.A. Bucchianeri</Typography>
    </Box>
  );
};
