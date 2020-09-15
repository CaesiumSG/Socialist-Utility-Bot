const db = require('quick.db');


module.exports = {
    name: "add",
    description: "break the economy",

    async run (client, message, args) {
        let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('Dont try to break me nab')
        let amount = args.slice(1).join(" ");
        if (!amount) return message.channel.send('U asked Nothing so I gave nothing u stupid.');
    
        

        


            db.add(`money_${message.guild.id}_${user.id}`, amount);
            

            message.channel.send(`${user} Begged Caesium for ur mom and was given ${amount} socialist coins! **hmm** `)
        
    }
}