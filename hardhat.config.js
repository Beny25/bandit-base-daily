import { config as dotenvConfig } from "dotenv";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";

dotenvConfig();

const PRIVATE_KEY = process.env.PRIVATE_KEY_DEPLOYER;
const BASE_RPC_URL = process.env.BASE_RPC_URL;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const config = {
  solidity: "0.8.24",
  networks: {
    base: {
      url: BASE_RPC_URL || "https://developer-access-mainnet.base.org",
      accounts: [PRIVATE_KEY],
    },
  },
  sourcify: {
    enabled: true,
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY, // ✅ Gunakan Etherscan V2 global key
    apiUrl: "https://api.etherscan.io/v2/api", // ✅ endpoint baru V2
    customChains: [
      {
        network: "base",
        chainId: 8453,
        urls: {
          apiURL: "https://api.etherscan.io/v2/api", // ✅ pakai Etherscan API V2
          browserURL: "https://basescan.org",
        },
      },
    ],
  },
};

export default config;
