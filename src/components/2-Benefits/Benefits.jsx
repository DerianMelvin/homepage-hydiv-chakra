import { Flex, Heading } from "@chakra-ui/react";
import { MdLocalShipping, MdStar, MdVerifiedUser } from "react-icons/md";
import ContentBenefits from "./ContentBenefits";

const Benefits = () => {
  return (
    <Flex px="6%" mt="7rem" direction="column" align="center">
      <Heading as="h2" pb="1rem" mb="4rem" width="100%" size="3xl" textAlign="center" borderBottom="1px solid black">
        Benefits
      </Heading>
      <Flex align="center" justify="space-between">
        <ContentBenefits
          heading="Free Delivery"
          text="Deliver it straight to your home for purchases available on your region."
          icon={MdLocalShipping}
        />
        <ContentBenefits
          heading="High Quality"
          text="Premium materials and textures in every furniture made exclusively for you."
          icon={MdStar}
        />
        <ContentBenefits
          heading="Warranty"
          text="Gain at least a 2-year warranty for each furniture you purchased."
          icon={MdVerifiedUser}
        />
      </Flex>
    </Flex>
  );
};

export default Benefits;
