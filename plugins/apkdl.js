const {cmd , commands} = require('../command')
const { fetchJson } = require("../lib/functions")

cmd({
    pattern: "apk",
    desc: "Download song sever 2",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if (!q) return m.reply("*Provide an app name*")

let data = await fetchJson (`https://bk9.fun/search/apk?q=${q}`)
        let dreaded = await fetchJson (`https://bk9.fun/download/apk?id=${data.BK9[0].id}`)
reply("*🌸DOWNLOADING···*\n> ALEXA-MD
         await conn.sendMessage(
              from,
              {
                document: { url: dreaded.BK9.dllink },
                fileName: dreaded.BK9.name,
                mimetype: "application/vnd.android.package-archive"}, { quoted: mek })

  }catch(e){
console.log(e)
reply(`${e}`)
}
})
