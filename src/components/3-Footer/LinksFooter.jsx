import {
  Flex,
  HStack,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import logo from "../../assets/company_logo.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import SocialMediaFooter from "./SocialMediaFooter";

const LinksFooter = () => {
  return (
    <Flex
      width="40%"
      direction="column"
      align="flex-start"
      justify="flex-start"
    >
      <Image
        w="auto"
        h="2rem"
        objectFit="contain"
        src={logo}
        alt="Company logo"
      />

      <HStack mt="2rem" spacing="10">
        <Breadcrumb separator="|">
          <BreadcrumbItem>
            <BreadcrumbLink href="#home">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#listing">Listing</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#aboutus">About Us</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </HStack>

      <HStack mt="2rem" spacing="10">
        <SocialMediaFooter href="#facebook" icon={FaFacebookF} />
        <SocialMediaFooter href="#twitter" icon={FaTwitter} />
        <SocialMediaFooter href="#instagram" icon={FaInstagram} />
      </HStack>
    </Flex>
  );
};

export default LinksFooter;
