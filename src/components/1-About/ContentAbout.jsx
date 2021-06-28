import { Flex, Image, Heading, Text } from "@chakra-ui/react";

const ContentAbout = ({ heading, text, textAlign = "right", flexDirection, imageSrc }) => {
  return (
    <Flex direction={flexDirection} px="4%" my="5rem" align="center" justify="space-between">
      <Image
        src={imageSrc}
        alt="About background image"
        width="38rem"
        objectFit="cover"
        position="relative"
      />
      <Flex width="25rem" direction="column" align="right" textAlign={textAlign}>
        <Heading as="h2" size="3xl">
          {heading}
        </Heading>
        <Text size="2xl">
          {text}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ContentAbout;
