//Sends message to same channel, no evidence
exports.run = (bot, msg, args, level) => {
	if (msg.member.id!=110933278193647616) {
        let mess = msg.content;
        msg.channel.send(mess.substring(mess.indexOf(" ")));
        bot.channels.get(process.env.loggingID).send(`${msg.author.username} sent to ${msg.channel.name}: ${mess.substring(mess.indexOf(" "))}`);
        msg.delete();
    } else {
        msg.channel.send("hecc you, you're not allowed");
    }
};