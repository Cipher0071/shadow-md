
/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/
//---------------------------------------------------------------------------
const { cmd } = require('../lib');
const util = require('util');
const axios = require('axios');
const PastebinAPI = require("pastebin-js");
pastebin = new PastebinAPI("EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL");
cmd({
        pattern: "pastebin",
        desc: "pastes quoted text on pastebin",
        category: "converter",
        filename: __filename,
    },
    async(Void, citel,text) => {
 if (!text) { text=citel.quoted.text;}
        if(!text) return citel.reply('Please reply to any text to get link.');
        let data = await pastebin.createPaste(text, "secktor bot");
        return citel.reply('_Here is your link._\n'+data+'\n*Click to Get Your Text*');
    }
);
cmd({
    pattern: "paste",
    desc: "pastes quoted text on telegraph.",
    category: "extra",
    filename: __filename,
},
    async (Void, citel, text) => {
        let y = citel.quoted ? citel.quoted.text : null;
        
        if (!y) {
            return citel.reply("Please reply to a message to create a paste.");
        }

        let { data } = await axios.get(`https://api.telegra.ph/createPage?access_token=d3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722&title=Shadow+Bot&author_name=Cipher0071&content=[%7B"tag":"p","children":["${y.replace(/ /g,'+')}"]%7D]&return_content=true`);
        return citel.reply(`*Paste created on telegraph*\nName:-${util.format(data.result.title)} \nUrl:- ${util.format(data.result.url)}`)
    }
);
