import { Box } from "@chakra-ui/react";
import img1 from "../../assets/images/background_image_1.jpg";
import img2 from "../../assets/images/background_image_2.jpg";
import img3 from "../../assets/images/background_image_3.jpg";
import ContentAbout from "./ContentAbout";

const About = () => {
  return (
    <Box px="6%">
      <ContentAbout
        heading="Look and Feel Comfortable"
        text="Maximize your favourite activities with the best-in-class comfort
            with modern looks."
        flexDirection="row"
        imageSrc={img1}
      />
      <ContentAbout
        heading="Optimize Space with Unique Design"
        text="Make your own home more memorable everytime you place or organize things with interesting designs that will caught your attention."
        textAlign="left"
        flexDirection="row-reverse"
        imageSrc={img2}
      />
      <ContentAbout
        heading="Variety of Choices for a Perfect Home"
        text="Not a great fit for your home? Simply pick another from our wide range of design variety to satisfy your needs for a perfect living space."
        flexDirection="row"
        imageSrc={img3}
      />
    </Box>
  );
};

export default About;
