const { cmd, commands } = require('../command')
const dl = require('@bochilteam/scraper')  
const ytdl = require('yt-search');
const fs = require('fs-extra')

cmd({
    pattern: "song2",
    alias: ["play2"],
    use: '.yts sameer kutti',
    react: "🎧",
    desc: "Search and get details from youtube.",
    category: "search",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if (!q) return reply('*Please give me quary to download*')
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]
const cap = `
*──────────────────*
_*🌸ＳＯＮＧ ＤＯＷＮＬＯＤＥＲ  2🌸*_
*──────────────────*

🌸 *Title :* ${anu.title}

🌸 *Duration :* ${anu.timestamp}

🌸 *Ago :* ${anu.ago}

🌸 *Views :* ${anu.views}

🌸 *URL :* ${anu.url}

_📤ᴜᴘʟᴏᴅɪɴɢ ʏᴏᴜʀ ᴀᴜᴅɪᴏ ꜰɪʟʟ📤_


> ALEXA-MD`

await conn.sendMessage(from, { image: { url: anu.thumbnail }, caption: cap}, { quoted: mek })
const yt2 = await dl.youtubedl(anu.url)
var du = await yt2.audio['128kbps'].download()
    let senda =  await conn.sendMessage(from, { document: { url : du }, mimetype: 'audio/mpeg', fileName: yt2.title + '.mp3',caption: '> ALEXA-MD' }, { quoted: mek })
    await conn.sendMessage(from, { react: { text: '✅', key: senda.key }})
  
} catch (e) {
  reply("- ERROR")
  l(e)
}
})
