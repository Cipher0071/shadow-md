/**
 Copyright (C) 2024.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Void-Md
 * @author : Cipher0071 <https://github.com/Cipher0071>
 * @description : Void,A Multi-functional whatsapp bot.
 * @version 0.0.1
 **/
//-----------------------------------------------------------------------------------
const Config = require('../config')
const texttologo = require("../lib/texttologo");
const {  cmd, lang , prefix } = require("../lib");
//-----------------------------------------------------------------------------------
cmd({ pattern: "slice" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
        if (!text) return citel.reply(`*_Example : ${prefix}slice  Void_*`);
        return await texttologo(Void, citel, 'create-light-glow-sliced-text-effect-online-1068' , text )
    })
//-----------------------------------------------------------------------------------
cmd({ pattern: "glow" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
        if (!text) return citel.reply(`*_Example : ${prefix}glow Void_*`);
        return await texttologo(Void, citel, 'free-advanced-glow-text-effect-873' , text )
    })
//----------------------------------------------------------------------------------- 
cmd({ pattern: "glitch1" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
       if (!text) return citel.reply(`*_Example : ${prefix}glitch1 Void_*`);
        return await texttologo(Void, citel, 'create-impressive-glitch-text-effects-online-1027' , text )        
    }) 
//---------------------------------------------------------------------------
//================================================================================================
cmd({ pattern: "steal",category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            //if (!text) return citel.reply(`*_Example : ${prefix} text1;text2_*`);
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply(`*_Example : ${prefix}steal text1;text2_*`);
            return await texttologo(Void, citel, '3d-steel-text-effect-877' , text1 , text2 )
        })
//-----------------------------------------------------------------------------------
cmd({ pattern: "avenger",category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            //if (!text) return citel.reply(`*_Example : ${prefix} text1;text2_*`); 
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply(`*_Example : ${prefix}avenger text1;text2_*`);
            return await texttologo(Void, citel,'create-3d-avengers-logo-online-974' , text1 , text2 )
        })
//-----------------------------------------------------------------------------------
cmd({ pattern: "marvel",category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            ///if (!text) return citel.reply(`*_Example : ${prefix} text1;text2_*`); 
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply(`*_Example : ${prefix}marvel text1;text2_*`);
            return await texttologo(Void, citel, 'create-logo-style-marvel-studios-ver-metal-972' , text1 , text2 )
        })
//-----------------------------------------------------------------------------------
cmd({ pattern: "phub",category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
           // if (!text) return citel.reply(`*_Example : ${prefix} text1;text2_*`); 
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply(`*_Example : ${prefix}phub text1;text2_*`);
            return await texttologo(Void, citel, 'pornhub-style-logo-online-generator-free-977' , text1 , text2 )
        })
//-----------------------------------------------------------------------------------

cmd({ pattern: "glitch",category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            //if (!text) return citel.reply(`*_Example : ${prefix} text1;text2_*`); 
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply(`*_Example : ${prefix}glitch text1;text2_*`);
            return await texttologo(Void, citel,'create-glitch-text-effect-style-tik-tok-983', text1 , text2 )
        })
//-----------------------------------------------------------------------------------
cmd({ pattern: "glitch2",category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            //if (!text) return citel.reply(`*_Example : ${prefix} text1;text2_*`);
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply(`*_Example : ${prefix}glitch2 text1;text2_*`);
            return await texttologo(Void, citel, 'create-a-glitch-text-effect-online-free-1026' , text1 , text2 )
        })
//-----------------------------------------------------------------------------------
cmd({ pattern: "grafiti",category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            //if (!text) return citel.reply(`*_Example : ${prefix} text1;text2_*`);  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply(`*_Example : ${prefix}grafiti text1;text2_*`);
            return await texttologo(Void, citel,'create-a-cool-graffiti-text-on-the-wall-1010'  , text1 , text2 )
        })
//================================================================================================

