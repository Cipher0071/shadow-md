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

const {cmd } = require('../lib')
cmd({
        pattern: "insta",
        desc: "download instagram post.",
        category: "downloader",
        filename: __filename
    },
   async (Void, citel, text, { isCreator }) => {
    const { Insta } = require('../lib');

    try {
        if (!text) {
            throw new Error('Need post URL.');
        }

        let response = await Insta(text);

        if (!response || response.length === 0) {
            throw new Error('No media found on Instagram.');
        }

        for (let i = 0; i < response.length; i++) {
            await Void.sendFileUrl(citel.chat, response[i], `*Downloaded Media from Instagram.*`, citel);
        }

    } catch (error) {
        console.error('Error in Instagram download command:', error);
        return citel.reply('Error encountered. Please try again later.\n or try with another link');
    }
}

    });
