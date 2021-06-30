import { Flex, Heading, Text, Icon } from "@chakra-ui/react";

const ContentBenefits = ({ heading, text, icon }) => {
  return (
    <Flex
      p="2rem"
      height="20rem"
      width="25%"
      direction="column"
      align="center"
      justify="center"
      textAlign="center"
      boxShadow="0.2rem 0.5rem 1rem lightGrey"
      borderRadius="0.5rem"
    >
      <Icon as={icon} mb="0.5rem" boxSize="4rem" />
      <Heading as="h3" mb="2rem" size="xl">
        {heading}
      </Heading>
      <Text fontSize="lg">
        {text}
      </Text>
    </Flex>
  );
};

export default ContentBenefits;
