import { Flex, HStack, Link, Image } from "@chakra-ui/react";
import logo from "../../assets/company_logo.png";

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
      <Flex direction="column" align="flex-start" justify="flex-start">
        <Image
          w="auto"
          h="2rem"
          objectFit="contain"
          src={logo}
          alt="Company logo"
        />

        <HStack spacing="2">
          <Link>Home</Link>
          <Link>Listing</Link>
          <Link>About Us</Link>
        </HStack>

        <HStack spacing="2">
          <Link href="#facebook">Facebook</Link>
          <Link href="#twitter">Twitter</Link>
          <Link href="#instagram">Instagram</Link>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Footer;
