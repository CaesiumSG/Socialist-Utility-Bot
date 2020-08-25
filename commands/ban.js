module.exports = {
    name: "ban",
    usage: "[user mention]",
    description: "ban the mentioned user",
    execute(message, args) {
    	const client = message.client
const guild = message.guild
        let reson = message.content.split(" ").slice(2).join(" ");
        const rreson = message.content.split(" ").slice(2).join(" ");
if(!message.guild.me.hasPermission("BAN_MEMBERS")) { return message.reply("I need the permission ``BAN_MEMBERS`` for this command")
}
        if (message.member.hasPermission("BAN_MEMBERS")) {
            if (!args[0]) return message.reply("you need to tag a user to ban !");
            const user = message.mentions.users.first();
guild.members.ban(user);
            message.channel.send(`I sucessful ban the user \n reason: ${reson} (if the user is not banned that mean the bot cant ban that user)`)
        }else return message.channel.send("you need the permission ``BAN_MEMBERS`` for this command")
        
    }
} 