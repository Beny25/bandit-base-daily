import hre from "hardhat";
import dotenv from "dotenv";
import cron from "node-cron";
import fs from "fs";

dotenv.config();

const CONTRACT_ADDRESS = "0x669E987880d694E975198555331025944f438aCD";
const PRIVATE_KEY = process.env.PRIVATE_KEY_DEPLOYER;
const provider = new hre.ethers.JsonRpcProvider(process.env.BASE_RPC_URL);
const wallet = new hre.ethers.Wallet(PRIVATE_KEY, provider);

const COUNTER_FILE = "./day_counter.txt";

// Fungsi bantu untuk counter hari
async function getNextDayCount() {
  try {
    const data = fs.readFileSync(COUNTER_FILE, "utf8");
    return parseInt(data.trim()) + 1;
  } catch {
    return 1;
  }
}

async function saveDayCount(count) {
  fs.writeFileSync(COUNTER_FILE, count.toString());
}

// Ritual harian ✨
async function updateMessage() {
  const day = await getNextDayCount();
  const newMessage = `Day ${day} update message by @alidepok1`;

  console.log(`\n🕘 ${new Date().toLocaleString()} - Starting ritual...`);
  console.log(`💬 Updating on-chain message: "${newMessage}"`);

  const BanditBase = await hre.ethers.getContractFactory("BanditBase");
  const contract = BanditBase.attach(CONTRACT_ADDRESS);

  try {
    const tx = await contract.connect(wallet).updateMessage(newMessage);
    console.log(`🚀 TX sent: ${tx.hash}`);
    await tx.wait();

    console.log(`✅ Message updated successfully to: "${newMessage}"`);
    console.log(`🔔 Ritual complete! Another day survived in Base realm 💫\n`);

    saveDayCount(day);
  } catch (err) {
    console.error("❌ Update failed:", err.message);
  }
}

// Jadwal: tiap hari jam 09:00 pagi waktu server
cron.schedule("0 3 * * *", async () => {
  await updateMessage();
});

console.log("🟢 Bandit auto-updater is running... awaiting next ritual ⏳");

