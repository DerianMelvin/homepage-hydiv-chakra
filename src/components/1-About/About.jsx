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
            and modern looks."
        flexDirection="row"
        imageSrc={img1}
      />
      <ContentAbout
        heading="Look and Feel Comfortable"
        text="Maximize your favourite activities with the best-in-class comfort
            and modern looks."
        textAlign="left"
        flexDirection="row-reverse"
        imageSrc={img2}
      />
      <ContentAbout
        heading="Look and Feel Comfortable"
        text="Maximize your favourite activities with the best-in-class comfort
            and modern looks."
        flexDirection="row"
        imageSrc={img3}
      />
    </Box>
  );
};

export default About;
