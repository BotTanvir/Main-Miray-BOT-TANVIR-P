const chalk = require('chalk');
module.exports.config = {
    name: "join",
    version: "1.0.1",
    hasPermssion: 2,
    credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    description: "Join the Bot boxes are in",
    commandCategory: "System",
    usages: "",
    cooldowns: 5
};
 module.exports.onLoad = () => {
  console.log(chalk.bold.hex("#00c300").bold("🌐__𝐒𝐔𝐂𝐂𝐄𝐒𝐅𝐔𝐋𝐋𝐘 𝐋𝐎𝐀𝐃𝐄𝐃 𝐓𝐇𝐄 𝐉𝐎𝐈𝐍 𝐂𝐎𝐌𝐌𝐀𝐍𝐃__🌐"));
  }
module.exports.handleReply = async function({ api, event, handleReply, Threads }) {
  var { threadID, messageID, senderID, body } = event;
  var { ID } = handleReply;
  console.log(ID)
  if (!body || !parseInt(body)) return api.sendMessage(' _𝐘𝐨𝐮𝐫 𝐬𝐞𝐥𝐞𝐜𝐭𝐢𝐨𝐧 𝐦𝐮𝐬𝐭 𝐛𝐞 𝐚 𝐧𝐮𝐦𝐛𝐞𝐫.', threadID, messageID);
  if ((parseInt(body) - 1) > ID.length) return api.sendMessage("_𝐘𝐨𝐮𝐫 𝐩𝐢𝐜𝐤 𝐢𝐬 𝐧𝐨𝐭 𝐨𝐧 𝐭𝐡𝐞 𝐥𝐢𝐬𝐭", threadID, messageID);
  try {
    var threadInfo = await Threads.getInfo(ID[body - 1]);
    var { participantIDs, approvalMode, adminIDs } = threadInfo;
    if (participantIDs.includes(senderID)) return api.sendMessage(`You are already in this group.`, threadID, messageID);
    api.addUserToGroup(senderID, ID[body - 1]);
    if (approvalMode == true && !adminIDs.some(item => item.id) == api.getCurrentUserID()) return api.sendMessage("Added you to the group's approval list...Custom yourself.", threadID, messageID);
    else return api.sendMessage(`🍒__𝐌𝐘 𝐁𝐎𝐒𝐒 𝐉𝐔𝐒𝐓 𝐀𝐃𝐃𝐄𝐃 𝐘𝐎𝐔 𝐓𝐎 𝐓𝐇𝐄 𝐆𝐑𝐎𝐔𝐏__🍒 ${threadInfo.threadName} already. Check in the waiting or spam message section if you don't see the box \nA lot 💟`, threadID, messageID);
  } catch (error) {
    return api.sendMessage(`🍾__ 𝐈'𝐌 𝐖𝐑𝐎𝐍𝐆 𝐒𝐎 𝐈 𝐂𝐀𝐍'𝐓 𝐀𝐃𝐃 𝐘𝐎𝐔 𝐓𝐎 𝐓𝐇𝐀𝐓 𝐆𝐑𝐎𝐔𝐏__🍾:<.\n\n${error}`, threadID, messageID);
  }
}

module.exports.run = async function({ api, event, Threads }) {
  var { threadID, messageID, senderID } = event;
  var msg = `🎀__𝐁𝐎𝐗 𝐋𝐈𝐒𝐓__🎀\n\n`, number = 0, ID = [];
  var allThreads = await Threads.getAll();
  for (var i of allThreads) {
    number++;
    msg += `${number}. ${i.threadInfo.threadName}\n`;
    ID.push(i.threadID)
  }
  msg += `\n♦__𝐑𝐞𝐩𝐥𝐲 𝐭𝐡𝐢𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞 𝐧𝐮𝐦𝐛𝐞𝐫 𝐜𝐨𝐫𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐢𝐧𝐠 𝐭𝐨 𝐭𝐡𝐞 𝐠𝐫𝐨𝐮𝐩 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐞𝐧𝐭𝐞𝐫__♦`
  return api.sendMessage(msg, threadID, (error, info) => {
    global.client.handleReply.push({
      name: this.config.name,
      author: senderID,
     messageID: info.messageID,
      ID: ID      
    })
  }, messageID)
}
