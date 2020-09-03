const Discord = require('discord.js');

const db = require('quick.db');

module.exports = {
    name: "warn",
    description: "Warn a member",

    async run (client, message, args) {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You can\'t use that');

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!user) return message.channel.send('Please specify a user, via mention or ID');

        if(user.bot) return message.channel.send('You can\'t warn bots');

        if(message.author.id === user.id) return message.channel.send('You can\'t warn yourself u dumbo');

        if(message.guild.owner.id === user.id) return message.channel.send('You can\'t warn the server\'s owner, nice try Andre');

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Unspecified';

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

        


        if(warnings === null) {
            db.set(`warnings_${message.guild.id}_${user.id}`, 1, { reason: `${reason}`});
            
            const dmembed = new Discord.MessageEmbed()
            .setTitle('warn Notice.')
            .setThumbnail(member.user.displayAvatarURL())
            .addField(`You have been warned in ${message.guild.name} for: \`${reason}\``)
            .addField('This action was enforced by ', message.author)
            .addField('If you wish to appeal, please send a direct message to ', message.author)
            .addField('you now have **`1`** warning')
            .setFooter('Time of action taken', client.user.displayAvatarURL())
            .setTimestamp()
            user.send(dmembed);
            await message.channel.send(`**${user.username}** has been warned, they now have **1** warning. `)
        }

        if(warnings !== null){
            db.add(`warnings_${message.guild.id}_${user.id}`, 1, { reason: `${reason}`})
            warnings = warnings + 1;
            const dmembed = new Discord.MessageEmbed()
            .setTitle('warn Notice.')
            .setThumbnail(member.user.displayAvatarURL())
            .addField(`You have been warned in ${message.guild.name} for: \`${reason}\``)
            .addField('This action was enforced by ', message.author)
            .addField('you now have: ', `${warnings}` + " warnings" )
            .addField('If you wish to appeal, please send a direct message to ', message.author)

            .setFooter('Time of action taken', client.user.displayAvatarURL())
            .setTimestamp()
            user.send(dmembed);
            await message.channel.send(`**${user.username}** has been warned, **${user.username}** now has **${warnings}** warnings. `)

        }

        if(+warnings >= +3) {
            message.channel.send('<a:alert:749990857041510491> Uh oh, Third Warn. Get sent to gulag for 30 mins <a:alert:749990857041510491>')
            
            let muterole = message.guild.roles.cache.find(role => role.name === "gulag");
            let member = message.mentions.members.first();
            member.roles.add(muterole);
            setTimeout( function () {
          
                member.roles.remove(muterole);
          
            }, (1800000));
            const dmembed = new Discord.MessageEmbed()
            .setTitle('Mute Notice.')
            .setThumbnail(member.user.displayAvatarURL())
            .addField(`You have been Muted in ${message.guild.name} for 30 minutes for: `, '`exceeding 3 warns`')
            .addField('This is an automatic action, however the warn was enforced by ', message.author)
            .addField('you now have: ', `**${warnings}**` + " warnings" )
            .addField('If you wish to appeal, please send a direct message to ', message.author)

            .setFooter('Time of action taken', client.user.displayAvatarURL())
            .setTimestamp()
            user.send(dmembed);
        }
    }
}