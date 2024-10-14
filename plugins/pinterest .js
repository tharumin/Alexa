const {cmd , commands} = require('../command')
const {pinterest } = require( '@bochilteam/scraper')

cmd({
    pattern: "pinterest",
    desc: "downlode pinterest",
    category: "downlode",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*give me a title*\n- Ex : .pinterest anime girl")
const json = await pinterest(q)

await conn.sendMessage(from, { image: { url: json.getRandom}, caption: '- *🌸ALEXA-MD RANDOM PINTEREST IMAGES🌸*\n\n\n> Created By Sadeesha Tharumin' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching image*: ${e.message}`);
    }
});
