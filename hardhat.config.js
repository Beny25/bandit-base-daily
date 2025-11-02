import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";
import "dotenv/config";

const PRIVATE_KEY_DEPLOYER = process.env.PRIVATE_KEY_DEPLOYER;
const BASE_RPC_URL = process.env.BASE_RPC_URL;

const config = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: { enabled: true, runs: 200 },
    },
  },
  networks: {
    base: {
      url: BASE_RPC_URL,
      accounts: [PRIVATE_KEY_DEPLOYER],
    },
  },
};

export default config;

