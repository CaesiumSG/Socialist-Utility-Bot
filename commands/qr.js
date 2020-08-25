const Discord = require('discord.js')
module.exports = {
	name: "qr",
	cooldown: 7,
	description: "make your own qr code",
	usage: "[text]",
	execute(message) {
	        let MSG = message.content.split(" ").slice(1).join("+");
 
        if(!MSG)return message.channel.send("no message found")
        
      if (MSG.length  > 35) return message.reply('hey bruh chill dont put more than 35 characters smh pedo')  
        
   const supEmbed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle(" qr code")
   .setDescription("here is your socialist qr code")
   .setImage(`http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=${MSG}&choe=UTF-8&chld=L`)
      .setTimestamp()
      .setFooter("have fun")
      
      message.channel.send(supEmbed)
      }
      }