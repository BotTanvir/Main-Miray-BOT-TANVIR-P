module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "turn the bot off",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = ["61561619394932", "61561619394932"];
  	if (!permission.includes(event.senderID)) return api.sendMessage("[ 𝐄𝐑𝐑 ]🚫__𝐘𝐎𝐔 𝐃𝐎𝐍'𝐓 𝐇𝐀𝐕𝐄 𝐏𝐄𝐑𝐌𝐈𝐒𝐒𝐈𝐎𝐍 𝐓𝐎 𝐔𝐒𝐄 𝐓𝐇𝐈𝐒 𝐂𝐎𝐌𝐌𝐀𝐍𝐃, 𝐓𝐇𝐈𝐒 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐎𝐍𝐋𝐘 𝐅𝐎𝐑 𝐁𝐎𝐒𝐒 𝐓𝐀𝐍𝐕𝐈𝐑__🚫", event.threadID, event.messageID);
  api.sendMessage(`[ OK ] ${global.config.BOTNAME} 🍒__𝐁𝐎𝐓 𝐀𝐑𝐄 𝐍𝐎𝐖 𝐓𝐔𝐑𝐍𝐄𝐃 𝐎𝐅𝐅__🌐`,event.threadID, () =>process.exit(0))
}
