//Loops bot, so it should in theory, not turn off when on heroku
exports.run = (bot, msg, args, level) => {
	if (msg.member.id == process.env.myUserID) {
        var interval = setInterval (function (){
            const m = await bot.channels.get(process.env.loggingID).send("Ping?");

            m.edit(`Pong! \nTook ${m.createdTimestamp-msg.createdTimestamp} ms`).catch(console.error);

            //bot.channels.get(process.env.loggingID).send(`Pong! \nTook ${m.createdTimestamp-msg.createdTimestamp} ms`);
          }, 30000); // time between each interval in milliseconds 
    } else {
        msg.channel.send("no");
    }
};
//900000