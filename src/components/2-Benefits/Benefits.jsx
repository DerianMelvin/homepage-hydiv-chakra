import { Flex } from "@chakra-ui/react";
import { MdLocalShipping, MdStar, MdVerifiedUser } from "react-icons/md";
import ContentBenefits from "./ContentBenefits";

const Benefits = () => {
  return (
    <Flex px="6%" mt="7rem" align="center" justify="space-between">
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
  );
};

export default Benefits;
