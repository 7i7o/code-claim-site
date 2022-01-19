import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const main: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer, treasury } = await getNamedAccounts();

  const dd = await deploy('CODEToken', {
    from: deployer,
    log: true,
    // treasuryAddress, treasurySupply, airdropSupply, _claimPeriodEnds
    args: [treasury, 5_000_000, 5_000_000, 1640433346],
  });

  console.log('dd deployed to:', dd.address);
};

export default main;
main.tags = ['CODEToken'];
