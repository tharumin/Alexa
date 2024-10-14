const {cmd , commands} = require('../command')
const axios = require('axios')

cmd({
    pattern: "waifu",
    desc: "downlode facebook",
    category: "downlode",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const url = 'https://api.waifu.pics/nsfw/waifu'

try for (let i = 0 ; i < 5 ; i++ ) 
    const response = await axios.get(url)
    const imageUrl = response.data.url

    await conn.sendMessage(from, { image: { url: imageUrl}, caption: `- *🌸Waifu🌸*\> ALEXA-MD}, { quoted: mek })  


}catch(e){
    console.log(e)
    reply(`${e}`)
}
}
)
