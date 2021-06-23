import { Flex, HStack, Link, Image, Button } from "@chakra-ui/react";
import logo from "../assets/company_logo.png";

const Header = () => {
  return (
    <Flex align="center" justify="space-between" px="5%" bgColor="whitesmoke">
      <Image
        w="auto"
        h="2rem"
        objectFit="contain"
        src={logo}
        alt="Company logo"
      />

      <HStack spacing="2">
        <Link p="8">Home</Link>
        <Link p="8">Listing</Link>
        <Link p="8">About Us</Link>
      </HStack>

      <Button colorScheme="green" variant="solid" p="6">
        Go to Shop
      </Button>
    </Flex>
  );
};

export default Header;
