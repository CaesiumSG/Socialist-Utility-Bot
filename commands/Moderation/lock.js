module.exports = {
     name: 'lock-channel',
     description: 'lock a channel',
   
     execute(message) {
   if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('you need the permission ``MANAGE_CHANNELS`for this command')
   if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.reply("I need the permission ``MANAGE_CHANNELS`` for this command")
   const channel = message.channel
   channel.updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: false })
   channel.setName('🔒 ' + channel.name)
   message.channel.send('🔒 channel locked')
     }
    
}