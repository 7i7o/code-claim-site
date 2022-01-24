import { readFileSync } from 'fs';

const isAirdropSumCorrect = (AIRDROP_URL: string) => {
  const EXPECTED_SUM = 3_500_000;

  const airdropData = JSON.parse(readFileSync(AIRDROP_URL).toString());

  const tokenList: Array<number> = Object.values(airdropData);

  const airdropSum = tokenList.reduce((acc, value) => {
    return acc + value;
  }, 0);

  return airdropSum === EXPECTED_SUM;
};
