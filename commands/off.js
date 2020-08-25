let { botowner } = require('../config.json');

module.exports = {
    name: "shutdown",
    description: "turn the bot off (OWNER ONLY dont try :))",
    execute(message) {
       if (message.author.id === `${botowner}`){

        
         
       message.channel.send('are you sure to shutdown? say yes or no')
        const fil = m => m.content.includes('yes')
        const collector = message.channel.createMessageCollector(fil, { time: 15000 })
        message.channel.send('capitalism overload. shutting down')
        client.destroy();
     
        collector.on('collect', m => {
        message.channel.send('capitalism overload. shutting down')

       
       
        const client = message.client
        const Discord = require('discord.js');
        const { description } = require("./fkick");
const channel = client.channels.cache.get('736141999006154835');
        
// inside a command,g event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#ff0000')
    .setAuthor('CaesiumSGBot Stat')
    .setDescription('capitalism overload. shutting down, CaesiumSGBot has been disconnected by an admin !')
    .setTimestamp()
	.setFooter('imagine being a weeb smh');

channel.send(exampleEmbed);
setTimeout(() => {
    process.exit();
   
},5)
     })
   
    } else message.reply('only the bot owner can do that')

}
}