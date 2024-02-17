const { cmd, getBuffer,Config, prefix } = require('../lib');
const fetch = require('node-fetch');
const similarity = require('similarity');

const timeout = 120000;

// Function to start the guessing game
cmd({
    pattern: 'guessflag',
    desc: 'Starts a guessing game',
    category: 'game',
}, async (Void, citel, text) => {
    citel.tebakbendera = citel.tebakbendera || {};

    let id = citel.chat;
    if (id in citel.tebakbendera) {
        await citel.reply(citel.chat, 'There are still unanswered questions in this chat', citel.tebakbendera[id][0]);
        throw false;
    }

    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')).json();
    let json = src[Math.floor(Math.random() * src.length)];
    let caption = `*guessflag*
Timeout *${(timeout / 1000).toFixed(2)} second*
Use the command ${prefix}answer to answer the question
Use the command ${prefix}hint for a hint
    `.trim();

    citel.tebakbendera[id] = [
        await Void.sendFile(citel.chat, json.img, '', caption, citel),
        json,
        setTimeout(() => {
            if (citel.tebakbendera[id]) {
                citel.reply(citel.chat, `Time's up!\nThe answer is *${json.name}*`, citel.tebakbendera[id][0]);
                delete citel.tebakbendera[id];
            }
        }, timeout)
    ];
});

// Function to answer the game
cmd({
    pattern: 'answer',
    desc: 'Answer the guessing game',
    category: 'game',
}, async (Void, citel, text) => {
    let id = citel.chat;

    citel.tebakbendera = citel.tebakbendera || {};
    
    if (!(id in citel.tebakbendera)) throw false;
    
    let json = citel.tebakbendera[id][1];
    
    if (text.trim().toLowerCase() == json.name.toLowerCase().trim()) {
        await citel.reply(citel.chat, '✅ *Correct!*', citel);
    } else {
        await citel.reply(citel.chat, '❌ *Wrong!*', citel);
    }

    delete citel.tebakbendera[id];
});

// Function to get a hint during the guessing game
cmd({
    pattern: 'hint',
    desc: 'Get a hint during the guessing game',
    category: 'game',
}, async (Void, citel) => {
    let id = citel.chat;

    citel.tebakbendera = citel.tebakbendera || {};
    
    if (!(id in citel.tebakbendera)) throw false;
    
    let json = citel.tebakbendera[id][1];
    
    await citel.reply(citel.chat, '```' + json.name.replace(/[AIUEOaiueo]/ig, '_') + '```', citel);
});
