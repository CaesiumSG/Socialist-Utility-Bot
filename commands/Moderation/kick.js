const Discord = require('discord.js');

const db = require('quick.db')

module.exports = {
    name: "kick",
    description: "Kicks a member from the server",

    async run (client, message, args) {

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('No perms gay. Oh wait im gay')
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('No perms gay.')

        const member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('How are we gonna kick no one you dumbo');

        if(!member) return message.channel.send('Can\'t seem to find this user. Use carlbot if the user is already not in the server');
        if(!member.kickable) return message.channel.send('This user can\'t be kicked. It is either because they have a higher role than u, or that u are just plain dumb');

        if(member.id === message.author.id) return message.channel.send('I know kicking yourself sounds erotic, but cmon that is a capitalistic action');

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Unspecified';

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        const dmembed = new Discord.MessageEmbed()
        .setTitle('Kick Notice.')
        .setColor('FF0000')
        .setThumbnail(member.user.displayAvatarURL())
        .addField(`You have been kicked out of ${message.guild.name} for: \`${reason}\``)
        .addField('This action was enforced by ', message.author)
        .addField('If you wish to appeal, please send a direct message to ', message.author )
        .setFooter('Time of action taken', client.user.displayAvatarURL())
        .setTimestamp()
        member.send(dmembed);

        member.kick(user)
        .catch(err => {
            if(err) return message.channel.send('<a:alert:749990857041510491> oopsie popsie, Something went wrong with the bot. If the problem persists dm/ping the bot owner! <a:alert:749990857041510491>')
        })

        const kickembed = new Discord.MessageEmbed()
        .setTitle('Member Kicked')
        .setColor('RANDOM')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Kicked', member)
        .addField('Kicked by', message.author)
        .addField('Reason', reason)
        .setFooter('Time kicked', client.user.displayAvatarURL())
        .setTimestamp()



        message.channel.send(kickembed);
    }
}