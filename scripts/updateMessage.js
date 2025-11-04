import hre from "hardhat";
import dotenv from "dotenv";
import readline from "readline";

dotenv.config();

const CONTRACT_ADDRESS = "0x669E987880d694E975198555331025944f438aCD"; // alamat BanditBase kamu

// helper buat input manual di terminal
function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => rl.question(question, (ans) => {
    rl.close();
    resolve(ans);
  }));
}

async function main() {
  console.log("🧠 BanditBase Message Updater");
  console.log("-----------------------------");

  const newMessage = await ask("Masukkan pesan baru buat kontrak: ");

  if (!newMessage || newMessage.trim() === "") {
    throw new Error("Pesan gak boleh kosong, bro!");
  }

  console.log("\n🚀 Mengirim transaksi update...");
  const BanditBase = await hre.ethers.getContractFactory("BanditBase");
  const contract = BanditBase.attach(CONTRACT_ADDRESS);

  const tx = await contract.updateMessage(newMessage);
  console.log(`⛽ TX dikirim: ${tx.hash}`);

  await tx.wait();
  console.log(`✅ Pesan onchain berhasil diupdate jadi: "${newMessage}"`);
}

main().catch((err) => {
  console.error("❌ Gagal update message:", err);
  process.exitCode = 1;
});

