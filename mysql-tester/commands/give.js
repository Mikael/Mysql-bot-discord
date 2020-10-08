const Discord = require("discord.js");
const { rolename } = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    if(!message.mentions.members.first()) return message.channel.send(":x: You have to mention someone!");

    let role = message.guild.roles.cache.find(x => x.name == rolename);
    if(!role) return message.channel.send(`:x: Role named \`${rolename}\` not found`)
    message.mentions.members.first().roles.add(role);
    message.channel.send("✅");
}

module.exports.help = {
    name: "give"
}