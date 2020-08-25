module.exports = {
    name: "kick",
    usage: "[user mention]",
    description: "kick the mentioned user",
    execute(message, args) {

        let reson = message.content.split(" ").slice(2).join(" ");
        const rreson = message.content.split(" ").slice(2).join(" ");
if(!message.guild.me.hasPermission("KICK_MEMBERS")) { return message.reply("I need the permission ``KICK_MEMBERS`` for this command")
}
        if (message.member.hasPermission("KICK_MEMBERS")) {
            if (!args[0]) return message.reply("you need to tag a user to kick !");
            const member = message.mentions.members.first();
    
member.kick(rreson).then(() => {
            message.channel.send(`I sucessful kicked the user \n reason: ${reson}`)
}).catch(err => {
     message.reply('I cant kick this member')
})
        }else return message.channel.send("you need the permission ``KICK_MEMBERS`` for this command")
    }
} 