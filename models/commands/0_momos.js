const fs = require("fs");
module.exports.config = {
  name: "momos",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",  
  description: "hihihihi",
  commandCategory: "No prefix",
  usages: "momos",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Momos")==0 || event.body.indexOf("momos")==0 || event.body.indexOf("MOMOS")==0 || event.body.indexOf("Mumu")==0) {
    var msg = {
        body: "─━━◉❖Nobita❖◉━━─\n𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐀𝐀𝐏𝐊𝐄 𝐌𝐎𝐌𝐎𝐒😍",
        attachment: fs.createReadStream(__dirname + `/noprefix/momos.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
