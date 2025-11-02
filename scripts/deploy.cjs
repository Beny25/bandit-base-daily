const hre = require("hardhat");

async function main() {
  console.log("🚀 Deploying BanditBase contract...");

  const BanditBase = await hre.ethers.getContractFactory("BanditBase");
  const contract = await BanditBase.deploy(
    "First onchain message: Hello, Base!",
    "Twitter: @alidepok1"
  );

  await contract.waitForDeployment();

  console.log(`✅ BanditBase deployed to: ${contract.target}`);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});

