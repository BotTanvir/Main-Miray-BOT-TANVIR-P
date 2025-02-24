const fs = require("fs");
module.exports.config = {
	name: "imoge5",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("😘") ||
     react.includes("😘😘") || react.includes("uma") || react.includes("umha") ||
react.includes("💋") ||
react.includes("😽")) {
		var msg = {
				body: `𝐔𝐦𝐦𝐦𝐦𝐦𝐦𝐚𝐚𝐚𝐚𝐡𝐡𝐡𝐡𝐡𝐡😘😘 𝐁𝐚𝐛𝐲-😘`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
