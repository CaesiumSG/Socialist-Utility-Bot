module.exports = {
    name: "react",
    cooldown: 5,
    description: "react to your message",
    usage: "[emoji] ",
    execute(message) {
       const client = message.client
       
      
    	let emoji = message.content.slice(1)
    if (!emoji) {
			return message.reply('you need to put a emoji noshit');
		}
		message.react(`${emoji}`);
		}
		}