import { Flex, Image } from "@chakra-ui/react";

import bgImage1 from "../../assets/images/background_image_1.jpg";
import bgImage2 from "../../assets/images/background_image_2.jpg";
import bgImage3 from "../../assets/images/background_image_3.jpg";

const BackgroundHeader = () => {
  const backgroundImages = [bgImage1, bgImage2, bgImage3];

  const displayImages = backgroundImages.map((img) => {
    return (
      <Image
        src={img}
        alt="header background image"
        height="90vh"
        width="33.3vw"
        objectFit="cover"
        position="relative"
        zIndex="-1"
      />
    );
  });

  return (
    <Flex>
      {displayImages}
    </Flex>
  );
};

export default BackgroundHeader;
