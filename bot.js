//imports

const Discord = require('discord.js');
const discord = require('discord.js');
const Enmap = require("enmap");



require('dotenv').config();

var fs = require('fs');
var prefix = '*';
var db = require('quick.db');



//constants
const VERSION = '1.1.0';

//declarations
var client = new Discord.Client();
client.commands = new Discord.Collection();

//
// Event Handlers
//

//bot is ready to start working, print status update to console
client.on('ready', async function() {
    console.log('[META][INFO] Connected to Discord API Service');
    
});

client.on('ready', () => {
  client.user.setStatus('dnd')
  const playing = '*help | Stan Socialism! Bot coded by Caesium Addict#8653, DM him for help!'

    client.user.setPresence({
      activity: {
        name: playing,
        type: 0,
        
      },
  });
});
//bot disconnected from Discord
client.on('disconnected', function() {
    console.log('[META][WARN] Disconnected from Discord API Service. Attempting to reconnected...');
});

//warning from Discord.js
client.on('warn', function(msg) {
    console.log('[META][WARN] ' + msg);
});

//error from Discord.js
client.on('error', function(err) {
    console.log('[META][ERROR] ' + err.message);
    process.exit(1);
});


client.commands = new discord.Collection();
client.aliases = new discord.Collection();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});


client.commands = new Enmap();

fs.readdir("./commands/Currency/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/Currency/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[META][INFO] Init Currency command: ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/Fun/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/Fun/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[META][INFO] Init Fun commands ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/Moderation/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/Moderation/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[META][INFO] Init Moderation commands: ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/Utility/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/Utility/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[META][INFO] Init Utility commands: ${commandName}`);
    client.commands.set(commandName, props);
  });
});
//message received
client.on('message', function(message) {
    if(message.author.id != client.user.id) {
        if (message.channel.type == 'text') return;
            
        else if (message.channel.type == 'dm')
            message.channel.send('Beep boop! Sorry, I may not be able to respond to direct messages. Try inviting me to your ' +
                'server!\nhttps://discord.com/api/oauth2/authorize?client_id=747813768968405135&permissions=8&scope=bot');
        else if (message.channel.type == 'group')
            message.channel.send('Beep boop! Sorry, I can\'t log group messages. Try inviting me to your server!\n' +
                'https://discord.com/api/oauth2/authorize?client_id=747813768968405135&permissions=8&scope=bot');
    }
});

