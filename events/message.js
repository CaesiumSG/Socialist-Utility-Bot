const active = new Map();
const talkedRecently = new Set();

module.exports = (client, message) => {
    let ops = {
      active: active
    }

    // Ignore all bots
    if (message.author.bot) return;
  
    // Ignore messages not starting with the prefix (in config.json)
    var prefix = '*'
    if (message.content.indexOf(prefix) !== 0) return;
  
    // Our standard argument/command name definition.
    if(message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).trim().split(/ +/);
    


    const command = args.shift().toLowerCase();


  
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
  
    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;
    cmd.run(client, message, args, ops);
    }

    
  
    
};