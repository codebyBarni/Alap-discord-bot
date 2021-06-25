const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const token = require('./config.json');

bot.on("ready", ready => {
    console.log(`Sikeresen bejelentkeztem! (${client.user.username})`)
    client.user.setActivity(`Prefixem: ${config.prefix}`, {type: "WATCHING"})
});

client.login(token);
