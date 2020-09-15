const Discord = require('discord.js')

module.exports = {
    name: "sourcecode",
    cooldown: 5,
    description: "bot source code",
    execute (message) {
    const exampleEmbed = new Discord.MessageEmbed()
            .setTitle('source code')
            .setColor('RANDOM')
            .setDescription('if you want to see the code for this bot check later because my repo is still private but still [source code](https://github.com/CaesiumSG/CaesiumSGMainBot)')
            .setFooter("u gey")
            message.channel.send(exampleEmbed)
     }
    
}