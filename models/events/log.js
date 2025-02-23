module.exports.config = {
	name: "log",
	eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "Ghi lại thông báo các hoạt đông của bot!",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Threads }) {
    const logger = require("../../utils/log");
    if (!global.configModule[this.config.name].enable) return;
    var formReport =  "🚫___𝐁𝐎𝐓 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍___🚫" +
                        "\n\n» 𝐆𝐫𝐨𝐮𝐩 𝐰𝐢𝐭𝐡 𝐈𝐃: " + event.threadID +
                        "\n»  𝐓𝐚𝐤𝐞 𝐚𝐜𝐭𝐢𝐨𝐧: {task}" +
                        "\n» 𝐀𝐜𝐭𝐢𝐨𝐧 𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐮𝐬𝐞𝐫 𝐰𝐢𝐭𝐡 𝐈𝐃: " + event.author +
                        "\n» " + Date.now() +" «",
        task = "";
    switch (event.logMessageType) {
        case "log:thread-name": {
            const oldName = (await Threads.getData(event.threadID)).name || "Name does not exist",
                    newName = event.logMessageData.name || "Name does not exist";
            task = "User changes group name from: '" + oldName + "' wall '" + newName + "'";
            await Threads.setData(event.threadID, {name: newName});
            break;
        }
        case "log:subscribe": {
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) task = "-🎀𝐁𝐎𝐒𝐒 𝐓𝐀𝐍𝐕𝐈𝐑, 𝐊 𝐣𝐞𝐧𝐨 𝐚𝐦𝐫 𝐚 𝐚𝐤𝐭𝐚 𝐠𝐫𝐨𝐮𝐩 𝐚 𝐚𝐝𝐝 𝐝𝐢𝐬𝐞-🌐";
            break;
        }
        case "log:unsubscribe": {
            if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()) task = "-🚫𝐁𝐎𝐒𝐒 𝐓𝐀𝐍𝐕𝐈𝐑, 𝐊𝐨𝐧 𝐡𝐚𝐥𝐚𝐢 𝐣𝐞𝐧𝐨 𝐚𝐦𝐫 𝐚 𝐠𝐫𝐨𝐮𝐩 𝐭𝐡𝐢𝐤𝐚 𝐤𝐢𝐜𝐤 𝐝𝐢𝐬𝐞-🍾"
            break;
        }
        default: 
            break;
    }

    if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);

    return api.sendMessage(formReport, global.config.ADMINBOT[0], (error, info) => {
        if (error) return logger(formReport, "[ Logging Event ]");
    });
}
