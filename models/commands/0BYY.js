const fs = require("fs");
module.exports.config = {
  name: "icecream",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - Fixed by LTD", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "Byy",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("byy")==0 || event.body.indexOf("Byy")==0 || event.body.indexOf("Byyy")==0 || event.body.indexOf("byyyy")==0) {
    var msg = {
        body: "─━━◉❖Nobita❖◉━━─\n JA RAHA HUN BYY 😾",
        attachment: fs.createReadStream(__dirname + `/noprefix/byy.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥶", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

                                        }
