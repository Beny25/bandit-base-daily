import hre from "hardhat";

async function main() {
  console.log("Deploying BanditBase contract..."); 

  const BanditBase = await hre.ethers.getContractFactory("BanditBase");
  console.log("Contract factory loaded..."); 

  const contract = await BanditBase.deploy(
    "First onchain message: Hello, Base!",
    "Twitter: @alidepok1"
  );

  console.log("Transaction sent, waiting for confirmation..."); 
  await contract.waitForDeployment();

  const address = await contract.getAddress();
  console.log(`BanditBase deployed successfully at: ${address}`); 
}

main().catch((err) => {
  console.error("Deployment failed:", err); 
  process.exitCode = 1;
});
