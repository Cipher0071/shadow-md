const axios = require('axios');
const { tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const fetch = require('node-fetch');
const Shadow = require('../lib/commands');

Shadow.cmd({
    pattern: "animequote",
    desc: "Sends random anime quotes in chat.",
    category: "weeb",
    filename: __filename,
    react: "😄",
},
    async (Void, citel, text) => {
        try {
            const res = await fetch('https://some-random-api.com/animu/quote');
            if (!res.ok) throw await res.text();
            const json = await res.json();
            const { sentence, character, anime } = json;
            const message = `📜𝐐𝐔𝐎𝐓𝐄:\n${sentence}\n\n👤𝐂𝐇𝐀𝐑𝐀𝐂𝐓𝐄𝐑: \`\`\`${character}\`\`\`\n🌟𝐀𝐍𝐈𝐌𝐄: \`\`\`${anime}\`\`\`\n`;
            await Void.sendMessage(citel.chat, { text: message }, 'extendedTextMessage', { quoted: citel });
        } catch (error) {
            console.error(error);
        }
    });
