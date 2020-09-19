const math = require('mathjs');

const Discord = require('discord.js');

module.exports = {
    name: "taxcalc",
    description: "calculate tax in dankmemer",


    async run (client, message, args){

        if(!args[0]) return message.channel.send('how are we gonna calculate nothing dumbos');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('how are we gonna calculate an invalid statement dumbo leftclicker')

        }

       var payplustax = 0;
       var taxrate = 0;
       var tax = 0;
       var showtaxrate = (taxrate * 100);

       if ((resp >= 0) && (resp <= 20000)) {
           taxrate = 0;
           tax = 0;
           payplustax = resp;
           var showtaxrate = (taxrate * 100);
       }
       else if((resp >= 20001) && (resp <= 50000)) {
        taxrate = 0.01;
        payplustax = Math.round((resp*(1+taxrate)));
        tax = Math.round((payplustax-resp));
        var showtaxrate = Math.round((taxrate * 100));
       }
       else if((resp >= 50001) && (resp <= 500000)) {
        taxrate = 0.03;
        payplustax = Math.round((resp*(1+taxrate)));
        tax = (payplustax-resp);
        var showtaxrate = Math.round((taxrate * 100));
       }
       else if((resp >= 500001) && (resp <= 1000000)) {
        taxrate = 0.05;
        payplustax = Math.round((resp*(1+taxrate)));
        tax = (payplustax-resp);
        var showtaxrate = Math.round((taxrate * 100));
       }
       else if(resp >= 1000001) {
        taxrate = 0.08;
        payplustax = Math.round((resp*(1+taxrate)));
        tax = (payplustax-resp);
        var showtaxrate = Math.round((taxrate * 100));
        }


        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Calculator')
        .addField('Amount/Equation Queried ', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Amount other party will receive ', `\`\`\`css\n${resp}\`\`\``)
        .addField('Amount you have to pay to the other party ', `\`\`\`css\n${payplustax}\`\`\``)
        .addField('tax Percentage ', `\`\`\`css\n${showtaxrate}\`\`\``)       
        .addField('amount paid as tax ',`\`\`\`css\n${tax}\`\`\``)
        



        

        message.channel.send(embed);

    }
}