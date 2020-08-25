const ms = require('ms');

module.exports = {
    name: "remindme",
    category: "fun",
    description: "Set's a reminder.",
    run: async (client, message, args) => {

    if (!client.lockit) client.lockit = [];

  let time = args[0];
  let validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply('Please set an amount of time you would like your reminder to be! `!reminder [TIME][M-S-H]`').then(m => {m.delete(20000)});
  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.author.id, {
      SEND_MESSAGES: true,
    }).then(() => {
      message.channel.send(`${message.author}**Your reminder is up!**`);
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.author.id, {
      SEND_MESSAGES: true
    }).then(() => {
      message.channel.send(`${message.author}, I will remind you about ${args.slice(1).join(' ')} in ___${ms(ms(time), { long:true })}___.`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.author.id, {
            SEND_MESSAGES: true
          }).then(message.channel.send(`${message.author}, you had asked me to remind you, here is your reminder. The title of this reminder is "${args.slice(1).join(' ')}."`)).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
}
}