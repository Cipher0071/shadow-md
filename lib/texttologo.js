const shadow = require('../lib');
const Config = require('../config');
const maker = require('mumaker');
const { formatp, botpic, prefix, sck1, tlang, cmd, fetchJson, getBuffer } = require("../lib");
const axios = require('axios');
const fetch = require('node-fetch');

async function textToLogoGenerator(Void, citel, style, text1, text2) {
  try {
    let generatedLogo;
    const apiUrl = `https://textpro.me/${style}.html`;
    if (text2) {
      generatedLogo = await maker.textpro(apiUrl, [text1, text2]);
    } 
    else {
      generatedLogo = await maker.textpro(apiUrl, text1);
    }
    return await Void.sendMessage(citel.chat, {
      'image': {
        'url': generatedLogo.image
      },
      'caption': 'Generated Logo'
    }, {
      'quoted': citel
    });
  } catch (error) {
    console.error("Error in textToLogoGenerator:", error);
    return await citel.reply("An unexpected error occurred. Please try again later.");
  }
}
module.exports = {
  textToLogoGenerator
};
