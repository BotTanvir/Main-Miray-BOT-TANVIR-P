module.exports.config = {
	name: "rules",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Abdula Rahaman",
	description: "Rules",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://i.imgur.com/U5LoBqT.jpg", 
            
            "https://i.imgur.com/U5LoBqT.jpg", 
            
"https://i.imgur.com/U5LoBqT.jpg",
            
            "https://i.imgur.com/U5LoBqT.jpg"];
  
var callback = () => api.sendMessage({body:`১ . ১৮+ কমান্ড ব্যাবহার করা যাবে না এবং ১৮+ কোনো রকম কিছু দেওয়া যাবে না ।
২ . কাউকে গালি দেওয়া যাবে না ।
৩ . গ্রুপে একসাথে ২-টার বেশি ইমোজি দিলে সাথে সাথে কিক-🫵🏻।
৪ . অযথা গ্রুপে বট বট করা যাবে না ।
৫ . গ্রুপে (😒) এই ইমোজি দিলে সাথে সাথে কিক। 

🚫__উপরের 𝐑𝐔𝐋𝐄𝐒 এর যে কোনো একটা ভাঙলে কিক করা হবে ধন্যবাদ__❤️‍🩹
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
