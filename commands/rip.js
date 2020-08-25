module.exports = {
    name: "rip",
    cooldown: 3,
    description: "rip someone",
    execute( message, args) {

const { MessageEmbed} = require("discord.js");
const { execute } = require("./fkick");
 

    if (!args[0]) return message.reply("you need to tag a user to hug.");
    let mentionedUser = message.mentions.users.first();
 
    let embedhug = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${mentionedUser} is ded`)
    .setImage("https://tenor.com/biH4f.gif")
    .setTimestamp()
    .setFooter("ded");
 
    message.channel.send(embedhug);
 
    message.delete();
}
}
