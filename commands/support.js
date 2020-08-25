module.exports = {
    name: "support",
    cooldown: 5,
    description: "link to our support server",
    execute(message) {
    	
        const Discord = require('discord.js')
        const supEmbed = new Discord.MessageEmbed()
   .setColor('#8B0000')
   .setTitle('kommunism support')
   .setURL('https://discord.gg/5MaFCx4')
   .setDescription('if you have a question or want to sugest something and send feedback \n join our server [CaesiumSGBot Support Server](https://discord.gg/5MaFCx4)')
   .setTimestamp()
   .setFooter('im lazy k');
   message.channel.send(supEmbed);
    }
}