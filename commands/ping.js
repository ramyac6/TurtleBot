exports.run = async (bot, msg, args) => {
    const m = await msg.channel.send("Ping?");

    m.edit(`Pong! \nTook ${m.createdTimestamp-msg.createdTimestamp} ms`).catch(console.error);
}