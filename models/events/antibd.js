module.exports.config = {
  name: "antibd",
  eventType: ["log:user-nickname"],
  version: "0.0.1",
  credits: "𝐒𝐚𝐮𝐫𝐚𝐛𝐡 𝐓𝐡𝐚𝐤𝐮𝐫",
  description: "Against changing Bot's nickname"
};

module.exports.run = async function({ api, event, Users, Threads }) {
    var { logMessageData, threadID, author } = event;
    var botID = api.getCurrentUserID();
    var { BOTNAME, ADMINBOT } = global.config;
    var { nickname } = await Threads.getData(threadID, botID);
    var nickname = nickname ? nickname : BOTNAME;
    if (logMessageData.participant_id == botID && author != botID && !ADMINBOT.includes(author) && logMessageData.nickname != nickname) {
        api.changeNickname(nickname, threadID, botID)
        var info = await Users.getData(author);
       return api.sendMessage({ body: `${info.name} - 𝐕𝐀𝐈 𝐓𝐔𝐈 𝐁𝐎𝐓 𝐄𝐑 𝐍𝐈𝐂𝐊𝐍𝐀𝐌𝐄 𝐂𝐇𝐀𝐍𝐆𝐄 𝐊𝐎𝐑𝐀 𝐏𝐀𝐑𝐁𝐈 𝐍𝐀-😹🖐`}, threadID);
    }  
        }
