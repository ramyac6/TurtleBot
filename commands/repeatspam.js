const config = require("../config.json");

//Sends remote message to spam channel, no evidence
exports.run = (bot, msg, args, level) => {
	if (msg.member.id == config.myUserID || msg.member.id == config.alID) {
        let mess = msg.content;
        bot.channels.get(config.spamID).send(mess.substring(mess.indexOf(" ")));
        bot.channels.get(config.loggingID).send(`${msg.author.username} in #spam-bam: ${mess.substring(mess.indexOf(" "))}`);
        msg.delete();
    } else {
        msg.channel.send("hecc you, you're not allowed");
        msg.delete();
    }
};
