/**
 Copyright (C) 2024.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Shadow-Md
 * @author : Cipher0071 <https://github.com/Cipher0071>
 * @description : Shadow,A Multi-functional whatsapp bot.
 * @version 0.0.1
 **/

//-----------------------------------------------------------------------------------
const shadow = require('../lib')
const Config = require('../config')
const maker = require('mumaker')
let { runtime, formatp, botpic, prefix, sck1, tlang, cmd, fetchJson, getBuffer  } = require("../lib");
const axios = require('axios');
const fetch = require('node-fetch');



//-----------------------------------------------------------------------------------
cmd({ pattern: "slice", category: "logo", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('*_Example : ${prefix}slice Shadow bot_*');
        let anu = await maker.textpro('https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html', text);
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel });
    })
//-----------------------------------------------------------------------------------
cmd({ pattern: "glow", category: "logo", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('*_Example : ${prefix}glow Shadow bot_*');
        let anu = await maker.textpro('https://textpro.me/free-advanced-glow-text-effect-873.html', text);
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel });
    })
//----------------------------------------------------------------------------------- 
cmd({ pattern: "gitch1", category: "logo", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('*_Example : ${prefix}gitch1 Shadow bot_*');
        let anu = await maker.textpro('https://textpro.me/create-impressive-glitch-text-effects-online-1027.html', text);
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel });
    }) 
//---------------------------------------------------------------------------
cmd({
            pattern: "stel",
            category: "logo",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('_Example : .steel Shadow;cipher info_');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: ${prefix}steel text1;text2*");
            let anu = await maker.textpro('https://textpro.me/3d-steel-text-effect-877.html', [text1, text2] );
            Void.sendMessage(citel.chat, { image: {url: anu },caption: `Made by ${tlang().title},For my ${tlang().greet}`}, { quoted: citel });
        }
    )

//-----------------------------------------------------------------------------------
cmd({
            pattern: "avenger",
            category: "logo",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('*_Example : .avenger Shadow;cipher_*');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: ${prefix}avenger text1;text2*");
            let anu = await maker.textpro('https://textpro.me/create-3d-avengers-logo-online-974.html', [text1, text2] );
            Void.sendMessage(citel.chat, { image: {url: anu },caption: `Made by ${tlang().title},For my ${tlang().greet}`}, { quoted: citel });
        }
    )
//-----------------------------------------------------------------------------------
cmd({
            pattern: "marvel",
            category: "logo",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('*_Example : .marvel Shadow;cipher_*');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: ${prefix}marvel text1;text2*");
            let anu = await maker.textpro('https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html', [text1, text2] );
            Void.sendMessage(citel.chat, { image: {url: anu },caption: `Made by ${tlang().title},For my ${tlang().greet}`}, { quoted: citel });
        }
    )
//-----------------------------------------------------------------------------------
cmd({
            pattern: "phub",
            category: "logo",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('*_Example : .phub Shadow;cipher_*');  
            const regex = /([^;]+);([^;]+)/;
            const match = text.match(regex);
            if (match) {
            let text1 = match[1];
            let text2 = match[2];}
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: ${prefix}phub text1;text2*");
            let anu = await maker.textpro('https://textpro.me/pornhub-style-logo-online-generator-free-977.html', [text1, text2] );
            Void.sendMessage(citel.chat, { image: {url: anu },caption: `Made by ${tlang().title},For my ${tlang().greet}`}, { quoted: citel });
        }
    )
//-----------------------------------------------------------------------------------

cmd({
            pattern: "glitch",
            category: "logo",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('*_Example : .glitch Shadow;cipher_*');  
            const regex = /([^;]+);([^;]+)/;
            const match = text.match(regex);
            if (match) {
            let text1 = match[1];
            let text2 = match[2];}
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: ${prefix}glitch text1;text2*");
            let anu = await maker.textpro('https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html', [text1, text2] );
            Void.sendMessage(citel.chat, { image: {url: anu },caption: `Made by ${tlang().title},For my ${tlang().greet}`}, { quoted: citel });
        }
    )
//-----------------------------------------------------------------------------------
cmd({
            pattern: "glitch2",
            category: "logo",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('*_Example : .glitch2 Shadow;cipher_*');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: ${prefix}glitch2 text1;text2*");
            let anu = await maker.textpro('https://textpro.me/create-a-glitch-text-effect-online-free-1026.html', [text1, text2] );
            Void.sendMessage(citel.chat, { image: {url: anu },caption: `Made by ${tlang().title},For my ${tlang().greet}`}, { quoted: citel });
        }
    )

//-----------------------------------------------------------------------------------
cmd({
            pattern: "grafiti",
            category: "logo",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('*_Example : .grafiti Shadow;cipher_*');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: ${prefix}grafiti text1;text2*");
            let anu = await maker.textpro('https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html', [text1, text2] );
            Void.sendMessage(citel.chat, { image: {url: anu },caption: `Made by ${tlang().title},For my ${tlang().greet}`}, { quoted: citel });
        }
    )
//-----------------------------------------------------------------------------------
