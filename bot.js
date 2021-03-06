const Discord = require("discord.js");
const client = new Discord.Client();

function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

client.login("NDUzNTc0OTAzNjEwNzM2NjQw.DlOLXQ.Mdm_9fvuFqyj5C2PqSRk1As4ZB8");

client.on("ready", () => {
  console.log("Bot ready!")
});

client.on("message", async message => {

  if(message.author.bot) return;
  
  if (message.content.indexOf(' ') > -1) { 
    var command = message.content.slice(0, message.content.indexOf(' ')); // this makes "command" the first word in the message
    var args = message.content.slice(message.content.indexOf(' ') + 1, message.content.length).split(' '); // this will make every word (or tagged user) be stored in an array called args
    command = command.toLowerCase(); // make everything lower case so commands still work if typed in caps
  } else {
      command = message.content.toLowerCase(); // if there is only one word, put it in "command" and turn it into all lower-case
  }

  if (command === "!coin") {
    var i = Math.floor(Math.random() * Math.floor(2)); // put number 0 or 1 in the variable "i"
    if (i) message.reply("LoungeBot tossed a coin and got Heads!"); // if (1) = true (heads), if 0  = false (tails). 
    else message.reply("LoungeBot tossed a coin and got Tails!");
  }
  
  if (command === "!randomize") {
    //make sure we have 8 players
    if (args.length < 8) {
      message.reply("8 players needed!")
      return;
    }
    //args is an array of all the users that were tagged, we need to randomise the order and store the new array in "players"
    var players = shuffle(args);
    //now we need to make the teams!
    message.reply("\nTeam A: " + players[0] + " and " + players[1] + "\nTeam B: " + players[2] + " and " + players[3] + "\nTeam C: " + players[4] + " and " + players[5] + "\nTeam D: " + players[6] + " and " + players[7]);
  }
});
