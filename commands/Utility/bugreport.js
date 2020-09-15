const Discord = require('discord.js');
const moment = require('moment');
exports.run = (client, message, args, Discord) => {
  let tDate = moment().format('LLLL');
  const ownerID = '733622933343174728';
  client.users.get(ownerID).send(`**Username**: ${message.author.username}, ${message.author.id}\n**Bug**: \`\`\`${args.join(" ")}\`\`\`\n**Server**: ${message.guild.name}\n**Date**: ${tDate}`);
}