import "@nomicfoundation/hardhat-toolbox";
import hre from "hardhat";

async function main() {
  console.log("Deploying BanditBase contract...");

  // pastikan hre.ethers aktif
  if (!hre.ethers) {
    throw new Error("hre.ethers not found — check hardhat-toolbox import in config!");
  }

  const BanditBase = await hre.ethers.getContractFactory("BanditBase");
  console.log("Contract factory loaded...");

  const contract = await BanditBase.deploy(
    "First onchain message: Hello, Base!",
    "Twitter: @alidepok1"
  );

  console.log("Transaction broadcasted... waiting for deployment confirmation...");
  await contract.waitForDeployment();

  console.log(`BanditBase deployed to: ${contract.target}`);
}

main().catch((err) => {
  console.error("Deployment failed:", err);
  process.exitCode = 1;
});
