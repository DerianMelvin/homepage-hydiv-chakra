import { Flex, Heading, Text } from "@chakra-ui/react";

const ContentHeader = () => {
  return (
    <Flex width="100vw" justify="center" position="absolute" left="0" top="7rem">
      <Flex m="5rem" direction="column" align="center" textAlign="center" justify="center">
        <Heading as="h1" size="4xl" fontWeight="100">
          Live with Elegance
        </Heading>

        <Text m="1rem" fontSize="2xl">
          Quality furnitures made exclusively for your needs.
        </Text>
      </Flex>
    </Flex>
  );
};

export default ContentHeader;
