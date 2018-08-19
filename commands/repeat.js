const config = require("../config.json");

//Sends message to same channel, no evidence
exports.run = (bot, msg, args, level) => {
	if (msg.member.id!=110933278193647616) {
        let mess = msg.content;
        msg.channel.send(mess.substring(mess.indexOf(" ")));
        bot.channels.get(config.loggingID).send(`${msg.author.username} sent to #${msg.channel.name}: ${mess.substring(mess.indexOf(" "))}`);
        //TODO: check where messages are being sent before logging
	bot.channels.get(process.env.anLogging).send(`${msg.author.username} sent to #${msg.channel.name}: ${mess.substring(mess.indexOf(" "))}`);
	msg.delete();
    } else {
        msg.channel.send("hecc you, you're not allowed");
    }
};
