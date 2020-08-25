module.exports = {
	name: 'fkick',
	description: 'Tag a member and kick them (but not really).',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`You kicked: ${taggedUser.username} ass as hard as u can, but jokes on you ${taggedUser.username} is into that shit`);
	},
};