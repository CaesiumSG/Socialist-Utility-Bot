const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "inv",
    description: "View your inventory",


    async run (client, message, args) {
        let user = message.mentions.users.first() || message.author.id;
        let items = await db.fetch(user);
        if(items === null) items = "Nothing"

        const Embed = new Discord.MessageEmbed()
        .addField('Inventory', items)

        message.channel.send(Embed);
    }
}