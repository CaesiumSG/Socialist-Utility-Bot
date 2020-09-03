const Discord = require('discord.js');

module.exports = {
    name: "store",
    description: "View the store",

    async run (client, message, args) {

        const embed = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`Freedom from serfdom - 1000 Socialist Coins \n Better working conditions - 2000 Socialist Coins \n Andre - 5000 Socialist Coins`)
        .setTimestamp();

        message.channel.send(embed);
    }
}