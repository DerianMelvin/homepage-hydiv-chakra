import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";

const ContentAbout = ({
  heading,
  text,
  textAlign,
  flexDirection,
  imageSrc,
  mediaLargerThan1200
}) => {
  return (
    <Flex
      direction={mediaLargerThan1200 ? flexDirection : "column"}
      mt={mediaLargerThan1200 ? "12rem" : "6rem"}
      align="center"
      justify="space-between"
    >
      <Box>
        <Image
          src={imageSrc}
          alt="About background image"
          width={mediaLargerThan1200 ? "45rem" : "50rem"}
          objectFit="cover"
        />
      </Box>

      <Flex
        ml={textAlign === "right" && mediaLargerThan1200 ? "4rem" : "0"}
        mr={textAlign === "left" && mediaLargerThan1200 ? "4rem" : "0"}
        mt={mediaLargerThan1200 ? "0" : "3rem"}
        width="35rem"
        direction="column"
        align="right"
        textAlign={mediaLargerThan1200 ? textAlign : "center"}
      >
        <Heading mb="2rem" as="h2" size="3xl">
          {heading}
        </Heading>
        <Text fontSize="lg">{text}</Text>
      </Flex>
    </Flex>
  );
};

export default ContentAbout;
