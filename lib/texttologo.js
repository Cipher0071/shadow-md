let { fancytext, tiny, runtime, formatp, botpic, prefix, sck1, tlang, cmd, fetchJson, getBuffer } = require("../lib");
async function texttologo(Void, citel, url = '', text1, text2) {
  const maker = require("mumaker");
  try {
    let anu;
    let logourl = "https://textpro.me/" + url + ".html";
    if (text1 && !text2) {
      anu = await maker.textpro(logourl, text1);
    } else if (text1 && text2) {
      anu = await maker.textpro(logourl, [text1, text2]);
    }
    return await Void.sendMessage(citel.chat, {
      'image': {
        'url': anu.image
      },
      'caption': `*𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${tlang().title}*`
    }, {
      'quoted': citel
    });
  } catch (error) {
    console.log("error For texttologo : ", error);
    return await citel.send("*_Error while Generating Your logo_\n_please try again_*");
  }
}
module.exports = texttologo;
