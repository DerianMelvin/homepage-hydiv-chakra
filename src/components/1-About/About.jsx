import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";
import img1 from "../../assets/images/background_image_1.jpg";

const About = () => {
  return (
    <Box>
      <Flex px="4%" my="5rem" align="center" justify="space-evenly">
        <Image
          src={img1}
          alt="header background image"
          width="33rem"
          objectFit="cover"
          position="relative"
        />
        <Flex width="25rem" direction="column" align="right" textAlign="right">
          <Heading as="h2" size="3xl">
            Look and Feel Comfortable
          </Heading>
          <Text size="2xl">
            Maximize your favourite activities with the best-in-class comfort
            and modern looks.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default About;
