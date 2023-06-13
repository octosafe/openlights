import { Heading } from "../components/Heading";
import { QuoteBox } from "../components/QuoteBox";

export const PageNotFound = () => {
  return (
    <>
      <QuoteBox
        quote="It's the unknown that draws people."
        author="E.A. Bucchianeri"
      />
      <Heading title="Not Found" subtitle="This page does not exist (yet)" />
    </>
  );
};
