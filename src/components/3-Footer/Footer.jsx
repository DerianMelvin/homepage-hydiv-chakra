import { Flex } from "@chakra-ui/react";
import LinksFooter from "./LinksFooter";
import SubscriptionFooter from "./SubscriptionFooter";

const Footer = () => {
  return (
    <Flex
      px="6%"
      mt="7rem"
      position="relative"
      align="center"
      justify="space-between"
      bgColor="whitesmoke"
      zIndex="10"
    >
      <LinksFooter />
      <SubscriptionFooter />
    </Flex>
  );
};

export default Footer;
