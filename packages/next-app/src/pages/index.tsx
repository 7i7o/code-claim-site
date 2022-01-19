import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";
import { Container, Box } from "@chakra-ui/react";

import { CODEToken__factory } from "@/typechain";
import { hasEthereum } from "@/utils";

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
    <Box>
      <Head>
        <title>$CODE Claim Page</title>
      </Head>
      <Container>TODO</Container>
      <Container>{claimPeriodEnds}</Container>
    </Box>
  );
};

export default Home;
