import { Flex, Image, Text } from "@chakra-ui/react";

export const Logo = () => (
  <Flex align="center">
    <Image
      src="assets/devdao-logo.svg"
      alt="Developer DAO logo"
      w="48px"
      h="48px"
      mr="16px"
    />
    <Text color="white" fontSize="24px" fontWeight="500">
      Developer DAO
    </Text>
  </Flex>
);
