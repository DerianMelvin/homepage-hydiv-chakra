import { Flex, Image } from "@chakra-ui/react";

import bgImage1 from "../../assets/images/background_image_1.jpg";
import bgImage2 from "../../assets/images/background_image_2.jpg";
import bgImage3 from "../../assets/images/background_image_3.jpg";

const BackgroundHeader = ({ mediaLargerThan1200 }) => {
  const backgroundImages = [bgImage1, bgImage2, bgImage3];

  const displayImages = backgroundImages.map((img) => {
    return (
      <Image
        src={img}
        alt="header background image"
        height="95vh"
        minHeight="33rem"
        width="33.3%"
        objectFit="cover"
        position="relative"
        zIndex="-1"
      />
    );
  });

  return (
    <Flex _before={{
      content:`""`,
      height: "95vh",
      minHeight: "33rem",
      width: "100%",
      position: "absolute",
      left: "0",
      background: `${mediaLargerThan1200 ? "linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4))" : "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5))"}`
    }}>
      {displayImages}
    </Flex>
  );
};

export default BackgroundHeader;
