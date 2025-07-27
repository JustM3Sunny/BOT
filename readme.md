# 🤖 AI Telegram Chat Bot (Powered by LLM7.io)

A blazing-fast, plug-and-play AI Telegram bot built with [Telegraf](https://telegraf.js.org/) and [LLM7.io](https://api.llm7.io/v1/chat/completions). No OpenAI API key required — just set your Telegram token and start chatting!

> Crafted with ❤️ by [JustM3Sunny](https://github.com/JustM3Sunny)

---

## 🚀 Live Demo & Repository

- **GitHub:** [JustM3Sunny/BOT](https://github.com/JustM3Sunny/BOT)

---

## ✨ Features

- 🤖 **Conversational AI:** Natural, context-aware replies in Telegram
- 🔌 **LLM7.io Integration:** OpenAI-compatible API, no key needed
- ⚡ **Multiple Models:** DeepSeek, GPT-4o Mini, Mistral, Llama, Gemma & more
- 🧠 **Context Memory:** Uses OpenAI's `chat/completions` schema for smart conversations
- 🛡️ **Privacy First:** No data logging, runs on your own Telegram bot
- 🛠️ **Minimal Setup:** Clean Express + Telegraf codebase

---

## 🛠️ Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/JustM3Sunny/BOT.git
cd BOT
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Your Telegram Bot Token

- Open `index.js` and replace `'YOUR_BOT_TOKEN_HERE'` with your Telegram bot token:

```js
const token = 'YOUR_BOT_TOKEN_HERE';
```

- Or, create a `.env` file:

```
BOT_TOKEN=your-telegram-bot-token
```

### 4. Run the Bot

```bash
node index.js
```

Your bot is now live and ready to chat on Telegram! 🎉

---

## 🧠 Core Logic Example

```js
const response = await axios.post('https://api.llm7.io/v1/chat/completions', {
    model: 'deepseek-coder-33b-instruct',
    messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: userMsg }
    ]
});
ctx.reply(response.data.choices[0].message.content);
```

---

## 🤯 Supported LLM Models

Try any of these models by changing the `model` parameter:

- `deepseek-coder-33b-instruct`
- `gpt-4o-mini-2024-07-18`
- `mistral-7b-instruct`
- `llama-3.1-70b-instruct`
- `gemma-7b-it`

---

## 💡 Use Cases

- Personal AI assistant in Telegram
- Coding help, brainstorming, and Q&A
- Group chat automation and moderation
- Fun AI-powered conversations

---

## 🙌 Credits

- Built with 💪 by [JustM3Sunny](https://github.com/JustM3Sunny)
- 📂 [GitHub Repo](https://github.com/JustM3Sunny/BOT)

---

## 📜 License

MIT — Free to use, modify, and share. Contributions welcome!

---