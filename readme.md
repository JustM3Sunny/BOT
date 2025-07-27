# 🤖 AI Telegram Chat Bot (Powered by LLM7.io)

A simple, powerful AI Telegram bot built using [Telegraf](https://telegraf.js.org/) and [LLM7.io](https://api.llm7.io/v1/chat/completions) — completely OpenAI-compatible, no API key needed. Just plug and play.

> Made with ❤️ by [JustM3Sunny](https://github.com/JustM3Sunny)

---

## 🚀 Live Repo

🔗 [https://github.com/JustM3Sunny/BOT](https://github.com/JustM3Sunny/BOT)

---

## ⚙️ Features

- ✅ Telegram Bot with natural language replies
- 🔌 LLM7.io integration (OpenAI-compatible endpoint)
- ⚡ Supports DeepSeek, GPT-4o Mini, Mistral, and more
- 📜 Clean, minimal Express + Telegraf setup
- 🧠 Message context using OpenAI's `chat/completions` schema

---

## 🛠️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/JustM3Sunny/BOT.git
cd BOT
2. Install Dependencies
bash
Copy
Edit
npm install
3. Add Your Telegram Bot Token
Update the token in the code:

js
Copy
Edit
const token = 'YOUR_BOT_TOKEN_HERE';
Or use .env file (optional).

4. Run the Bot
bash
Copy
Edit
node index.js
Bot will launch and listen for Telegram messages 🎉

🧠 Sample Code (Core Logic)
js
Copy
Edit
const response = await axios.post('https://api.llm7.io/v1/chat/completions', {
  model: 'deepseek-coder-33b-instruct',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: userMsg }
  ]
});
ctx.reply(response.data.choices[0].message.content);
🤯 Available LLM Models
Try any of the following:

deepseek-coder-33b-instruct

gpt-4o-mini-2024-07-18

mistral-7b-instruct

llama-3.1-70b-instruct

gemma-7b-it

🧑‍💻 Credits
Built with 💪 by JustM3Sunny
📂 Repo: BOT

📜 License
MIT — Feel free to use, modify & share.