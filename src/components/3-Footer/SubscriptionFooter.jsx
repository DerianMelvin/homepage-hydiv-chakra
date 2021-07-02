import { Flex, Heading, Text, Input, Button } from "@chakra-ui/react";

const SubscriptionFooter = () => {
  return (
    <Flex
      width="60%"
      direction="column"
      align="flex-end"
      justify="flex-end"
      textAlign="right"
      borderLeft="1px solid black"
    >
      <Heading as="h3" size="lg">
        Unique Newsletter Every Week
      </Heading>
      <Text mt="0.3rem" width="60%">
        Find out our new items, design recommendations, and
        discounts for your next purchase.
      </Text>

      <Input
        mt="1rem"
        textAlign="right"
        width="50%"
        placeholder="myemail123@gmail.com"
        size="lg"
        variant="filled"
        backgroundColor="whiteAlpha.900"
      />

      <Button mt="0.5rem" colorScheme="green">
        Subscribe to Newsletter
      </Button>
    </Flex>
  );
};

export default SubscriptionFooter;
