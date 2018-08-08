var Discord = require("discord.js"),
    bot = new Discord.Client(),
    config = require("./config.json");

bot.on("ready", () => {
    console.log("It works! Logged in as " + bot.user.username);
    bot.user.setActivity(config.prefix + "help");
});

bot.on("message", msg => {
    //checks if good morning is said
    if (msg.content.match(/good morning/i) && msg.member.id==config.anID) {
        msg.reply("It's afternoon...");
    }

    //checks if ro says hmm
    if (msg.content.match(/hmm/i) && msg.member.id == config.roID) {
        msg.channel.send("Correct.");
    }

    //idk what this does
    if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

    //my first command <3
    if (msg.content.startsWith(config.prefix + "ping")) {
        msg.reply("POOOOOOOONG!");
    }

    //my second command
    if (msg.content.startsWith(config.prefix + "foo")) {
        msg.channel.send("bar!");
    }

    //help
    if (msg.content.startsWith(config.prefix + "help")) {
        msg.channel.send("I don't have many commands yet, but you can try ping, foo, or hug");
    }

    //hugs 
    if (msg.content.startsWith(config.prefix + "hug")) {
        if (!msg.mentions.users.array()[0]) {
            msg.channel.send(`*hugs* ***${msg.author}***`);
        }
        else {
            let huggee = msg.mentions.users.array()[0];
            msg.channel.send(`*hugs* ***${huggee.username}***`);
        }
    }

    //evil bot control for me and al
    if (msg.content.startsWith(config.prefix + "repeat")) {
        if (msg.member.id == config.alID || msg.member.id == config.myUserID) {
            let mess = msg.content;
            msg.channel.send(mess.substring(mess.indexOf(" ")));
            msg.delete();
        } else {
            msg.channel.send("hecc you, you're not allowed");
        }
    }

    //TODO fix
    //gives weird promise error
    if (msg.content.startsWith(config.prefix + "repeatspam")) {
        if (msg.member.id == config.myUserID) {
            let mess = msg.content;
            bot.channels.get(config.testID).send(mess.substring(12));
            msg.delete();
        } else {
            msg.channel.send("hecc you, you're not allowed");
            msg.delete();
        }
    }

    if (msg.content.startsWith(config.prefix + "emoji")){
        //if(msg.content.includes("cole")) {
            let emoji = msg.content.substring(msg.content.indexOf(" "));
            const name = bot.emojis.find("name", emoji);
            if(name!=null){
                msg.channel.send(name.toString());

            } else {
                msg.channel.send("oops")
            }
        //}
    }
});

bot.login(config.token);
