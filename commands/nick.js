module.exports = {
    name: "nick",
    cooldown: 10,
    usage: '[user tag], [nick]',
    description: "change someone nick",
    execute(message, args){
    if(!message.guild.me.hasPermission("MANAGE_NICKNAMES")) { return message.reply("I need the permission ``MANAGE_NICKNAMES`` for this command")
}	 
        if (message.member.hasPermission("MANAGE_NICKNAMES")) {
            const guild = message.guild;
            const user = message.mentions.users.first();
            let nick = message.content.split(" ").slice(2)
            const amount = args.join(' ');
            if (!user) return message.reply("you need to tag a user to rename  !");
    if (!amount) return message.reply('You haven\'t given a name!'); // Checks if the `amount` parameter is given
     if (amount.length  > 31) return message.reply('You can`t put more than 32 letter!'); // Checks if the `amount` integer is bigger than 100
  

            try{
            guild.members.cache.get(user.id).setNickname(`${nick}`); 
        }catch (error) {
                console.error(error);
                message.reply('there was an error trying to execute that command!');
            }
            message.channel.send(`username sucessful set to **${nick}**`) 
        }
    }
}