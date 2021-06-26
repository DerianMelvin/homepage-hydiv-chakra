import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Nav from "./Nav";
// import bgImage1 from "../assets/images/background_image_1.jpg";

const Header = () => {
  return (
    <Box id="header-container">
      <Nav />

      <Flex m="5rem" align="center" textAlign="center" justify="center">
        <Heading as="h1" size="4xl" fontWeight="100">
          Live with Elegance
        </Heading>
      </Flex>

      <Text m="1rem" fontSize="2xl" textAlign="center">
        Quality furnitures made exclusively for your needs.
      </Text>
    </Box>
  );
};

export default Header;
