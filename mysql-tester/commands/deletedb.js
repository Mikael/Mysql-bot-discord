const Discord = require("discord.js");
const { rolename } = require("../config.json");

module.exports.run = async (bot, message, args, mvconnection, remakeconnection) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    if(!message.mentions.members.first()) return message.channel.send(":x: You have to mention someone!");

    mvconnection.query(`SELECT * FROM \`mv_users\` WHERE \`discord_id\`='${message.mentions.members.first().id}'`, (error, results) => {
        if(!results[0]){
            return message.channel.send(":x: No such account found in the database or accounts not linked with their discord ID!")
        }else{
            mvconnection.query(`DELETE FROM \`mv_users\` WHERE \`mv_users\`.\`discord_id\` = ${message.mentions.members.first().id}`);
            message.channel.send("✅");
        }
    })
}

module.exports.help = {
    name: "deletedb"
}