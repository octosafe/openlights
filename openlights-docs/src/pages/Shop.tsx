import { Heading } from "../components/Heading";
import { QuoteBox } from "../components/QuoteBox";

export const Shop = () => {
  return (
    <>
      <QuoteBox
        quote="Art is not what you see, but what you make others see."
        author="Edgar Degas"
      />
      <Heading
        title="Shop"
        subtitle="Buy a pre-built OpenLights device, or the parts to build your own here"
      />
    </>
  );
};
