   


 module.exports= {
 name: "server",
	cooldown: 4,
    description: "server info",
    execute(message) {
    	
    	const client = message.client
        const Discord = require('discord.js');
        const guild = message.guild
 let footeri = guild.iconURL()
        

// inside a command, event listener, etc.
	const exampleEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${message.guild.name} info`)
 
    .setThumbnail(guild.iconURL())
    .addFields(
        { name: 'server name', value: `${message.guild.name}` },
        { name: '\u200B', value: '\u200B' },
        { name: 'total members', value: `${message.guild.memberCount}`, inline: true },
        { name: 'server id', value: `${message.guild.id}`, inline: true },
        { name: 'server region', value: `${message.guild.region}`, inline: true },
        { name: 'total roles', value: `${guild.roles.cache.size}`, inline: true },
        { name: 'total emojis', value: `${guild.emojis.cache.size}`, inline: true }
    )
      .setTimestamp()
    .setFooter('server info', `${footeri}`);

message.channel.send(exampleEmbed);
    }
    }