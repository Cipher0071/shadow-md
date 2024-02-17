const { sck1, 
       strikeThrough,
    wingdings,
    vaporwave,
    typewriter,
    analucia,
    tildeStrikeThrough,
    underline,
    doubleUnderline,
    slashThrough,
    sparrow,
    heartsBetween,
    arrowBelow,
    crossAboveBelow,
    creepify,
    bubbles,
    mirror,
    squares,
    roundsquares,
    flip,
    tiny,
    createMap,
    serif_I,
    manga,
    ladybug,
    runes,
    serif_B,
    serif_BI,
       cmd,
       ffmpeg } = require('../lib/')
/*cmd({
            pattern: "fancy",
            desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
        },
        async(Void, citel, text) => {
            if (isNaN(text.split(" ")[0]) || !text) {
                let text = tiny(
                    "Fancy text generator\n\nExample: .fancy 32 Secktor\n\n"
                );
                listall("Secktor Bot").forEach((txt, num) => {
                    text += `${(num += 1)} ${txt}\n`;
                });
                return await citel.reply(text);
            }

            let fancytextt = await fancytext(`${text.slice(2)}`, text.split(" ")[0])
            citel.reply(fancytextt)

        }
    )*/



cmd(
  {
    pattern: 'ladybug ?(.*)',
     desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: ' reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = ladybug(text);

    return await citel.reply(fancyText);
  }
);

// Command for runes
cmd(
  {
    pattern: 'runes ?(.*)',
     desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = runes(text);

    return await citel.reply(fancyText);
  }
);

// Command for serif_B
cmd(
  {
    pattern: 'serif_B ?(.*)',
     desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = serif_B(text);

    return await citel.reply(fancyText);
  }
);

// Command for serif_BI
cmd(
  {
    pattern: 'serif_BI ?(.*)',
    desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = serif_BI(text);

    return await citel.reply(fancyText);
  }
);

// Command for serif_I
cmd(
  {
    pattern: 'serif_I ?(.*)',
     desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = serif_I(text);

    return await citel.reply(fancyText);
  }
);

cmd(
  {
    pattern: 'flip ?(.*)',
     desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = flip(text);

    return await citel.reply(fancyText);
  }
);

// Command for tiny
cmd(
  {
    pattern: 'tiny ?(.*)',
     desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = tiny(text);

    return await citel.reply(fancyText);
  }
);

// Command for createMap
cmd(
  {
    pattern: 'createMap ?(.*)',
     desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = createMap(text);

    return await citel.reply(fancyText);
  }
);

// Command for manga
cmd(
  {
    pattern: 'manga ?(.*)',
     desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = manga(text);

    return await citel.reply(fancyText);
  }
);

cmd(
  {
    pattern: 'creepify ?(.*)',
    desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = creepify(text);

    return await citel.reply(fancyText);
  }
);

// Command for bubbles
cmd(
  {
    pattern: 'bubbles ?(.*)',
    desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = bubbles(text);

    return await citel.reply(fancyText);
  }
);

// Command for mirror
cmd(
  {
    pattern: 'mirror ?(.*)',
   desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = mirror(text);

    return await citel.reply(fancyText);
  }
);

// Command for squares
cmd(
  {
    pattern: 'squares ?(.*)',
    desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = squares(text);

    return await citel.reply(fancyText);
  }
);

// Command for roundsquares
cmd(
  {
    pattern: 'roundsquares ?(.*)',
   desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = roundsquares(text);

    return await citel.reply(fancyText);
  }
);

cmd(
  {
    pattern: 'doubleUnderline ?(.*)',
     desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = doubleUnderline(text);

    return await citel.reply(fancyText);
  }
);

// Command for slashThrough
cmd(
  {
    pattern: 'slashThrough ?(.*)',
    desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = slashThrough(text);

    return await citel.reply(fancyText);
  }
);

// Command for heartsBetween
cmd(
  {
    pattern: 'heartsBetween ?(.*)',
     desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = heartsBetween(text);

    return await citel.reply(fancyText);
  }
);

// Command for arrowBelow
cmd(
  {
    pattern: 'arrowBelow ?(.*)',
     desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = arrowBelow(text);

    return await citel.reply(fancyText);
  }
);

// Command for crossAboveBelow
cmd(
  {
    pattern: 'crossAboveBelow ?(.*)',
    desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = crossAboveBelow(text);

    return await citel.reply(fancyText);
  }
);

cmd(
  {
    pattern: 'typewriter ?(.*)',
     desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = typewriter(text);

    return await citel.reply(fancyText);
  }
);

// Command for analucia
cmd(
  {
    pattern: 'analucia ?(.*)',
     desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = analucia(text);

    return await citel.reply(fancyText);
  }
);

// Command for tildeStrikeThrough
cmd(
  {
    pattern: 'tildeStrikeThrough ?(.*)',
     desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = tildeStrikeThrough(text);

    return await citel.reply(fancyText);
  }
);

// Command for underline
cmd(
  {
    pattern: 'underline ?(.*)',
     desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmdmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = underline(text);

    return await citel.reply(fancyText);
  }
);


cmd(
  {
    pattern: 'vaporwave ?(.*)',
   desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmdmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = vaporwave(text);

    return await citel.reply(fancyText);
  }
);

cmd(
  {
    pattern: 'strikeThrough ?(.*)',
   desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmdmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = strikeThrough(text);

    return await citel.reply(fancyText);
  }
);

// Command for wingdings
cmd(
  {
    pattern: 'wingdings ?(.*)',
    desc: "Makes stylish/fancy given text",
            category: "Textmaker",
            use: 'reply to text with <prefix> <cmd>',
            react: "✅",
            filename: __filename
  },
  async(Void, citel, text) => {
    const textmdmd = text[1] || (citel.reply_message && citel.reply_message.text) || "Cipher";
    const fancyText = wingdings(text);

    return await citel.reply(fancyText);
  }
);
