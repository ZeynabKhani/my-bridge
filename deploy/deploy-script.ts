import hre from "hardhat";

async function main() {
  
  const TokenBsc = await hre.ethers.getContractFactory("TokenBsc");
  const TokenEth = await hre.ethers.getContractFactory("TokenEth");
  const BridgeBsc = await hre.ethers.getContractFactory("BridgeBsc");
  const BridgeEth = await hre.ethers.getContractFactory("BridgeEth");

  const tokenBsc = await TokenBsc.deploy("Token on Bsc", "TBSC");
  const tokenEth = await TokenEth.deploy("Token on Eth", "TETH");
  

  await tokenBsc.deployed();
  await tokenEth.deployed();

  console.log("Token Bsc deployed to:", tokenBsc.address);
  console.log("Token Eth deployed to:", tokenEth.address);

  const bridgeBsc = await BridgeBsc.deploy(tokenBsc.address);
  const bridgeEth = await BridgeEth.deploy(tokenEth.address);

  console.log("Bridge Bsc deployed to:", bridgeBsc.address);
  console.log("Bridge Eth deployed to:", bridgeEth.address);

  // if(network === 'rinkeby') {
  //   await deployer.deploy(TokenEth);
  //   const tokenEth = await TokenEth.deployed();
  //   await tokenEth.mint(addresses[0], 1000);
  //   await deployer.deploy(BridgeEth, tokenEth.address);
  //   const bridgeEth = await BridgeEth.deployed();
  //   await tokenEth.updateAdmin(bridgeEth.address);
  // }
  // if(network === 'bsc_testnet') {
  //   await deployer.deploy(TokenBsc);
  //   const tokenBsc = await TokenBsc.deployed();
  //   await deployer.deploy(BridgeBsc, tokenBsc.address);
  //   const bridgeBsc = await BridgeBsc.deployed();
  //   await tokenBsc.updateAdmin(bridgeBsc.address);
  // }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
