import { Box, useMediaQuery } from "@chakra-ui/react";
import img4 from "../../assets/images/background_image_4.jpg";
import img5 from "../../assets/images/background_image_5.jpg";
import img6 from "../../assets/images/background_image_6.jpg";
import ContentAbout from "./ContentAbout";

const About = () => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");

  return (
    <Box px="6%">
      <ContentAbout
        heading="Look and Feel Comfortable"
        text="Maximize your favourite activities with the best-in-class comfort
            with modern looks."
        textAlign="right"
        flexDirection="row"
        imageSrc={img4}
        mediaLargerThan1200={isLargerThan1200}
      />
      <ContentAbout
        heading="Optimize Space with Unique Design"
        text="Make your own home more memorable everytime you place or organize things with interesting designs that will caught your attention."
        textAlign="left"
        flexDirection="row-reverse"
        imageSrc={img5}
        mediaLargerThan1200={isLargerThan1200}
      />
      <ContentAbout
        heading="Variety of Choices for a Perfect Home"
        text="Not a great fit for your home? Simply pick another from our wide range of design variety to satisfy your needs for a perfect living space."
        textAlign="right"
        flexDirection="row"
        imageSrc={img6}
        mediaLargerThan1200={isLargerThan1200}
      />
    </Box>
  );
};

export default About;
