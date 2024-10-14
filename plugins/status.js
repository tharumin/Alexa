const {cmd , commands} = require('../command')
cmd({
    pattern: "save",
    desc: "downlode status",
    category: "downlode",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*reply to status*")
reply ("Downloading")
let res = await m.quoted.download()
          if(m.quoted.message.videoMessage){
          await conn.sendMessage(from,{video : {url : res },caption : `- 🌸 *ALEXA MD status saver*🌸\n> ALEXA-MD`, mimetype:"video/mp4"},{quoted:mek})
          }
          else if(m.quoted.message.imageMessage){
          await conn.sendMessage(from,{image : {url : res },caption : `- 🌸 *ALEXA MD status saver*🌸\n> ALEXA-MD`, mimetype:"video/mp4"},{quoted:mek})
          }
 }catch(e){
    console.log(e)
    reply(`${e}`)
}
}
)