client.on('messageDelete', async message => {
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    function sleep(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
              if ((new Date().getTime() - start) > milliseconds){
  break;   
              }
      }
      
    }
   
    if (message.guild) {
      if (message.author.bot) return;
      var y = db.get('messagedelete_' + message.guild.id)
      if (y !== `enabled`) return;
      var x = db.get('loggingchannel_' + message.guild.id)
      x = client.channels.cache.get(x)
      if (message.channel == x) return;
      var embed = new discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor('message deleted', message.guild.iconURL)
      .addField('user', message.author.tag)
      .addField('message', message.content)
      .addField('channel', message.channel)
      .setTimestamp()
      x.send(embed).catch()
    }
    
  });
    
  client.on("channelCreate", async function(channel){
    if (!channel.guild) return;
         var y = db.get(`channelcreate_${channel.guild.id}`)
      if (y !== 'enabled') return;
     var x = db.get('loggingchannel_' + channel.guild.id)
    var x = client.channels.cache.get(x)
      var embed = new discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor('channel created', channel.guild.iconURL)
      .addField('channel', channel)
      .addField('channel id', channel.id + `\n**----------------------**`)
      .setTimestamp()
      x.send(embed).catch()
    
  
  });
  
  client.on("channelDelete", async function(channel){
    if (!channel.guild) return;
         var y = db.get(`channelcreate_${channel.guild.id}`)
      if (y !== 'enabled') return;
     var x = db.get('loggingchannel_' + channel.guild.id)
    var x = client.channels.cache.get(x)
  
      var embed = new discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor('channel deleted', channel.guild.iconURL)
      .addField('channel name', channel.name)
      .addField('channel id', channel.id + `\n**----------------------**`)
      .setTimestamp()
      x.send(embed).catch()
    
  
  });
  client.on("emojiCreate", async function(emoji){
   
          var y = db.get(`emojicreate_${emoji.guild.id}`)
      if (y !== 'enabled') return;
     var x = db.get('loggingchannel_' + emoji.guild.id)
    var x = client.channels.cache.get(x)
  
      var embed = new discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor('emoji created', emoji.guild.iconURL)
      .addField('emote name', emoji.name)
      .addField('emote', emoji + `\n**----------------------**`)
      .setTimestamp()
      x.send(embed).catch()
    
  
  });
  client.on("emojiDelete", async function(emoji){
       var y = db.get(`emojidelete_${emoji.guild.id}`)
      if (y !== 'enabled') return;
     var x = db.get('loggingchannel_' + emoji.guild.id)
    var x = client.channels.cache.get(x)
  
      var embed = new discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor('emoji deleted', emoji.guild.iconURL)
      .addField('emote name', emoji.name)
      .addField('emote url', emoji.url+ `\n**----------------------**`)
      .setTimestamp()
      x.send(embed).catch()
    
  
  }); 
  client.on("guildBanAdd", async function(guild, user){
     
         var y = db.get(`guildbanadd_${guild.id}`)
      if (y !== 'enabled') return;
     var x = db.get('loggingchannel_' + guild.id)
    var x = client.channels.cache.get(x)
  
      var embed = new discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor("user banned", guild.iconURL)
      .addField('banned user', user.tag)
      .addField('user id', user.id + `\n**----------------------**`)
      .setTimestamp()
      x.send(embed).catch()
    
  });
  client.on("guildBanRemove", async function(guild, user){
       
         var y = db.get(`guildbanremove_${guild.id}`)
      if (y !== 'enabled') return;
     var x = db.get('loggingchannel_' + guild.id)
    var x = client.channels.cache.get(x)
  
      var embed = new discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor("user unbanned", guild.iconURL)
      .addField('unbanned user', user.tag)
      .addField('user id', user.id + `\n**----------------------**`)
      .setTimestamp()
      x.send(embed).catch()
  });
  client.on("guildMemberAdd", async function(member){
     
         var y = db.get(`guildmemberadd_${member.guild.id}`)
      if (y !== 'enabled') return;
     var x = db.get('loggingchannel_' + member.guild.id)
    var x = client.channels.cache.get(x)
  
      var embed = new discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor("user join", member.guild.iconURL)
      .addField('user tag', member.user.tag)
      .addField('user id', member.user.id + `\n**----------------------**`)
      .setTimestamp()
      x.send(embed).catch()
  });
  client.on("guildMemberRemove", async function(member){
   var y = db.get(`guildmemberremove_${member.guild.id}`)
      if (y !== 'enabled') return;
     var x = db.get('loggingchannel_' + member.guild.id)
    var x = client.channels.cache.get(x)
  
      var embed = new discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor("user left", member.guild.iconURL)
      .addField('user tag', member.user.tag)
      .addField('user id', member.user.id + `\n**----------------------**`)
      .setTimestamp()
      x.send(embed).catch()
    
  });
  
  client.on("messageDeleteBulk", async function(messages){
    
    var y = db.get(`messagebulkdelete_${messages.random().guild.id}`)
      if (y !== 'enabled') return;
     var x = db.get('loggingchannel_' + messages.random().guild.id)
    var x = client.channels.cache.get(x)
  if (messages.random().channel == x) return;
    
  await messages.array().reverse().forEach(m => {
    var x = m.createdAt.toString().split(' ')
  fs.appendFile('Andreisgay.txt', `[${m.author.tag}], [#${m.channel.name}]: ["${m.content}"], created at [${x[0]} ${x[1]} ${x[2]} ${x[3]} ${x[4]}]\n\n`, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
    });
    
      var embed = new discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor("message bulk delete", messages.random().guild.iconURL)
      .addField('channel', messages.random().channel)
      .addField('messages count', messages.array().length+ `\n**----------------------**`)
      .setTimestamp()
      await x.send(embed).catch()
    await x.send(`Here is the log file for the deleted messages: \n`).catch()
    await x.send(({files: [{attachment:'Andreisgay.txt'}]})).catch()
    
    fs.unlink('Andreisgay.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });
    
  });
  
  client.on("roleCreate", async function(role){
       var y = db.get(`rolecreate_${role.guild.id}`)
      if (y !== 'enabled') return;
     var x = db.get('loggingchannel_' + role.guild.id)
    var x = client.channels.cache.get(x)
  
   
      var embed = new discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor("role deleted", role.guild.iconURL)
      .addField('role name', role.name)
      .addField('role id', role.id + `\n**----------------------**`)
      .setTimestamp()
      x.send(embed).catch()
    
  });
  client.on("roleDelete", async function(role){
    
    var y = db.get(`roledelete_${role.guild.id}`)
      if (y !== 'enabled') return;
     var x = db.get('loggingchannel_' + role.guild.id)
    var x = client.channels.cache.get(x)
  
      var embed = new discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor("role deleted", role.guild.iconURL)
      .addField('role name', role.name)
      .addField('role id', role.id + `\n**----------------------**`)
      .setTimestamp()
      
      x.send(embed).catch()
    
  });
  
  client.on('message', async message => {
    
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (message.content.indexOf(prefix) !== 0) return;
    function sleep(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
              if ((new Date().getTime() - start) > milliseconds){
  break;   
              }
      }
      
    }
    
    let user = message.author;
    db.add(`money_${message.guild.id}_${user.id}`, 1);
    if(message.content.toLowerCase() === '!d bump' && message.channel.id === '749412341581611053') {
      db.add(`money_${message.guild.id}_${user.id}`, 249);
    }
    if(message.channel.id === '749412341581611050' || '749412341581611051' || '749412342109831211' || '749412342109831210') {
      db.add(`money_${message.guild.id}_${user.id}`, 4);
    }


    if(command === "unban"){
      if(!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`**${msg.author.username}**, You do not have perms to unban someone`)
      }
      
      if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`**${msg.author.username}**, I do not have perms to unban someone`)
      }
      
      let userID = args[0]
        message.guild.fetchBans().then(bans=> {
        if(bans.size == 0) return 
        let bUser = bans.find(b => b.user.id == userID)
        if(!bUser) return
        message.guild.members.unban(bUser.user)
  })
      
    ;}
      if (command === "conf") {
      if (!message.guild) return message.channel.send(`use this command in a server, not dm!`)
        if (!message.member.hasPermission(`MANAGE_CHANNELS`) || !message.member.hasPermission(`MANAGE_GUILD`)) return message.channel.send(`sorry, you need manage channels / manage guild permission to use this!`)
      var embed = new discord.MessageEmbed()
      .setAuthor(`Socialist Utility Bot Config`, message.guild.iconURL)
      
      .setTitle(`configuration settings for the ${message.guild.name}\n----------------------`)
      .setColor('RANDOM')
      var y = await db.get(`allenabled_${message.guild.id}`)
      if (y == 'enabled') {
        embed.addField('logging deleted messages [1]', "enabled")
        embed.addField('logging created roles [2]', "enabled")
        embed.addField('logging deleted roles [3]', "enabled")
        embed.addField('logging bulk message deletes [4]', "enabled")
        embed.addField('logging member leaves/user kicks [5]', "enabled")
        embed.addField('logging member joins [6]', "enabled")
        embed.addField('logging guild bans [7]', "enabled")
        embed.addField('logging guild unbans [8]', "enabled")
        embed.addField('logging emoji creations [9]', "enabled")
        embed.addField('logging emoji deletions [10]', "enabled")
        embed.addField('logging channel creations [11]', "enabled")
        embed.addField('logging channel deletions [12]', "enabled")
       embed.addField(`----------------------`, `commands: \n\`${prefix}enable [number]\` - enable the logging for a module\n\`${prefix}enable all\` - enable all logging modules \n \`${prefix}disable [number]\` - disable a logging module \n\`${prefix}disable all\` - disable all logging modules\n \`${prefix}reset\` - refreshes the bots entire cache for the server; everything set to default, with no logging channel`)
     var x = await db.get('loggingchannel_' + message.guild.id)
      if (x == null) embed.addField(`there is no logging channel set up for this server. to set one up, type:`, `\`${prefix}setchannel #channel\``)
      if (x !== null) {
        var y = client.channels.cache.get(x)
       embed.addField(`----------------------`, `logging channel rn is ${y}. to set up another channel, type **${prefix}setchannel #channel**`)
      }
        embed.setFooter(`any suggestions for the bot or the setting up process? hit me up:  `)
      } else if (y == "disabled") {
          embed.addField('logging deleted messages [1]', "disabled")
        embed.addField('logging created roles [2]', "disabled")
        embed.addField('logging deleted roles [3]', "disabled")
        embed.addField('logging bulk message deletes [4]', "disabled")
        embed.addField('logging member leaves/user kicks [5]', "disabled")
        embed.addField('logging member joins [6]', "disabled")
        embed.addField('logging guild bans [7]', "disabled")
        embed.addField('logging guild unbans [8]', "disabled")
        embed.addField('logging emoji creations [9]', "disabled")
        embed.addField('logging emoji deletions [10]', "disabled")
        embed.addField('logging channel creations [11]', "disabled")
        embed.addField('logging channel deletions [12]', "disabled")
      embed.addField(`----------------------`, `commands: \n\`${prefix}enable [number]\` - enable the logging for a module\n\`${prefix}enable all\` - enable all logging modules \n \`${prefix}disable [number]\` - disable a logging module \n\`${prefix}disable all\` - disable all logging modules\n \`${prefix}reset\` - refreshes the bots entire cache for the server; everything set to default, with no logging channel`)
      var x = await db.get('loggingchannel_' + message.guild.id)
      if (x == null) embed.addField(`there is no logging channel set up for this server. to set one up, type:`, `\`${prefix}setchannel #channel\``)
      if (x !== null) {
        var y = client.channels.cache.get(x)
        embed.addField(`----------------------`, `logging channel rn is ${y}. to set up another channel, type **${prefix}setchannel #channel**`)
      }
      }
        else {
        
      var x = await db.get('messagedelete_' + message.guild.id)
      if (x == null || x == "disabled") {embed.addField('logging deleted messages [1]', "disabled")} else {embed.addField('logging deleted messages [1]', "enabled")}
      var x = await db.get('rolecreate_' + message.guild.id)
      if (x == null || x == "disabled") {embed.addField('logging created roles [2]', "disabled")} else {embed.addField('logging created roles [2]', "enabled")}
      var x = await db.get('roledelete_' + message.guild.id)
      if (x == null || x == "disabled") {embed.addField('logging deleted roles [3]', "disabled")} else {embed.addField('logging deleted roles [3]', "enabled")}
      var x = await db.get('messagebulkdelete_' + message.guild.id)
      if (x == null || x == "disabled") {embed.addField('logging bulk message deletes [4]', "disabled")} else {embed.addField('logging bulk message deletes [4]', "enabled")}
      var x = await db.get('guildmemberremove_' + message.guild.id)
      if (x == null || x == "disabled") {embed.addField('logging member leaves/user kicks [5]', "disabled")} else {embed.addField('logging member leaves/user kicks [5]', "enabled")}
      var x = await db.get('guildmemberadd_' + message.guild.id)
      if (x == null || x == "disabled") {embed.addField('logging member joins [6]', "disabled")} else {embed.addField('logging member joins [6]', "enabled")}
      var x = await db.get('guildbanadd_' + message.guild.id)
      if (x == null || x == "disabled") {embed.addField('logging guild bans [7]', "disabled")} else {embed.addField('logging guild bans [7]', "enabled")}
      var x = await db.get('guildbanremove_' + message.guild.id)
      if (x == null || x == "disabled") {embed.addField('logging guild unbans [8]', "disabled")} else {embed.addField('logging guild unbans [8]', "enabled")}
      var x = await db.get('emojicreate_' + message.guild.id)
      if (x == null || x == "disabled") {embed.addField('logging emoji creations [9]', "disabled")} else {embed.addField('logging emoji creations [9]', "enabled")}
      var x = await db.get('emojidelete_' + message.guild.id)
      if (x == null || x == "disabled") {embed.addField('logging emoji deletions [10]', "disabled")} else {embed.addField('logging emoji deletions [10]', "enabled")}
      var x = await db.get('channelcreate_' + message.guild.id)
      if (x == null || x == "disabled") {embed.addField('logging channel creations [11]', "disabled")} else {embed.addField('logging channel creations [11]', "enabled")}
      var x = await db.get('channeldelete_' + message.guild.id)
      if (x == null || x == "disabled") {embed.addField('logging channel deletions [12]', "disabled")} else {embed.addField('logging channel deletions [12]', "enabled")}
      embed.addField(`----------------------`, `commands: \n\`${prefix}enable [number]\` - enable the logging for a module\n\`${prefix}enable all\` - enable all logging modules \n \`${prefix}disable [number]\` - disable a logging module \n\`${prefix}disable all\` - disable all logging modules\n \`${prefix}reset\` - refreshes the bots entire cache for the server; everything set to default, with no logging channel`)
      var x = await db.get('loggingchannel_' + message.guild.id)
      if (x == null) embed.addField(`there is no logging channel set up for this server. to set one up, type:`, `\`${prefix}setchannel #channel\``)
      if (x !== null) {
        var y = client.channels.cache.get(x)
        embed.addField(`----------------------`, `logging channel rn is ${y}. to set up another channel, type **${prefix}setchannel #channel**`)
      }
      }
        embed.setFooter(`any suggestions for the bot? hit me up: `)
        embed.addField(`----------------------\n`, `[bot invite](https://discord.com/api/oauth2/authorize?client_id=747813768968405135&permissions=8&scope=bot)`)
      message.channel.send(embed)
      
    }
    
    if (command == "reset") {
      if (!message.guild) return message.reply('use this command in a server pls')
       if (!message.member.hasPermission(`MANAGE_CHANNELS`) || !message.member.hasPermission(`MANAGE_GUILD`)) return message.channel.send(`sorry, you need manage channels / manage guild permission to use this!`)
       await db.delete(`loggingchannel_${message.guild.id}`)
       await db.delete(`allenabled_${message.guild.id}`)
      await db.delete(`messagedelete_${message.guild.id}`)
       await db.delete('rolecreate_' + message.guild.id)
       await db.delete('roledelete_' + message.guild.id)
      await db.delete('messagebulkdelete_' + message.guild.id)
      await db.delete('guildmemberremove_' + message.guild.id)
      await db.delete('guildmemberadd_' + message.guild.id)
      await db.delete('guildbanadd_' + message.guild.id)
      await db.delete('guildbanremove_' + message.guild.id)
      await db.delete('emojicreate_' + message.guild.id)
      await db.delete('emojidelete_' + message.guild.id)
       await db.delete('channelcreate_' + message.guild.id)
       await db.delete('channeldelete_' + message.guild.id)
    message.channel.send(`done, cleared all cache for this server. type \`${prefix}conf\` to setup again.`)
    }
  
    if (command == "disable") {
      
      if (!message.guild) return message.reply('use this command in a server pls')
       if (!message.member.hasPermission(`MANAGE_CHANNELS`) || !message.member.hasPermission(`MANAGE_GUILD`)) return message.channel.send(`sorry, you need manage channels / manage guild permission to use this!`)
       if (!args[0]) return message.channel.send(`you need to specify a number with the event u want to not log. type \`${prefix}help\``)
      var x = await db.get('loggingchannel_' + message.guild.id)
      if (x == null || x == 'none') {
      return message.channel.send(`you haven't set up a logging channel for this guild. type \`${prefix}help\``)
      }
      if (args[0] > 12 || args[0] < 1) return message.reply(`type \`${prefix}help\` and find the number with what event u want to disable logging for`)
      switch(args[0]) {
        case "1": 
          await db.set(`messagedelete_${message.guild.id}`, 'disabled')
          message.channel.send(`ok, disabled the logging for deleted messages`)
        await db.delete(`allenabled_${message.guild.id}`)
          break;
        case "2": 
          await db.set(`rolecreate_${message.guild.id}`, 'disabled')
            message.channel.send(`ok, disabled the logging for created roles`)
         await db.delete(`allenabled_${message.guild.id}`)
          break;
          case "3": 
           await db.set(`roledelete_${message.guild.id}`, 'disabled')
            message.channel.send(`ok, disabled the logging for deleted roles`)
          await db.delete(`allenabled_${message.guild.id}`)
          break;
          case "4": 
          await db.set(`messagebulkdelete_${message.guild.id}`, 'disabled')
            message.channel.send(`ok, disabled the logging for message bulk deletes`)
          await db.delete(`allenabled_${message.guild.id}`)
          break;
          case "5": 
          await db.set(`guildmemberremove_${message.guild.id}`, 'disabled')
            message.channel.send(`ok, disabled the logging member leaves/user kicks`)
       await db.delete(`allenabled_${message.guild.id}`)
          break;
          case "6": 
          await db.set(`guildmemberadd_${message.guild.id}`, 'disabled')
            message.channel.send(`ok, disabled the logging for new members`)
         await db.delete(`allenabled_${message.guild.id}`)
          break;
          case "7": 
          await db.set(`guildbanadd_${message.guild.id}`, 'disabled')
            message.channel.send(`ok, disabled the logging banned users`)
       await db.delete(`allenabled_${message.guild.id}`)
          break;
          case "8": 
          await db.set(`guildbanremove_${message.guild.id}`, 'disabled')
            message.channel.send(`ok, disabled the logging unbanned users`)
          await db.delete(`allenabled_${message.guild.id}`)
          break;
        case "9":
          await db.set(`emojicreate_${message.guild.id}`, 'disabled')
            message.channel.send(`ok, disabled the logging for emoji creations`)
          await db.delete(`allenabled_${message.guild.id}`)
          break;
          case "10": 
          await db.set(`emojidelete_${message.guild.id}`, 'disabled')
            message.channel.send(`ok, disabled the logging for emoji deletions`)
          await db.delete(`allenabled_${message.guild.id}`)
          break;
          case "11": 
          await db.set(`channelcreate_${message.guild.id}`, 'disabled')
            message.channel.send(`ok, disabled the logging for channel creations`)
          await db.delete(`allenabled_${message.guild.id}`)
          break;
          case "12": 
          await db.set(`channeldelete_${message.guild.id}`, 'disabled')
            message.channel.send(`ok, disabled the logging for channel deletions`)
         await db.delete(`allenabled_${message.guild.id}`)
          break;
        case "all":
          await db.set(`allenabled_${message.guild.id}`, 'disabled')
          await db.set(`messagedelete_${message.guild.id}`, 'disabled')
          await db.set('rolecreate_' + message.guild.id, 'disabled')
       await db.set('roledelete_' + message.guild.id, 'disabled')
      await db.set('messagebulkdelete_' + message.guild.id, 'disabled')
      await db.set('guildmemberremove_' + message.guild.id, 'disabled')
      await db.set('guildmemberadd_' + message.guild.id, 'disabled')
      await db.set('guildbanadd_' + message.guild.id, 'disabled')
      await db.set('guildbanremove_' + message.guild.id, 'disabled')
      await db.set('emojicreate_' + message.guild.id, 'disabled')
      await db.set('emojidelete_' + message.guild.id, 'disabled')
       await db.set('channelcreate_' + message.guild.id, 'disabled')
       await db.set('channeldelete_' + message.guild.id, 'disabled')
          message.channel.send(`ok disabled logging for all events in this guild`)
      }
    }
    
    if (command == "enable") {
      if (!message.guild) return message.reply('use this command in a server pls')
       if (!message.member.hasPermission(`MANAGE_CHANNELS`) || !message.member.hasPermission(`MANAGE_GUILD`)) return message.channel.send(`sorry, you need manage channels / manage guild permission to use this!`)
          if (!args[0]) return message.channel.send(`you need to specify a number with the event u want to log. type \`${prefix}help\``)
      var x = await db.get('loggingchannel_' + message.guild.id)
      if (x == null || x == 'none') {
      return message.channel.send(`you haven't set up a logging channel for this guild. type \`${prefix}help\``)
      }
      if (args[0] > 12 || args[0] < 1) return message.reply(`type \`${prefix}help\` and find the number with what event u want to enable logging for`)
      switch(args[0]) {
        case "1": 
          await db.set(`messagedelete_${message.guild.id}`, 'enabled')
       message.channel.send(`ok, enabled the logging for deleted messages`)
          await db.delete(`allenabled_${message.guild.id}`)
          break;
        case "2": 
          await db.set(`rolecreate_${message.guild.id}`, 'enabled')
            message.channel.send(`ok, enabled the logging for created roles`)
         await db.delete(`allenabled_${message.guild.id}`)
          break;
          case "3": 
           await db.set(`roledelete_${message.guild.id}`, 'enabled')
            message.channel.send(`ok, enabled the logging for deleted roles`)
        await db.delete(`allenabled_${message.guild.id}`)
          break;
          case "4": 
          await db.set(`messagebulkdelete_${message.guild.id}`, 'enabled')
            message.channel.send(`ok, enabled the logging for message bulk deletes`)
       await db.delete(`allenabled_${message.guild.id}`)
          break;
          case "5": 
          await db.set(`guildmemberremove_${message.guild.id}`, 'enabled')
            message.channel.send(`ok, enabled the logging member leaves/user kicks`)
         await db.delete(`allenabled_${message.guild.id}`)
          break;
          case "6": 
          await db.set(`guildmemberadd_${message.guild.id}`, 'enabled')
            message.channel.send(`ok, enabled the logging for new members`)
         await db.delete(`allenabled_${message.guild.id}`)
          break;
          case "7": 
          await db.set(`guildbanadd_${message.guild.id}`, 'enabled')
            message.channel.send(`ok, enabled the logging banned users`)
          await db.delete(`allenabled_${message.guild.id}`)
          break;
          case "8": 
          await db.set(`guildbanremove_${message.guild.id}`, 'enabled')
            message.channel.send(`ok, enabled the logging unbanned users`)
         await db.delete(`allenabled_${message.guild.id}`)
          break;
        case "9":
          await db.set(`emojicreate_${message.guild.id}`, 'enabled')
            message.channel.send(`ok, enabled the logging for emoji creations`)
        await db.delete(`allenabled_${message.guild.id}`)
          break;
          case "10": 
          await db.set(`emojidelete_${message.guild.id}`, 'enabled')
            message.channel.send(`ok, enabled the logging for emoji deletions`)
          await db.delete(`allenabled_${message.guild.id}`)
          break;
          case "11": 
          await db.set(`channelcreate_${message.guild.id}`, 'enabled')
            message.channel.send(`ok, enabled the logging for channel creations`)
        await db.delete(`allenabled_${message.guild.id}`)
          break;
          case "12": 
          await db.set(`channeldelete_${message.guild.id}`, 'enabled')
            message.channel.send(`ok, enabled the logging for channel deletions`)
          await db.delete(`allenabled_${message.guild.id}`)
          break;
        case "all":
          await db.set(`allenabled_${message.guild.id}`, 'enabled')
          
             await db.set('rolecreate_' + message.guild.id, 'enabled')
           await db.set(`messagedelete_${message.guild.id}`, 'enabled')
       await db.set('roledelete_' + message.guild.id, 'enabled')
      await db.set('messagebulkdelete_' + message.guild.id, 'enabled')
      await db.set('guildmemberremove_' + message.guild.id, 'enabled')
      await db.set('guildmemberadd_' + message.guild.id, 'enabled')
      await db.set('guildbanadd_' + message.guild.id, 'enabled')
      await db.set('guildbanremove_' + message.guild.id, 'enabled')
      await db.set('emojicreate_' + message.guild.id, 'enabled')
      await db.set('emojidelete_' + message.guild.id, 'enabled')
       await db.set('channelcreate_' + message.guild.id, 'enabled')
       await db.set('channeldelete_' + message.guild.id, 'enabled')
          message.channel.send(`ok enabled logging for all events in this guild`)
      }
    }
    
    if (command == "setchannel") {
      if (!message.guild) return message.reply('use this command in a server pls')
       if (!message.member.hasPermission(`MANAGE_CHANNELS`) || !message.member.hasPermission(`MANAGE_GUILD`)) return message.channel.send(`sorry, you need manage channels / manage guild permission to use this!`)
       if (!args[0] || args[1]) return message.reply(`please specify the channel, like so: \`${prefix}setchannel #channel\``)
      
       x = message.mentions.channels.first()
      if (!x) return message.channel.send(`please specify the channel, like so: \`${prefix}setchannel #channel\``)
       await db.set(`loggingchannel_${message.guild.id}`, x.id)
        message.channel.send(`ok, logging channel for this guild set to ${x}`)
    }
    
  });






  var badWords = [
    'Alt',
    'Alts',
    'alt account',
  
    'alt',
    'alts',
    
    'scam',
    'scamming'
  ];
  
  client.on('message', async message => {

  
    //2 looking for words
    let foundInText = false;
    for (var i in badWords) { // loops through the blacklisted list
      if (message.content.toLowerCase().includes(badWords[i].toLowerCase())) foundInText = true;
    }
    // checks casesensitive words
  
    //3 deletes and send message
      if (foundInText) {
        message.delete();
        message.channel.send('<a:alert:749990857041510491> Blacklisted Word Detected <a:alert:749990857041510491>').then(msg => msg.delete({ timeout: 10000 }));
        message.channel.send('Bot Eating Words goes brrrrr, u used a blacklisted word boi dont do it again <a:screaming_pepe:749990876352217109> ').then(msg => msg.delete({ timeout: 10000 }));
        message.channel.send('Andre srsly stop giving urself all the roles').then(msg => msg.delete({ timeout: 10000 }));
        message.channel.send('Also, Free gulag for 10 seconds').then(msg => msg.delete({ timeout: 10000 }));
        let muterole = message.guild.roles.cache.find(role => role.name === "gulag");
        const member = message.member; 
        member.roles.add(muterole);
        setTimeout( function () {
          
          member.roles.remove(muterole);
          
      }, (10000));
    }
  });


  const { GiveawaysManager } = require('discord-giveaways');
  client.giveawaysManager = new GiveawaysManager(client, {
      storage: "./giveaways.json",
      updateCountdownEvery: 1000,
      default: {
          botsCanWin: false,
          embedColor: "#00FF00",
          reaction: "755856104197587015"
      }
  });
  // We now have a client.giveawaysManager property to manage our giveaways!
  
  client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
      console.log(`${member.user.tag} entered giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
  });
  
  client.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
      console.log(`${member.user.tag} unreact to giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
  });


  const applyText = (canvas, text) => {
    const ctx = canvas.getContext('2d');
    let fontSize = 70;
  
    do {
      ctx.font = `${fontSize -= 10}px sans-serif`;
    } while (ctx.measureText(text).width > canvas.width - 300);
  
    return ctx.font;
  };
  
  const Canvas = require('canvas');

  client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '❃║welcome-leave║🚪');
    if (!channel) return;
  
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');
  
    const background = await Canvas.loadImage('./wallpaper.gif');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
    ctx.font = '28px comic-sans';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);
  
    ctx.font = applyText(canvas, `${member.displayName}!`);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);
  
    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
  
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 25, 25, 200, 200);
  
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'andre-X-virianium-whenxdxdxd.png');
  
    channel.send(`Welcome to socialism, comrade ${member}!`, attachment);
  });
  
  client.on('message', message => {
    if (message.content === '*join') {
      client.emit('guildMemberAdd', message.member);
    }
  });
  
console.log('Logger v' + VERSION);
console.log('A utility tool made by Liquid Caesium#7376.\n');

console.log('----------------------------------------------');

console.log('[META][INFO] Started Logger v' + VERSION);

client.login(process.env.DISCORD_TOKEN); //log in to discord




