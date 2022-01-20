import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";
import { Box, Flex } from "@chakra-ui/react";

import { CODEToken__factory } from "@/typechain";
import { hasEthereum } from "@/utils";

import { ClaimBox } from "components/ClaimBox";
import { MainBox } from "components/MainBox";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const Home: NextPage = () => {
  const [claimPeriodEnds, setClaimPeriodEnds] = useState(0);
  async function fetchStore() {
    if (hasEthereum()) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const tokenContract = CODEToken__factory.connect(
        contractAddress,
        provider
      );
      try {
        const data = await tokenContract.claimPeriodEnds();
        setClaimPeriodEnds(data.toNumber());
      } catch (err) {
        console.log("EfetchStorerror: ", err);
      }
    }
  }

  useEffect(() => {
    fetchStore();
  }, []);

  return (
    <Box m="0" w="100vw" h="100vh" background="blue">
      <Head>
        <title>$CODE Claim Page</title>
      </Head>
      <Flex direction="row" flexWrap="wrap">
        <Box
          w={["100vw", "50vw"]}
          h="100vh"
          m="0"
          pl="5vw"
          background="#08010D"
        >
          <Box mt="48px">Developer DAO</Box>
          <MainBox />
        </Box>
        <Box
          w={["100vw", "50vw"]}
          h="100vh"
          m="0"
          backgroundColor="#F1F0F5"
          align="center"
          justifyContent="center"
        >
          <ClaimBox />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
