const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349150690169";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://pobasuyi69:9UW3Yra6HZFUCT0B@cluster0.lum7yrw.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000 //dont change this when deploying to back4app if you did change back4app too
global.email = 'obasprom252@gmail.com'
global.github = 'https://github.com/Cipher0071/Shadow-bot'
global.location = 'Nigeria'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '2349150690169'
global.devs = '2349150690169';
global.website = 'https://github.com/Cipher0071/Shadow' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.pinimg.com/originals/51/a5/88/51a58806748ca1ee98507c287f9f8682.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '𝖘𝖍𝖆𝖉𝖔𝖜' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '𝖈𝖎𝖕𝖍𝖊𝖗' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,
  author:  process.env.PACK_INFO || "𝖘𝖍𝖆𝖉𝖔𝖜",
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO || "",
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'https://' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'delete' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'SHADOW',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
