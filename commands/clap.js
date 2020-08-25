const Discord = require("discord.js")

module.exports = {
	name: "clap",
	cooldown: 4,
	description: "clap👏your👏text",
	execute(message) {
		let MSG = message.content.split(" ").slice(1).join("👏");
		
		let old = message.content.split(" ").slice(1).join(" ");
 
        if(!MSG)return message.channel.send("please put a text to clap")
        
        const exampleEmbed = new Discord.MessageEmbed()
            .setTitle('slap time')
            .setColor('RANDOM')
            .addFields(
		{ name: 'message send', value: `${old}`,  inline: true },
		{ name: 'clap👏version', value: `${MSG}`,  inline: false }
		
	)
            .setTimestamp()      
               message.channel.send(exampleEmbed)
        }
        }