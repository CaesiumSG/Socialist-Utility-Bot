
const Discord = require('discord.js');


module.exports = {
    name: "crename",
    description: "renames a channel",

    async run (client, message, args) {
        let channelname = message.mentions.channels.first()
        if(!message.member.hasPermission("MANAGE_CHANNEL")) return message.channel.send('Dont try to break me nab')
        let newchannelname = args.slice(1).join(" ");
        if (!newchannelname) return message.channel.send('CHOOSE A CHANNEL??????????????');
        channelname.setName(newchannelname);

    
        

        


            
            

            message.channel.send(`${channelname} Has been Renamed to ${newchannelname} ! **hmm** `)
        
    }
}
