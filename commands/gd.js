const Discord = require('discord.js')
module.exports = {
    name: "gdcomment",
    description: "create a gd comment",
    cooldown: 4,
    usage: "[message]",
    execute(message) {
        
        
        let MSG = message.content.split(" ").slice(1).join("%20");
 
        if(!MSG)return message.channel.send("no message found")

                
      if (MSG.length  > 100) return message.reply('hey hey hey chill dont put more than 100 character')  
      try {
   const supEmbed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle("new comment !")
   .setImage(`https://gdcolon.com/tools/gdcomment/img/${MSG}?name=Socialist%20user&likes=69420&mod=mod&deletable`)
      .setTimestamp()
      .setFooter("generated from gd colon tools smh go check him out")
     
      message.channel.send(supEmbed)
     
      } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
      }
      }