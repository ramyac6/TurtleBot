var Discord = require("discord.js"),
    bot = new Discord.Client(),
    config = require("./config.json");

bot.on("ready", () => {
    console.log("It works! Logged in as " + bot.user.username);
});

bot.on("message", msg => {
    if(msg.content.match(/good morning/i)){
        msg.reply("It's afternoon...");
    }
    if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

    if (msg.content.startsWith(config.prefix + "ping")) {
        msg.reply("POOOOOOOONG!");
    }
    if (msg.content.startsWith(config.prefix + "foo")) {
        msg.channel.send("bar!");
    }
    if (msg.content.startsWith(config.prefix + "hug")) {
        if (!msg.mentions.users.array()[0]) {
            msg.channel.send(`*hugs* ***${msg.author}***`);
        }
        else {
            let huggee = msg.mentions.users.array()[0];
            msg.channel.send(`*hugs* ***${huggee.username}***`);
        }
    }
    if (msg.content.startsWith(config.prefix + "repeat")) {
        let mess = msg.content;
        msg.channel.send(mess.substring(8));
        msg.delete();
    }
});

bot.login(config.token);

