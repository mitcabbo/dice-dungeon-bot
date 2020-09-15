const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config');

client.on('ready', () => {
    console.log('Logged in as DiceBot!');
})

client.on('message', msg => {
    if (msg.content === '!help') {
        msg.reply("Hello! This is DiceDungeonBot.\n"
        + "Thanks for using me to make your distance tabletop gaming experience better!\n"
        + "The following commands should help you better use this bot.\n"
        + " \n"
        + "Commands:\n"
        + "!help        Brings up a list of commands for DiceDungeonBot.\n"
        + "!rolld4      Rolls one 4 sided die.\n"
        + "!rolld6      Rolls one 6 sided die.\n"
        + "!rolld10     Rolls one 10 sided die.\n"
        + "!rolld12     Rolls one 12 sided die.\n"
        + "!rolld20     Rolls one 20 sided die.\n"
        + "!coinflip    Flips a coin.\n"
        + "!choice      Makes a y/n decision.");
    }
    else if (msg.content === '!rolld4') {
        msg.reply('You have rolled a ' + (Math.floor(Math.random() * 4) + 1) + '!');
    }
    else if (msg.content === '!rolld6') {
        msg.reply('You have rolled a ' + (Math.floor(Math.random() * 6) + 1) + '!');
    }
    else if (msg.content === '!rolld10') {
            msg.reply('You have rolled a ' + (Math.floor(Math.random() * 10) + 1) + '!');
    }
    else if (msg.content === '!rolld12') {
        msg.reply('You have rolled a ' + (Math.floor(Math.random() * 12) + 1) + '!');
    }
    else if (msg.content === '!rolld20') {
        msg.reply('You have rolled a ' + (Math.floor(Math.random() * 20) + 1) + '!');
    }
    
    else if (msg.content === "!coinflip") {
        if (Math.random() < 0.5) {
            msg.reply('The coin has been tossed, and the answer is Heads!');
        }
        else {
            msg.reply("The coin has been tossed, and the answer is Tails!");
        }
    }
    else if (msg.content === "!choice") {
        if (Math.random() < 0.5) {
            msg.reply('The Gods have spoken, and the answer is YES!');
        }
        else {
            msg.reply('The Gods have spoken, and the answer is NO!');
        }
    }
})

client.login(config.discordAPIKey);