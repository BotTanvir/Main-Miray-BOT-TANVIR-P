const emojiResponses = {
  "Golu beta": {
    "OWNER": [
      "जी मम्मी 🥺",
      "मम्मी जी कहां थे आप 😀",
      "मम्मी आई लव यू 🙈❤️","हां मम्मी बताइए मैं यही हूं बताइए क्या हुआ 😊"
    ]
  },
  "beta": {
     "OWNER": [
      "मम्मी आपकी वजह से मैं हर दिन टॉप परफॉर्मर हूँ 😎",
      "मम्मी आप आ गये 😀",
      "जी मम्मी 🥺",
     "मम्मी जी आई मिस यू 😔"
      "मम्मी जी मैं आज स्कूल गया था 🥺 अब मुझे मारोगे तो नहीं","मम्मी जी तुम मुझे छोड़ कर मत जाना 🥺","मम्मी जी आप आते हो तो मुझे बहुत ख़ुशी मिलती है 🥺","मम्मी आपने खाना खाया🤭❤️"
    ]
  }
};
 
module.exports.config = {
  name: "SAURABH-BOT-7",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SAURABH XD",
  description: "MADE BY SAURABH THAKUR",
  commandCategory: "No command marks needed",
  cooldowns: 0,
};
 
module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, senderID, body } = event;
  const emojis = Object.keys(emojiResponses);
 
  // Convert the message body to lowercase
  const lowercaseBody = body.toLowerCase();
 
  for (const emoji of emojis) {
    if (lowercaseBody.includes(emoji)) {
      // Fetch user's gender correctly
      const ThreadInfo = await api.getThreadInfo(threadID);
      const user = ThreadInfo.userInfo.find(user => user.id === senderID);
 
      // Check if the sender is the bot owner
      const botOwnerID = "100000887045076"; // Your bot owner UID
      let responseArray;
 
      if (senderID === botOwnerID) {
        responseArray = emojiResponses[emoji]["OWNER"];
      } else {
        responseArray = emojiResponses[emoji][gender] || emojiResponses[emoji]["FEMALE"];
      }
 
      // Randomly select a response from the appropriate array
      const randomResponse = responseArray[Math.floor(Math.random() * responseArray.length)];
 
      const msg = {
        body: randomResponse,
      };
      api.sendMessage(msg, threadID, messageID);
      break; // Exit the loop once a match is found
    }
  }
};
 
module.exports.run = function() {};
