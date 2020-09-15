const Discord = require('discord.js');

module.exports = {
    name: "modmail",
    description: "messages the person",

    async run (client, message, args) {

        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You can\'t use that jimbo')
        if(!message.guild.me.hasPermission("MANAGE_GUILD")) return message.channel.send('I don\'t have the right permissions.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('How are we gonna message no one u dumbo');

        
        

        if(member.id === message.author.id) message.channel.send('Imagine sending a message to urself, I mean imma not complain but man ur weird');

        let content = args.slice(1).join(" ");
        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        if(!content) return message.channel.send('Imagine trying to send a message with no message smh nab');

        const comfirmation = new Discord.MessageEmbed()
        .setTitle('Embed Sent')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Embed Recepient', member)
        .addField('Message Sent by', message.author)
        .addField('Reason', content)
        .setFooter('Time Sent', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(comfirmation);

        const ownerid = "733622933343174728"
        
        const dmembed = new Discord.MessageEmbed()
        .setTitle('Mod Message.')
        .setThumbnail(member.user.displayAvatarURL())
        .addField(`You have a new message from the mod team of ${message.guild.name}:`, `\`${content}\``)
        .addField('This action was enforced by ', message.author)
        .addField('If you wish to appeal/provide further context, please send a direct message to: ', message.author)
        .setFooter('Time of embed sent', client.user.displayAvatarURL())
        .setTimestamp()
        user.send(dmembed);
        


        


    }
}