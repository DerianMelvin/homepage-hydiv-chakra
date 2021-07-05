import { Flex, Heading, Text } from "@chakra-ui/react";

const ContentHeader = ({ mediaLargerThan1200 }) => {

  return (
    <Flex
      px="6%"
      height="90vh"
      minHeight="30rem"
      width="100%"
      justify="center"
      position="absolute"
      left="0"
      top="7rem"
    >
      <Flex
        my="2rem"
        width="100%"
        direction="column"
        align="center"
        textAlign={mediaLargerThan1200 ? "left" : "center"}
        justify="center"
        color="whitesmoke"
      >
        <Heading as="h1" width="100%" fontSize="9xl" fontWeight="100">
          Live with <br /> Elegance
        </Heading>

        <Text m="2rem" width="100%" fontSize="2xl">
          Quality furnitures made exclusively for your needs.
        </Text>
      </Flex>
    </Flex>
  );
};

export default ContentHeader;
