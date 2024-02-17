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
const Config = require('../config')
let {  cmd, lang , texttologo, prefix } = require("../lib");
//-----------------------------------------------------------------------------------
cmd({ pattern: "slice", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
        if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
        return await texttologo(Shadow, msg, 'create-light-glow-sliced-text-effect-online-1068' , text )
    })
//-----------------------------------------------------------------------------------
cmd({ pattern: "glow", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
        if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
        return await texttologo(Shadow, msg, 'free-advanced-glow-text-effect-873' , text )
    })
//----------------------------------------------------------------------------------- 
cmd({ pattern: "gitch1", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
       if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
        return await texttologo(Shadow, msg, 'create-impressive-glitch-text-effects-online-1027' , text )        
    }) 
//---------------------------------------------------------------------------
//================================================================================================
cmd({ pattern: "steal",category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
            //if (!text) return msg.reply(`*_Example : ${prefix+cmdName} text1;text2_*`);
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await msg.reply(`*_Example : ${prefix+cmdName} text1;text2_*`);
            return await texttologo(Shadow, msg, '3d-steel-text-effect-877' , text1 , text2 )
        })
//-----------------------------------------------------------------------------------
cmd({ pattern: "avenger",category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
            //if (!text) return msg.reply(`*_Example : ${prefix+cmdName} text1;text2_*`); 
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await msg.reply(`*_Example : ${prefix+cmdName} text1;text2_*`);
            return await texttologo(Shadow, msg,'create-3d-avengers-logo-online-974' , text1 , text2 )
        })
//-----------------------------------------------------------------------------------
cmd({ pattern: "marvel",category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
            ///if (!text) return msg.reply(`*_Example : ${prefix+cmdName} text1;text2_*`); 
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await msg.reply(`*_Example : ${prefix+cmdName} text1;text2_*`);
            return await texttologo(Shadow, msg, 'create-logo-style-marvel-studios-ver-metal-972' , text1 , text2 )
        })
//-----------------------------------------------------------------------------------
cmd({ pattern: "phub",category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
           // if (!text) return msg.reply(`*_Example : ${prefix+cmdName} text1;text2_*`); 
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await msg.reply(`*_Example : ${prefix+cmdName} text1;text2_*`);
            return await texttologo(Shadow, msg, 'pornhub-style-logo-online-generator-free-977' , text1 , text2 )
        })
//-----------------------------------------------------------------------------------

cmd({ pattern: "glitch",category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
            //if (!text) return msg.reply(`*_Example : ${prefix+cmdName} text1;text2_*`); 
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await msg.reply(`*_Example : ${prefix+cmdName} text1;text2_*`);
            return await texttologo(Shadow, msg,'create-glitch-text-effect-style-tik-tok-983', text1 , text2 )
        })
//-----------------------------------------------------------------------------------
cmd({ pattern: "glitch2",category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
            //if (!text) return msg.reply(`*_Example : ${prefix+cmdName} text1;text2_*`);
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await msg.reply(`*_Example : ${prefix+cmdName} text1;text2_*`);
            return await texttologo(Shadow, msg, 'create-a-glitch-text-effect-online-free-1026' , text1 , text2 )
        })
//-----------------------------------------------------------------------------------
cmd({ pattern: "grafiti",category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
            //if (!text) return msg.reply(`*_Example : ${prefix+cmdName} text1;text2_*`);  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await msg.reply(`*_Example : ${prefix+cmdName} text1;text2_*`);
            return await texttologo(Shadow, msg,'create-a-cool-graffiti-text-on-the-wall-1010'  , text1 , text2 )
        })
//================================================================================================

//---------------------------------------------------------------------------
    cmd({ pattern: "deepsea", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
        if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
        return await texttologo(Shadow, msg, 'create-3d-deep-sea-metal-text-effect-online-1053' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "horror", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
        if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
        return await texttologo(Shadow, msg,'horror-blood-text-effect-online-883'  , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "whitebear", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
         if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
        return await texttologo(Shadow, msg,'online-black-and-white-bear-mascot-logo-creation-1012', text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "joker", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
         if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
        return await texttologo(Shadow, msg, 'create-logo-joker-online-934' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "metallic", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
         if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
        return await texttologo(Shadow, msg, 'create-a-metallic-text-effect-free-online-1041' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "steel", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
         if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
        return await texttologo(Shadow, msg, 'steel-text-effect-online-921' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "harrypotter", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
         if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
        return await texttologo(Shadow, msg, 'create-harry-potter-text-effect-online-1025' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "underwater", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
         if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
        return await texttologo(Shadow, msg, '3d-underwater-text-effect-generator-online-1013' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "luxury", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
         if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
        return await texttologo(Shadow, msg, '3d-luxury-gold-text-effect-online-1003' , text )

    })
    //---------------------------------------------------------------------------
cmd({ pattern: "glue", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
         if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
        return await texttologo(Shadow, msg, 'create-3d-glue-text-effect-with-realistic-style-986' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "fabric", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
         if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
        return await texttologo(Shadow, msg, 'fabric-text-effect-online-964' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "toxic", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
         if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
        return await texttologo(Shadow, msg, 'toxic-text-effect-online-901' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "ancient", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
         if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
        return await texttologo(Shadow, msg, '3d-golden-ancient-text-effect-online-free-1060' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "cloud", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
             if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
            return await texttologo(Shadow, msg, 'create-a-cloud-text-effect-on-the-sky-online-1004' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "transformer", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
             if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
            return await texttologo(Shadow, msg, 'create-a-transformer-text-effect-online-1035' , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "thunder", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
             if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
            return await texttologo(Shadow, msg,'online-thunder-text-effect-generator-1031'  , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "scifi", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
             if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
            return await texttologo(Shadow, msg, 'create-3d-sci-fi-text-effect-online-1050' , text )
        })
    //---------------------------------------------------------------------------
cmd({pattern: "sand", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
             if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
            return await texttologo(Shadow, msg,'write-in-sand-summer-beach-free-online-991'  , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "rainbow", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
             if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
            return await texttologo(Shadow, msg, '3d-rainbow-color-calligraphy-text-effect-1049' , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "pencil", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
             if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
            return await texttologo(Shadow, msg, 'create-a-sketch-text-effect-online-1044' , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "neon", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
             if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
            return await texttologo(Shadow, msg, 'create-3d-neon-light-text-effect-online-1028' , text )
        })
    //---------------------------------------------------------------------------
cmd({pattern: "magma", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
             if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
            return await texttologo(Shadow, msg,'create-a-magma-hot-text-effect-online-1030'  , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "leaves", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
             if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
            return await texttologo(Shadow, msg, 'natural-leaves-text-effect-931' , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "discovery", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
             if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
            return await texttologo(Shadow, msg, 'create-space-text-effects-online-free-1042' , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "christmas", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
             if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
            return await texttologo(Shadow, msg,'christmas-tree-text-effect-online-free-1057'  , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "candy", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
             if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
            return await texttologo(Shadow, msg, 'create-christmas-candy-cane-text-effect-1056' , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "1917", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
             if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
            return await texttologo(Shadow, msg, '1917-style-text-effect-online-980' , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "blackpink", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Shadow, msg, text, {cmdName}) => {
         if (!text) return msg.reply(`*_Example : ${prefix+cmdName} Shadow_*`);
        return await texttologo(Shadow, msg, 'create-blackpink-logo-style-online-1001' , text )
    })
