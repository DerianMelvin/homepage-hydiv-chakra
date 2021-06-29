import { Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";

const Benefits = () => {
  return (
    <Flex align="center" justify="space-evenly">
      <Flex p="2rem" direction="column" align="center">
        <Icon as={MdLocalShipping} boxSize="5rem" />
        <Heading as="h3">Sample Heading</Heading>
        <Text>This is a sample text</Text>
      </Flex>
      <Flex p="2rem" direction="column" align="center">
        <Icon as={MdLocalShipping} boxSize="5rem" />
        <Heading as="h3">Sample Heading</Heading>
        <Text>This is a sample text</Text>
      </Flex>
      <Flex p="2rem" direction="column" align="center">
        <Icon as={MdLocalShipping} boxSize="5rem" />
        <Heading as="h3">Sample Heading</Heading>
        <Text>This is a sample text</Text>
      </Flex>
    </Flex>
  );
};

export default Benefits;
