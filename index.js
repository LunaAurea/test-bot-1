 const Discord = require('discord.js');
 const bot = new Discord.Client();

 const PREFIX = "^";

 bot.on('ready', function() {
     console.log("I'm Ready !");
 });

 bot.on('message', message => {
     if(message.content[0] === PREFIX) {
         if(message.content === '!penis') {
             message.reply('owi !');
         }
     }
 });

 bot.login('NDYzNDUwOTA4OTc0NjQ1MjQ5.Dhwuuw.JMaWq6nl3N314Wa3R35kePS3O68') //Token
