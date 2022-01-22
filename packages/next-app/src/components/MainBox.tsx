import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { Button } from "components/Button";

interface MainBoxProps {
  isConnected: boolean;
}

export const MainBox = ({ isConnected }: MainBoxProps) => {
  const primaryButtonProps = {
    w: "100%",
  };
  return (
    <Box my={["24px", "0"]} w="100%">
      <Heading
        as="h1"
        color="white"
        fontSize={["44px", "96px"]}
        fontWeight="500"
      >
        Airdrop
      </Heading>
      <Text
        mt="5"
        mb="8"
        color="white"
        fontSize={["20px", "24px"]}
        fontWeight="500"
      >
        <span style={{ fontStyle: "italic" }}>$CODE</span> is the new governance
        token for Developer DAO. Connect your wallet to determine your airdrop
        eligibility.
      </Text>
      <Flex direction={["column", "row"]}>
        <Box mb={["4", "0"]} mr={["0", "7"]} w={["100%", "inherit"]}>
          {isConnected ? (
            <Box w="100%" aling="center">
              <Text
                background="rgba(26, 236, 173, 0.15)"
                borderRadius={8}
                color="#1AECAD"
                fontSize={["16px", "18px"]}
                fontWeight="900"
                height="52px"
                padding={["13px 4rem", "13px 2rem"]}
                w="100%"
              >
                WALLET CONNECTED
              </Text>
            </Box>
          ) : (
            <Button
              primary={true}
              label="CONNECT WALLET"
              {...primaryButtonProps}
            />
          )}
        </Box>
        <Button label="LEARN MORE" />
      </Flex>
    </Box>
  );
};
