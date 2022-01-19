import * as fs from 'fs';
import MerkleGenerator from '../utils/merkleGenerator';

const TOKEN_DECIMALS = 18;
const TOKEN_AMOUNT_NFT = 400;
const TOKEN_AMOUNT_EARLY_CONTRIB = 399;

const args = process.argv.slice(2);
const nftHoldersPath = args[0];
const votesAndPoapPath = args[1];

// TODO early contributors allocation, founding team, advisors, partners

if (!nftHoldersPath) throw new Error('Missing nftHoldersPath as first argument!');
if (!votesAndPoapPath) throw new Error('Missing earlyContribPath as second argument!');

async function main() {
  // Load addresses
  const nftHolders = JSON.parse(fs.readFileSync(nftHoldersPath).toString());
  const votersAndPoapHolders = JSON.parse(fs.readFileSync(votesAndPoapPath).toString());

  // Create the airdrop structure required by the generator
  const airdrop: Record<string, number> = {};

  // NFT Holders allocation
  nftHolders.addresses.forEach((address: string) => {
    airdrop[address] = TOKEN_AMOUNT_NFT;
  });

  // Voters & POAP holders allocation
  votersAndPoapHolders.eligible_address.forEach(({ address }: { address: string }) => {
    if (!(address in nftHolders)) {
      airdrop[address] = TOKEN_AMOUNT_EARLY_CONTRIB;
    } else {
      airdrop[address] += TOKEN_AMOUNT_EARLY_CONTRIB;
    }
  });

  // Create the generate & process it
  const generator = new MerkleGenerator(TOKEN_DECIMALS, airdrop);
  await generator.process();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
