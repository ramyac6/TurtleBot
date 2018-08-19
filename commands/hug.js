//Code borrowed from arynbot <3

//Hugs for everyone!
exports.run = (bot, msg, args, level) => {
	if (!msg.mentions.users.array()[0]) {
		msg.channel.send(`*hugs* ***${msg.author.username}***`)
	} else {
		let huggee = msg.mentions.users.array()[0];
		msg.channel.send(`*hugs* ***${huggee.username}***`);
	};
};