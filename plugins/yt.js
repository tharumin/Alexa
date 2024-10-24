const {cmd , commands} = require('../command')
const { fetchJson } = require("../lib/functions")

cmd({
    pattern: "song2",
    desc: "Download song sever 2",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if (!q) return m.reply("*What song do you want to download ?*")
let search = await yts(q)
        let link = search.all[0].url

        let data = await fetchJson (`https://api.dreaded.site/api/ytdl/video?url=${link}`)

await reply("*🌸DOWNLOADING···*\n_${search.all[0].title}_\n> ALEXA")
await conn.sendMessage(from, {document: {url: data.result.downloadLink},mimetype: "audio/mp3",fileName: `${search.all[0].title}.mp3`,caption: `*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·* 🧑🏻‍💻`}, { quoted: mek })

}catch(e){
console.log(e)
reply(`${e}`)
}
})
