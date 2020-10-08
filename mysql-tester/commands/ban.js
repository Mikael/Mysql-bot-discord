const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    if(!message.mentions.members.first()) return message.channel.send(":x: You have to mention someone!");

    message.mentions.members.first().ban();
    message.channel.send("✅");
}

module.exports.help = {
    name: "ban"
}