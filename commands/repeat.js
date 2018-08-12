const config = require("../config.json");

exports.run = (bot, msg, args, level) => {
	if (msg.member.id == config.alID || msg.member.id == config.myUserID) {
        let mess = msg.content;
        msg.channel.send(mess.substring(mess.indexOf(" ")));
        bot.channels.get(config.loggingID).send(`${msg.author.username} sent to channel: ${mess.substring(mess.indexOf(" "))}`);
        msg.delete();
    } else {
        msg.channel.send("hecc you, you're not allowed");
    }
};