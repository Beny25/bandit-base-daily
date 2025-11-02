import hre from "hardhat";
import dotenv from "dotenv";

dotenv.config();

const NEW_OWNER = process.env.WALLET_UTAMA; // dari .env
const CONTRACT_ADDRESS = "0x669E987880d694E975198555331025944f438aCD";

async function main() {
  console.log("Transferring ownership to:", NEW_OWNER); 

  const BanditBase = await hre.ethers.getContractFactory("BanditBase");
  const contract = BanditBase.attach(CONTRACT_ADDRESS);

  const tx = await contract.transferOwnership(NEW_OWNER);
  console.log("Transaction sent:", tx.hash); 

  await tx.wait();
  console.log("Ownership successfully transferred to:", NEW_OWNER); 
}

main().catch((err) => {
  console.error("Ownership transfer failed:", err); 
  process.exitCode = 1;
});
