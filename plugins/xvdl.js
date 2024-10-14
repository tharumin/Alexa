const {cmd , commands} = require('../command')
cmd({
    pattern: "xvdl",
    desc: "downlode videos",
    category: "downlode",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*please give me a valid url ❗*")
reply ("Downloading")
let xvdl = await fetch(`https://api-aswin-sparky.koyeb.app/api/downloader/xdl?url=${q}`)
var data = await xvdl.json()
await conn.sendMessage(from,{video : {url : data.data },caption : `🌸 *SD QUALITY l*🌸\n > ALEXA-MD`, mimetype:"video/mp4"},{quoted:mek})

}catch(e){
    console.log(e)
    reply(`${e}`)
}
}
)