import { Box } from "@mui/material";
import { Heading } from "../components/Heading";
import { QuoteBox } from "../components/QuoteBox";

export const PageNotFound = () => {
  return (
    <Box width={"100%"} display="flex" flexDirection="column">
      <QuoteBox
        quote="It's the unknown that draws people."
        author="E.A. Bucchianeri"
      />
      <Heading title="Not Found" subtitle="This page does not exist (yet)" />
    </Box>
  );
};
