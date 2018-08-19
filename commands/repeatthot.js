const config = require("../config.json");

//Sends message to nsfw channel remotely, no evidence trail
exports.run = (bot, msg, args, level) => {
	if (msg.member.id == config.myUserID || msg.member.id == config.alID) {
        let mess = msg.content;
        bot.channels.get(config.nsfwID).send(mess.substring(mess.indexOf(" ")));
        bot.channels.get(config.loggingID).send(`${msg.author.username} in #thotties: ${mess.substring(mess.indexOf(" "))}`);
        msg.delete();
    } else {
        msg.channel.send("hecc you, you're not allowed");
        msg.delete();
    }
};
