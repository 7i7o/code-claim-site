import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";

export enum ClaimCardState {
  disconnected,
  unclaimed,
  claiming,
  claimed,
}

export interface ClaimCardData {
  state: ClaimCardState;
  address: string;
  avatar: string;
  allocations: {
    member: string;
    voterOrPoap: string;
    earlyContributor: string;
    total: string;
  };
}

const Avatar = () => {
  return (
    <Box
      background="gray.200"
      w={["96px", "120px"]}
      h={["96px", "120px"]}
      borderRadius="16px"
    />
  );
};

const ClaimButton = ({ label }: { label: string }) => (
  <Button
    background="#08010D"
    borderRadius="12px"
    color="#FFF"
    fontSize={["16px", "18px"]}
    w="100%"
    h="56px"
    mt="24px"
    _active={{}}
    _hover={{
      transform:
        "translate3d(0px, -2px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
      transformStyle: "preserve-3d",
    }}
  >
    {label}
  </Button>
);

const Header = ({ address }: { address: string }) => (
  <Flex align="center">
    <Avatar />
    <Flex direction="column" ml={["20px", "32px"]}>
      <Text>ELIGIBLE</Text>
      <Text>{address}</Text>
    </Flex>
  </Flex>
);

const Position = ({
  title,
  value,
  isBig = false,
}: {
  title: string;
  value: string;
  isBig: boolean;
}) => (
  <Flex direction="column">
    <Flex direction="row" align="baseline">
      <Text fontSize={isBig ? "20px" : "16px"} fontWeight="500">
        {title}
      </Text>
      <Spacer />
      <Text fontSize={isBig ? "32px" : "24px"} fontWeight="400">
        {value}
      </Text>
    </Flex>
    <Box border="1px dashed #4E4853" />
  </Flex>
);

export const ClaimCard = (props: { data: ClaimCardData }) => {
  const { address, state, allocations } = props.data;
  const positions = [
    { title: "Minted D4R NFT", value: allocations.member },
    { title: "Pre Season 0 activity", value: allocations.voterOrPoap },
    { title: "Early Contributor", value: allocations.earlyContributor },
  ];
  return (
    <Flex
      w="100%"
      backdropFilter="blur(300px)"
      background="rgba(255, 255, 255, 0.5)"
      border="3px solid #DEDEDE"
      borderRadius="24px"
      box-shadow="inset 0px 0px 100px rgba(255, 255, 255, 0.25)"
      direction="column"
      p="24px"
    >
      <Header address={address} />
      <Flex direction="column" mt="8" mb="8">
        {positions.map((pos, index) => {
          return (
            <Box key={index} my="2">
              <Position title={pos.title} value={pos.value} isBig={false} />
            </Box>
          );
        })}
        <Box mt="6">
          <Position
            title="$CODE allocation"
            value={allocations.total}
            isBig={true}
          />
        </Box>
      </Flex>
      <ClaimButton label={`CLAIM ${allocations.total} TOKENS`} />
    </Flex>
  );
};
