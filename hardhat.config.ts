require("@nomiclabs/hardhat-waffle");
import dotenv from "dotenv";

dotenv.config();

let privateKey = process.env.PRIVATE_KEY
let mnemonic = process.env.MNEMONIC

const accounts = mnemonic
    ? { mnemonic }
    : privateKey
    ? [`0x${privateKey}`]
    : undefined


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/af6c4e2d4920466e830c915a2ec874c7",
      accounts,
    },
    bsc_testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      accounts,
    },
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
    deploy: "./deploy",
    deployments: "./deployments",
  },
  mocha: {
    timeout: 20000
  }
};
