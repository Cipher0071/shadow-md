
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
//https://api.telegra.ph/createPage?access_token=d3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722&title=Shadow+Bot&author_name=Cipher0071&content=[%7B"tag":"p","children":["${a.replace(/ /g,'+')}"]%7D]&return_content=true
const { cmd } = require('../lib');
const util = require('util');
const axios = require('axios');

cmd({
    pattern: "paste",
    desc: "create paste of text.",
    category: "extra",
    filename: __filename,
},
    async (Void, citel, text) => {
        let y = citel.quoted ? citel.quoted.text;
     if (!citel.quoted && citel.quoted.text ) {
            return citel.reply("Please reply to a message to create a paste.");
        }

        let { data } = await axios.get(`https://api.telegra.ph/createPage?access_token=d3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722&title=Shadow+Bot&author_name=Cipher0071&content=[%7B"tag":"p","children":["${y.replace(/ /g,'+')}"]%7D]&return_content=true`);
        return citel.reply(`*Paste created on telegraph*\nName:-${util.format(data.result.title)} \nUrl:- ${util.format(data.result.url)}`)
    }
);
