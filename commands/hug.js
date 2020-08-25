module.exports = {
    name: "hug",
    cooldown: 5,
    description: "hug your friend UwU",
    usage: '[user mention]',
    execute( message, args) {

const { MessageEmbed} = require("discord.js");
const { execute } = require("./fkick");

const answers = [
    "https://cdn.weeb.sh/images/SJebhd1Ob.gif",
    "https://cdn.weeb.sh/images/Sk-xxs3C-.gif",
    "https://cdn.weeb.sh/images/r1R3_d7v-.gif", 
    "https://cdn.weeb.sh/images/BysjuO7D-.gif", 
    "https://cdn.weeb.sh/images/Sy65_OQvZ.gif"
]
 

        let mentionedUser = message.mentions.users.first();
 if (!mentionedUser) return message.reply("you need to tag a user to hug.");

    const answer = answers[Math.floor(Math.random() * answers.length)];
 
    let embedhug = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Hug")
    .setDescription(`${message.author} hug ${mentionedUser}.`)
    .setImage(answer)
    .setTimestamp()
    .setFooter("Hugs time uwu");
   
 
    message.channel.send(embedhug);

}
}