var Discord = require("discord.js"),
    client = new Discord.Client(),
    config = require("./config.json");

client.on("ready", () => {
    console.log("It works! Logged in as " + client.user.username);
});

client.on("message", message => {
    if(!message.content.startsWith(config.prefix)|| message.author.bot) return;
    
    if (message.content.startsWith(config.prefix+"ping")) {
        message.reply("POOOOOOOONG!");
    }
    if (message.content.startsWith(config.prefix+"foo")) {
        message.channel.send("bar!");
    }
});

client.login(config.token);