//---------------------------------------------------------------------------
    cmd({ pattern: "deepsea" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
        if (!text) return citel.reply(`*_Example : ${prefix}deeepsea Void_*`);
        return await texttologo(Void, citel, 'create-3d-deep-sea-metal-text-effect-online-1053' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "horror" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
        if (!text) return citel.reply(`*_Example : ${prefix}horror Void_*`);
        return await texttologo(Void, citel,'horror-blood-text-effect-online-883'  , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "whitebear" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
         if (!text) return citel.reply(`*_Example : ${prefix} Void_*`);
        return await texttologo(Void, citel,'online-black-and-white-bear-mascot-logo-creation-1012', text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "joker" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
         if (!text) return citel.reply(`*_Example : ${prefix}joker Void_*`);
        return await texttologo(Void, citel, 'create-logo-joker-online-934' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "metallic" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
         if (!text) return citel.reply(`*_Example : ${prefix}metallic Void_*`);
        return await texttologo(Void, citel, 'create-a-metallic-text-effect-free-online-1041' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "steel" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
         if (!text) return citel.reply(`*_Example : ${prefix}steel Void_*`);
        return await texttologo(Void, citel, 'steel-text-effect-online-921' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "harrypotter" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
         if (!text) return citel.reply(`*_Example : ${prefix}harrypotter Void_*`);
        return await texttologo(Void, citel, 'create-harry-potter-text-effect-online-1025' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "underwater" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
         if (!text) return citel.reply(`*_Example : ${prefix} Void_*`);
        return await texttologo(Void, citel, '3d-underwater-text-effect-generator-online-1013' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "luxury" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
         if (!text) return citel.reply(`*_Example : ${prefix}luxury Void_*`);
        return await texttologo(Void, citel, '3d-luxury-gold-text-effect-online-1003' , text )

    })
    //---------------------------------------------------------------------------
cmd({ pattern: "glue" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
         if (!text) return citel.reply(`*_Example : ${prefix}glue Void_*`);
        return await texttologo(Void, citel, 'create-3d-glue-text-effect-with-realistic-style-986' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "fabric" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
         if (!text) return citel.reply(`*_Example : ${prefix}fabric Void_*`);
        return await texttologo(Void, citel, 'fabric-text-effect-online-964' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "toxic" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
         if (!text) return citel.reply(`*_Example : ${prefix}toxic Void_*`);
        return await texttologo(Void, citel, 'toxic-text-effect-online-901' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "ancient" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
         if (!text) return citel.reply(`*_Example : ${prefix}ancient Void_*`);
        return await texttologo(Void, citel, '3d-golden-ancient-text-effect-online-free-1060' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "cloud" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
             if (!text) return citel.reply(`*_Example : ${prefix}cloud Void_*`);
            return await texttologo(Void, citel, 'create-a-cloud-text-effect-on-the-sky-online-1004' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "transformer" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
             if (!text) return citel.reply(`*_Example : ${prefix}transformer Void_*`);
            return await texttologo(Void, citel, 'create-a-transformer-text-effect-online-1035' , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "thunder" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
             if (!text) return citel.reply(`*_Example : ${prefix}thunder Void_*`);
            return await texttologo(Void, citel,'online-thunder-text-effect-generator-1031'  , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "scifi" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
             if (!text) return citel.reply(`*_Example : ${prefix}scifi Void_*`);
            return await texttologo(Void, citel, 'create-3d-sci-fi-text-effect-online-1050' , text )
        })
    //---------------------------------------------------------------------------
cmd({pattern: "sand" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
             if (!text) return citel.reply(`*_Example : ${prefix}sand Void_*`);
            return await texttologo(Void, citel,'write-in-sand-summer-beach-free-online-991'  , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "rainbow" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
             if (!text) return citel.reply(`*_Example : ${prefix}rainbow Void_*`);
            return await texttologo(Void, citel, '3d-rainbow-color-calligraphy-text-effect-1049' , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "pencil" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
             if (!text) return citel.reply(`*_Example : ${prefix}pencil Void_*`);
            return await texttologo(Void, citel, 'create-a-sketch-text-effect-online-1044' , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "neon" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
             if (!text) return citel.reply(`*_Example : ${prefix}neon Void_*`);
            return await texttologo(Void, citel, 'create-3d-neon-light-text-effect-online-1028' , text )
        })
    //---------------------------------------------------------------------------
cmd({pattern: "magma" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
             if (!text) return citel.reply(`*_Example : ${prefix}magma Void_*`);
            return await texttologo(Void, citel,'create-a-magma-hot-text-effect-online-1030'  , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "leaves" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
             if (!text) return citel.reply(`*_Example : ${prefix}leaves Void_*`);
            return await texttologo(Void, citel, 'natural-leaves-text-effect-931' , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "discovery" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
             if (!text) return citel.reply(`*_Example : ${prefix}discovery Void_*`);
            return await texttologo(Void, citel, 'create-space-text-effects-online-free-1042' , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "christmas" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
             if (!text) return citel.reply(`*_Example : ${prefix}christmas Void_*`);
            return await texttologo(Void, citel,'christmas-tree-text-effect-online-free-1057'  , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "candy" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
             if (!text) return citel.reply(`*_Example : ${prefix}candy Void_*`);
            return await texttologo(Void, citel, 'create-christmas-candy-cane-text-effect-1056' , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "1917" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
             if (!text) return citel.reply(`*_Example : ${prefix}1917 Void_*`);
            return await texttologo(Void, citel, '1917-style-text-effect-online-980' , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "blackpink" , react: "👏" ,category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
         if (!text) return citel.reply(`*_Example : ${prefix}blackpink Void_*`);
        return await texttologo(Void, citel, 'create-blackpink-logo-style-online-1001' , text )
    })
