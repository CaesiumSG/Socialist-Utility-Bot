const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .setColor('RANDOM')
        .addField('`kick`', 'Kicks a member from your server via mention or ID')
        .addField('`ban`', 'Bans a member from your server via mention or ID')
        .addField('`deletemsg`', 'Purges/massdelete messages')
        .addField('`nick`', 'sets nickname')
        .addField('`warn`', 'warns a user. After 3 warns they get autosent to gulag')
        .addField('`checkwarn`', 'check a tagged user for a warn/check ur own warns ')
        .addField('`clearwarn`', 'remove a tagged user warn')
        .addField('`lock`', 'locks a channel')
        .addField('`unlock`', 'unlocks a channel')
        .addField('`off`', 'shutdown this bot')
        .addField('`Modmail`', 'Sends a modmessage embed to tagged user, can only be used by mods')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .setColor('RANDOM')
        .addField('`fkick`', 'kicks someone hmm')
        .addField('`membermail`', 'sends an embed to a member, can be used by comrades')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .setColor('RANDOM')
        .addField('`calc`', 'does what it does dumbo' )
        .addField('`ping`', 'Get the bot\'s API ping')
        .addField('`Covid`', 'Checks COVID cases for provided location')
        .addField('`hostinfo`', 'checks info about hoster')
        .addField('`userinfo`', 'shows info about urself')
        .addField('`serverinfo`', 'shows info about the server')
        .addField('`react`', 'reacts to your message with your chosen emote')
        .addField('`help`', 'Shows this page lmfao what did u expect')
        .addField('`invite`', 'invite the bot to ur server')
        .addField('`source`', 'view the sourcecode for the bot')
        .setTimestamp()

        const currency = new Discord.MessageEmbed()
        .setTitle('Currency')
        .setColor('RANDOM')
        .addField('`Daily`', 'Collect ye daily coins')
        .addField('`Work`', 'Get a random number of coins for working ')
        .addField('`Shop`', 'see available item in shop')
        .addField('`Buy`', 'Buys item from shop')
        .addField('`inv`', 'Shows inventory')
        .addField('`bal`', 'shows balance')
        .addField('`leaderboard`', 'shows leaderboard')
        

        const pages = [
                moderation,
                currency,
                utility,
                fun
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}