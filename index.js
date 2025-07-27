import express from 'express';
import axios from 'axios';
import { Telegraf } from 'telegraf';

const app = express();
app.use(express.json());

const token = '7864659740:AAG-sRx4DonxufjGD5qoLLegHUQV0c_MSng'; //replace with ur token
const bot = new Telegraf(token);

const aiUrl = 'https://api.llm7.io/v1/chat/completions';

bot.on('text', async (ctx) => {
    const userMsg = ctx.message.text;

    try {
        const response = await axios.post(aiUrl, {
            model: 'deepseek-coder-33b-instruct', // ya koi aur model try karlo
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: userMsg }
            ],
            temperature: 0.7,
            max_tokens: 200
        });

        const replyText = response.data.choices[0].message.content;
        await ctx.reply(replyText);

        // console.log('User:', userMsg);
        // console.log('AI:', replyText);

    } catch (error) {
        console.error('❌ AI API Error:', error.response?.data || error.message);
        await ctx.reply('😞 Sorry, AI kuch reply nahi de paaya.');
    }
});

bot.launch();
app.listen(3000, () => {
    console.log('✅ Server + Bot running on http://localhost:3000');
});
