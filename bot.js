const Discord = require("discord.js");
const client = new Discord.Client();
const UUID = require("uuid");

var players = [];
var teamcount = 0;

function removeuser(index){
  players.splice(index, 1);
  teamcount -= 1;
}

function adduser(user){
  players.push(user);
  setTimeout(removeuser, 3600000  , teamcount);
  teamcount += 1;
}

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

client.login("NDUzNTc0OTAzNjEwNzM2NjQw.DfwU8A.20A1Z5zxarSS-TO16OhQV7F-sFA");

client.on("ready", () => {
  console.log("Bot ready!")
});

client.on("message", async message => {

  if(message.author.bot) return;
  
  if (message.content.indexOf(' ') > -1) { 
    var command = message.content.slice(0, message.content.indexOf(' ')); // this makes "command" the first word in the message
    var args = message.content.slice(message.content.indexOf(' ') + 1, message.content.length).split(' '); // this will make every word (or tagged user) be stored in an array called args
    command = command.toLowerCase(); // make everything lower case so commands still work if typed in caps
  } 
  else command = message.content.toLowerCase(); // if there is only one word, put it in "command" and turn it into all lower-case
  
 if (command === "!can") {
    adduser(message.author.id);
    if (players.length === 8) {
      message.channel.send("8 players are ready! GLHF");
    /*access an item in an array by using its index. indexes start at zero
    so the first item in players is players[0]
    to put 2 parts of a string together use plus signs
    message.channel.send("<@" + players[0] + ">"); ("<@" + players[1] + ">")("<@" + players[2] + ">")("<@" + players[3] + ">") ("<@" + players[4] + ">")("<@" + players[5] + ">")("<@" + players[6] + ">")("<@" + players[7] + ">")
    this will tag the first user that said !can
    fill in this line so you tag every user.
    the first user is players[0], and the last is players[7]
    /
    message.channel.send(/("<@" + players[0] + ">") ----->>>/"       "/ (/"<@" + players[1] + ">") ----->>>/"       "/* (/"<@" + players[2] + ">") ----->>>/"       "/* (/"<@" + players[3] + ">") ----->>>/"       "/* (/"<@" + players[4] + ">") ----->>>/"       "/* (/"<@" + players[5] + ">") ----->>>/"       "/* (/"<@" + players[6] + ">") ----->>>/"       "/* (/*"<@" + players[7] + ">")
    }
    else message.channel.send(players.length + "/8");
  }
how can i write like you
 
  if (command === "!coin") {
    var i = Math.floor(Math.random() * Math.floor(2)); // put number 0 or 1 in the variable "i"
    if (i) message.reply("LoungeBot tossed a coin and got Heads!"); // if (1) = true (heads), if 0  = false (tails). 
    else message.reply("LoungeBot tossed a coin and got Tails!");
  }
  
  if (command === "!randomize") {
   if (players.length < 8) {
     message.reply("8 players needed!");
     return;
    }
    else {
    message.reply("\nTeam A: " + "<@" + players[0] + ">" + " and " + "<@" + players[1] + ">" + "\nTeam B: " + "<@" + players[2] + ">" + " and " + "<@" + players[3] + ">" + "\nTeam C: " + "<@" + players[4] + ">" + " and " + "<@" + players[5] + ">" +"\nTeamD: " + "<@" + players[6] + ">" + "and " + "<@" + players[7] + ">");
    players = [];
    teamcount = 0;
    }
  }
});
