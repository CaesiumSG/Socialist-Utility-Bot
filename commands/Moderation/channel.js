const channel = require('discord.js');


module.exports = {
    name: "channel",
    description: "directly renames a channel",

    async run (client, message, args) {
        
        if(!message.member.hasPermission("MANAGE_CHANNEL")) return message.channel.send('Dont try to break me nab no perms')
        let newchannelname = args.join(" ");
        if (!newchannelname) return message.channel.send('CHOOSE A NEW CHANNEL NAME??????????????');
        message.channel.setName(newchannelname);

    
        

        


            
            

            message.channel.send(`Channel Has been Renamed to ${newchannelname} ! **hmm** `)
        
    }
}
