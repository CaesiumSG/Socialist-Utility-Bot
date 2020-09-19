const Discord = require('discord.js');

module.exports = (client, member, message) =>{
	// Send the message to a designated channel on a server:
	const channel = member.guild.channels.cache.find(ch => ch.name === '❃║socialism-lounge║');
	
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	// Send the message, mentioning the member
	let sicon = member.user.displayAvatarURL();
	const dmembed = new Discord.MessageEmbed()
	.setColor("#39ff14")
	.setTitle('WELCOME!!!!!!!')
	.setThumbnail(sicon)
	.addField(`Welcome to Socialist Dankers!`, `Please Read the rules and verify yourself before joining us on our adventures!`)
	.addField(`This automatic message was brought to you by the mod team of Socialist Dankers!`, 'all of em dumb')
	.addField('If you have any queries about the server, please feel free to directly dm the mod team or ping them!', "dont need to feel paiseh smh")
	.addField('What to do now lel?', 'Head over to self roles after reading rules and grab them roles!')
	.setFooter('Time of embed sent', client.user.displayAvatarURL())
	.setTimestamp()
	member.send(dmembed);
	
	const welcome = 749412340780236859;
	let serverembed = new Discord.MessageEmbed()
		.setColor("#39ff14")
		.setThumbnail(sicon)
		.setTitle('WELCOME!!!!!!!')
		.addField("Here comes a new Socialist Convert!",`A new member has joined our server!, please welcome ${member}!`)
		.addField("Where should you start?"," Do check out the rules of the server and grab them self roles!.")
		.addField("<@" + welcome + ">", "Please Welcome Our Comrade!");

	channel.send(serverembed);

	
}