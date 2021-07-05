import { Box, useMediaQuery } from "@chakra-ui/react";
import BackgroundHeader from "./BackgroundHeader";
import ContentHeader from "./ContentHeader";
import Nav from "./Nav";

const Header = () => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");

  return (
    <Box id="header-container">
      <Nav />
      <BackgroundHeader mediaLargerThan1200={isLargerThan1200} />
      <ContentHeader mediaLargerThan1200={isLargerThan1200} />
    </Box>
  );
};

export default Header;
