//Sends remote message to spam channel, no evidence
exports.run = (bot, msg, args, level) => {
	if (msg.member.id == process.env.myUserID || msg.member.id == process.env.alID) {
        let mess = msg.content;
        bot.channels.get(process.env.spamID).send(mess.substring(mess.indexOf(" ")));
        bot.channels.get(process.env.loggingID).send(`${msg.author.username} in #spam-bam: ${mess.substring(mess.indexOf(" "))}`);
        msg.delete();
    } else {
        msg.channel.send("hecc you, you're not allowed");
        msg.delete();
    }
};
