const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");

const config = require("./config.json");

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
    bot.user.setActivity("DON'T USE ME RIGHT NOW");
});

bot.on("message", msg => {
  if (msg.author.bot) return;
  if(msg.content.indexOf(config.prefix) !== 0) return;

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