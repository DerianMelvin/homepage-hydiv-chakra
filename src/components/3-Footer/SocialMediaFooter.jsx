import { Link, Icon } from "@chakra-ui/react";

const SocialMediaFooter = ({ href, icon }) => {
  return (
    <Link p="0.7rem" href={href} border="1px solid black" borderRadius="50%">
      <Icon
        display="flex"
        align="center"
        justify="center"
        boxSize="1.3rem"
        as={icon}
      />
    </Link>
  );
};

export default SocialMediaFooter;
