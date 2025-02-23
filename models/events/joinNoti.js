module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Leiam Nash",
	description: "Notify bots or people entering the group",
	dependencies: {
		"fs-extra": ""
	}
};
module.exports.run = async function({ api, event }) {

	const request = require("request");
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`𝐁𝐎𝐓 ${global.config.BOTNAME} 【 ${global.config.PREFIX} 】`, threadID, api.getCurrentUserID());
		return api.sendMessage(`${global.config.BOTNAME} 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋 𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐄𝐃\n 𝐍𝐎𝐖 𝐘𝐎𝐔𝐑 𝐆𝐑𝐎𝐔𝐏 𝐂𝐀𝐍 𝐔𝐒𝐄 𝐓𝐀𝐍𝐕𝐈𝐑 𝐁𝐎𝐓 \n\n 𝐏𝐫𝐞𝐟𝐢𝐱: ${global.config.PREFIX} \n ${global.config.PREFIX} 𝐇𝐄𝐋𝐏 𝐅𝐎𝐑 𝐋𝐈𝐒𝐓 COMMAND-🎀`, threadID);
	}
	else {
		try {
    const request = require("request");
			const fs = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};

			var mentions = [], nameArray = [], memLength = [], i = 0;

    let addedParticipants1 = event.logMessageData.addedParticipants;
        for (let newParticipant of addedParticipants1) {
   let userID = newParticipant.userFbId
api.getUserInfo(parseInt(userID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var userName = data[obj].name.replace("@", "");     	if (userID !== api.getCurrentUserID()) {  

				nameArray.push(userName);
				mentions.push({ tag: userName, id: userID, fromIndex: 0 });

				memLength.push(participantIDs.length - i++);
memLength.sort((a, b) => a - b);

			(typeof threadData.customJoin == "undefined") ? msg = "💐 𝐖𝐄𝐋𝐂𝐎𝐌𝐄\n{uName}\nআপনাকে আমাদের আড্ডা ঘর 𝐆𝐑𝐎𝐔𝐏 এ 𝐉𝐎𝐈𝐍 হওয়ার জন্য ধন্যবাদ। আপনি আমাদের 𝐆𝐑𝐎𝐔𝐏 এর\n {soThanhVien} 𝐍𝐮𝐦𝐛𝐞𝐫 𝐦𝐞𝐦𝐛𝐞𝐫 আসা করি আপনি আমাদের সকল রুলস মেনে চলবেন।🖤💐\n[𝐆𝐑𝐎𝐔𝐏 𝐑𝐔𝐋𝐄𝐒]\n১. গ্ৰুপে কেউ 18+ কিছু দিবেন না।\n২. আমাদের গ্ৰুপে অনেক 𝐒𝐞𝐧𝐢𝐨𝐫 ভাই ও আপু আছে, সবাইকে সম্মান দিবেন।\n৩. অযথা BOT Command দিয়ে বিরক্ত করবেন না।\n 𝐂𝐑𝐄𝐃𝐈𝐓 𝐁𝐘;- 𝐓𝐀𝐍𝐕𝐈R 𝐀𝐇𝐌𝐄𝐃" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{uName}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'you' : 'Friend')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);			

      var link = [
"https://i.imgur.com/IzCympC.png",
"https://i.imgur.com/IzCympC.png",
"https://i.imgur.com/IzCympC.png",
"https://i.imgur.com/IzCympC.png",
      ];
				var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/leiamnashJ.jpg"), mentions }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashJ.jpg"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashJ.jpg")).on("close", () => callback());       
      	    }
})
        }
    }catch (err) {
            return console.log("ERROR: "+err);
    }
	}
                                                  }
