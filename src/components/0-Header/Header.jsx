import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import BackgroundHeader from "./BackgroundHeader";
import ContentHeader from "./ContentHeader";
import Nav from "./Nav";

const Header = () => {
  return (
    <Box id="header-container">
      <Nav />
      <BackgroundHeader />
      <ContentHeader />
    </Box>
  );
};

export default Header;
