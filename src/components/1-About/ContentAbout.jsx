import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";

const ContentAbout = ({
  heading,
  text,
  textAlign = "right",
  flexDirection,
  imageSrc,
}) => {
  return (
    <Flex
      direction={flexDirection}
      mt="7rem"
      align="center"
      justify="space-between"
    >
      <Box>
        <Image
          src={imageSrc}
          alt="About background image"
          width="40rem"
          objectFit="cover"
          position="relative"
        />
      </Box>

      <Flex
        px="2rem"
        width="35rem"
        direction="column"
        align="right"
        textAlign={textAlign}
      >
        <Heading mb="2rem" as="h2" size="3xl">
          {heading}
        </Heading>
        <Text fontSize="xl">{text}</Text>
      </Flex>
    </Flex>
  );
};

export default ContentAbout;
