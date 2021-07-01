import { Flex, HStack, Link, Image, Icon } from "@chakra-ui/react";
import logo from "../../assets/company_logo.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const LinksFooter = () => {
  return (
    <Flex my="2rem" direction="column" align="flex-start" justify="flex-start">
      <Image
        w="auto"
        h="2rem"
        objectFit="contain"
        src={logo}
        alt="Company logo"
      />

      <HStack mt="2rem" spacing="10">
        <Link>Home</Link>
        <Link>Listing</Link>
        <Link>About Us</Link>
      </HStack>

      <HStack mt="2rem" spacing="10">
        <Link href="#facebook">
          <Icon
            display="flex"
            align="center"
            justify="center"
            boxSize="2rem"
            as={FaFacebookF}
          />
        </Link>
        <Link href="#twitter">
          <Icon
            display="flex"
            align="center"
            justify="center"
            boxSize="2rem"
            as={FaTwitter}
          />
        </Link>
        <Link href="#instagram">
          <Icon
            display="flex"
            align="center"
            justify="center"
            boxSize="2rem"
            as={FaInstagram}
          />
        </Link>
      </HStack>
    </Flex>
  );
};

export default LinksFooter;
