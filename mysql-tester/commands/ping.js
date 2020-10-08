const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send("pong").then(r => {
        r.edit("```json\n"+ `Latency: ${Math.floor(r.createdTimestamp - message.createdTimestamp)} ms` + "```")
    })
}

module.exports.help = {
    name: "ping"
}