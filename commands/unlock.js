module.exports = {
     name: 'unlock-channel',
     description: 'unlock a channel',
 
     execute(message) {
   if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('you need the permission ``MANAGE_CHANNELS`for this command')
   if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.reply("I need the permission ``MANAGE_CHANNELS`` for this command")
  
   const channel = message.channel
const str = channel.name
   channel.updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: true }) 
   const chname = str.substring(2)
   channel.setName(chname)
   message.channel.send('🔓 channel unlocked')
     }
    
}