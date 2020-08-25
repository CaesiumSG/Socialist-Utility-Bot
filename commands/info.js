 const { MessageEmbed } = require("discord.js")
const os = require('os')
const cpuStat = require("cpu-stat");

module.exports = {
name: "botinfo",
cooldown: 5,
description: "get the bot info",
execute (message, args)  {
	const client = message.client

let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;

    let { version } = require("discord.js");



        let embedStats = new MessageEmbed()
            .setTitle("Right Clicker > Left Clicker")
            .setColor("RANDOM")
            .addField("RAM use ", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
            .addField("users ", `${client.users.cache.size}`, true)
            .addField("servers ", `${client.guilds.cache.size}`, true)
            .addField("uptime ⏲", `${days}d ${hours}h ${minutes}m ${seconds}s`, true)
            .addField("Discord.js version", `v${version}`, true)
            .addField("Node version ", `${process.version}`, true)
            .addField("platform ", `\`\`${os.platform()}\`\``, true)
            .setFooter("CaesiumSGBot")

        message.channel.send(embedStats)
    }
    }