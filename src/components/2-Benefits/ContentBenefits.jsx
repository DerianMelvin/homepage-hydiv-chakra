import { Flex, Heading, Text, Icon } from "@chakra-ui/react";

const ContentBenefits = ({ heading, text, icon, mediaLargerThan1024 }) => {
  return (
    <Flex
      p={mediaLargerThan1024 ? "2rem" : "3rem"}
      height={mediaLargerThan1024 ? "23rem" : "15rem"}
      width={mediaLargerThan1024 ? "30%" : "90%"}
      direction={mediaLargerThan1024 ? "column" : "row"}
      align="center"
      justify="center"
      boxShadow="0.2rem 0.5rem 1rem lightGrey"
      borderRadius="0.5rem"
    >
      <Icon
        as={icon}
        boxSize="4rem"
        mb={mediaLargerThan1024 ? "0.5rem" : "0"}
        mr={mediaLargerThan1024 ? "0" : "2rem"}
      />

      <Flex
        direction="column"
        textAlign={mediaLargerThan1024 ? "center" : "left"}
      >
        <Heading as="h3" size="lg" mb={mediaLargerThan1024 ? "2rem" : "0.5rem"}>
          {heading}
        </Heading>
        <Text fontSize="lg">{text}</Text>
      </Flex>
    </Flex>
  );
};

export default ContentBenefits;
