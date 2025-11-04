# 🧿 Bandit Base Daily

A small experiment on **Base** chain 
a contract that updates its own onchain message automatically every few minutes.
No bots, no trading — just pure onchain vibes 💫

---

## ⚙️ What’s inside

* **Hardhat + Node.js** setup
* **Cron scheduler (node-cron)** to trigger message updates
* **PM2** process manager to keep it alive (even after reboot)
* A Solidity contract: `BanditBase.sol`
* Each update writes a new message to the blockchain like:

  ```
  "Daily grind from @alidepok1 🚀"
  ```

---

## 🪄 Ritual flow

Every 10 minutes, the script sends a transaction to update the message:

```bash
🕘 Starting ritual...
💬 Updating on-chain message: "Daily grind from @alidepok1 🚀"
🚀 TX sent: <tx_hash>
✅ Message updated successfully!
🔔 Ritual complete! Another Base TX survived 💫
```

---

## 🧰 Tech Stack

| Tool      | Purpose                        |
| --------- | ------------------------------ |
| Solidity  | Smart contract                 |
| Hardhat   | Compilation & deployment       |
| Node.js   | Script automation              |
| Node-cron | Scheduling updates             |
| PM2       | Keeps process alive            |
| Base      | Chain of choice (fast + cheap) |

---

## 🌐 Live Contract

`BanditBase.sol` deployed at
👉 [0x669E987880d694E975198555331025944f438aCD](https://basescan.org/address/0x669E987880d694E975198555331025944f438aCD)

Current onchain message:

> “manual test bandit(@alidepok1)”

---

## 🧘‍♂️ Why

Just curiosity, caffeine, and a little onchain fun.
Learning automation, Hardhat quirks, and Base gas efficiency — one block at a time.

---

## 🧩 Future ideas

* Auto-verification on BaseScan (v2 API)
* Chainlink Automation version (no PC required)
* Frontend dashboard for message logs

---

### ⚡ Credits

Made by [Bandit.base.eth](https://x.com/alidepok1)
Base enjoyer. Sleep deprived. Still deploying.


