//Sends message to nsfw channel remotely, no evidence trail
exports.run = (bot, msg, args, level) => {
	if (msg.member.id == process.env.myUserID || msg.member.id == process.env.alID) {
        let mess = msg.content;
        bot.channels.get(process.env.nsfwID).send(mess.substring(mess.indexOf(" ")));
        bot.channels.get(process.env.loggingID).send(`${msg.author.username} in #thotties: ${mess.substring(mess.indexOf(" "))}`);
        bot.channels.get(process.env.anLogging).send(`${msg.author.username} sent to #${msg.channel.name}: ${mess.substring(mess.indexOf(" "))}`);
        msg.delete();
    } else {
        msg.channel.send("hecc you, you're not allowed");
        msg.delete();
    }
};
