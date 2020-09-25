const Discord = require('discord.js');
const db = require('quick.db');
const rs = require('randomstring');

module.exports.run = async (client, message, args) => {
    

    let notallowed = new Discord.MessageEmbed()
    .setColor('#e64b0e')
    .setDescription(`You Need The **Support Team** Role To Remove Users From Tickets`)

    if(!message.member.roles.find(r => r.name == 'Support Team')) return message.channel.send(notallowed)

  let channelsend = new Discord.MessageEmbed()
  .setColor('#e64b0e')
  .setTitle(`Removed User`)
  .setDescription(`${message.author} Has Removed ${message.mentions.members.first()} From This Ticket`)

  let categorysend = new Discord.MessageEmbed()
  .setColor('#e64b0e')
  .setDescription(`This Server Hasn't Been Setup | Contact The Server Owner`)



    

    message.channel.overwritePermissions(user, {'VIEW_CHANNEL': false, 'SEND_MESSAGES': false, 'MENTION_EVERYONE': false})
      message.channel.send(channelsend)

    
    }  
module.exports.help = {
    name:"ticket-remove",
    aliases: ["r"]
  }