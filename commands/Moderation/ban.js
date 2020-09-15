const Discord = require('discord.js');

module.exports = {
    name: "ban",
    description: "bans a member from the server",

    async run (client, message, args) {

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the right permissions.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('How are we gonna ban no one u dumbo');

        if(!member) return message.channel.send('Can\'t seem to find this user. use carlbot if user is not in the server already');
        if(!member.bannable) return message.channel.send('This user can\'t be banned. Role Hirechy Goes Brrr. ');

        if(member.id === message.author.id) return message.channel.send('Bruh, you can\'t ban yourself u dumbo');

        let reason = args.slice(1).join(" ");
        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        const ownerid = "733622933343174728"

        if(!reason) reason = 'Unspecified';
        const dmembed = new Discord.MessageEmbed()
        .setTitle('Ban Notice.')
        .setThumbnail(member.user.displayAvatarURL())
        .addField(`You have been banned from ${message.guild.name} for: \`${reason}\``)
        .addField('This action was enforced by ', message.author)
        .addField('If you wish to appeal, please send a direct message to', message.author)
        .setFooter('Time of action taken', client.user.displayAvatarURL())
        .setTimestamp()
        user.send(dmembed);

        member.ban(user)
        .catch(err => {
            if(err) return message.channel.send('Something went wrong')
        })

        const banembed = new Discord.MessageEmbed()
        .setTitle('Member Banned')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Banned', member)
        .addField('Banned by', message.author)
        .addField('Reason', reason)
        .setFooter('Time kicked', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(banembed);

        
        



        


    }
}