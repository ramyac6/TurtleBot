const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");


// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `bot` var.
    bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
  });
});

bot.on("ready", () => {
    console.log("It works! Logged in as " + bot.user.username);
    bot.user.setActivity("plz don't break me");
});

bot.on("message", msg => {
  //Prevents responses to other bots
  if (msg.author.bot) return;

  //Response to An's good morning
  if (msg.content.match(/good morning/i) && msg.member.id == process.env.anID) {
    msg.reply("It's afternoon...");
    return;
  }

  //Response to Ro's hmm
  if (msg.content.match(/hmm/i) && msg.member.id == process.env.roID) {
    msg.channel.send("Correct.");
    return;
  }

  if (msg.content.indexOf(config.prefix) !== 0) return;


  // This is the best way to define args. Trust me.
  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(bot, msg, args);
  } catch (err) {
    console.error(err);
  }
});

bot.login(config.token);