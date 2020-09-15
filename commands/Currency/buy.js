const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "buy",
    description: "Buy an item from the store",

    async run (client, message, args) {
        let purchase = args.join(" ");
        if(!purchase) return message.channel.send('Please provide an item to buy')
        let items = await db.fetch(message.author.id, { items: [] });
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        if(purchase === 'Freedom from Serfdom'){
            if(amount < 1000) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 1000);
            db.push(message.author.id, "Freedom");
            message.channel.send('Successfully bought your freedom from Serfdom')
        }
        if(purchase === 'Better Working Conditions'){
            if(amount < 2000) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 2000);
            db.push(message.author.id, "Better Working Conditions");
            message.channel.send('Successfully bought better working conditions')
        }
        if(purchase === 'Andre'){
            if(amount < 5000) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 5000);
            db.push(message.author.id, "Andre");
            message.channel.send('Successfully bought Andre')
            
        }
    }
}