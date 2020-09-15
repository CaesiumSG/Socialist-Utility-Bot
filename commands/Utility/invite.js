module.exports = {
    name: "invitebot",
    cooldown: 4,
    description: "invite the bot to your server",
    execute(message) {
        const Discord = require('discord.js')
        const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
  .setTitle('invite CaesiumSGBot')
  .setURL('')
    .setAuthor('bot invite', 'https://media.discordapp.net/attachments/683245625520685069/738963853949272156/737745506649899119.png')
  .setDescription('Communism and Socialism FTW! [add me to ur server](https://discord.com/api/oauth2/authorize?client_id=738984343543742605&permissions=8&scope=bot)')

.setTimestamp()
.setFooter('thx for beating the shit out of capitalism :)', 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg');

message.channel.send(exampleEmbed);
}}
