
const prefix = ('*')

const Discord = require('discord.js');

module.exports = {
    name: "heistcalc",
    description: "pay heist money when",


    async run (client, message, args){
        
        amountpersonheisted = args[0]; //amount person got from heist
        friendlyheisters = args[1]; //basically us all
        friendlyheistersdied = args[2]; //definetely not me
        
        

        if(!args[2] || !args[1] || !args[0] ||args[3]) return message.channel.send('One of the parameters are incorrect, are u sure u imputted the stuff correctly? use the params given or message the bot owner. [AMOUNT EACH PERSON GOT IN THE HEIST] [NUMBER OF FRIENDLY HEISTERS] [FRIENDLY HEISTERS WHO DIDNT GET MONEY]');
        let payable = (amountpersonheisted-(amountpersonheisted*(friendlyheisters-friendlyheistersdied))/friendlyheisters)/friendlyheistersdied;


        const embed = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle('Heist Calculator')
        .addField('Parameters Imputed in order of [AMOUNT EACH PERSON GOT IN THE HEIST] [NUMBER OF FRIENDLY HEISTERS] [FRIENDLY HEISTERS WHO DIDNT GET MONEY]', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField(`Please Pay this ammount to the ${friendlyheistersdied} people who didnt get anything in the heist ` , `\`\`\`css\n${payable}\`\`\``)

        message.channel.send(embed);

    }
}