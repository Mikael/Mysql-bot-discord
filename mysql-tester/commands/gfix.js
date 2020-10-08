const Discord = require("discord.js");
const { rolename } = require("../config.json");

module.exports.run = async (bot, message, args, mvconnection, remakeconnection) => {
    if(args[1] == "id") {
        if(!message.mentions.members.first()) return message.channel.send(":x: You have to mention someone!");
        mvconnection.query(`SELECT * FROM \`mv_users\` WHERE \`discord_id\`='${message.mentions.members.first().id}'`, (error, results) => {
            if(!results[0]){
                return message.channel.send(":x: No such account found in the database or accounts not linked with their discord ID!")
            }else{
                console.log("d");
                mvconnection.query(`UPDATE \`mv_users\` SET \`online\` = '0' WHERE \`discord_id\`='${message.mentions.members.first().id}'`);
                message.channel.send("✅");
            }
        })
    }
    else if(args[1] == "nickn") { // UPDATE `mv_users` SET `kick` = '1' WHERE `mv_users`.`id` = 1861;
    if(!args[2]) return message.channel.send(":x: You have to give me a nickname in order to fix");
    mvconnection.query(`SELECT * FROM \`mv_users\` WHERE \`nickname\`='${args[2]}'`, (error, results) => {
        if(!results[0]){
            return message.channel.send(":x: No such account found in the database or accounts not linked with their discord ID!")
        }else{
            console.log("d");
            mvconnection.query(`UPDATE \`mv_users\` SET \`online\` = '0' WHERE \`nickname\`="${args[2]}"`);
            message.channel.send("✅");        }
    })
    }
    else {
        message.channel.send("Correct usage: gfix id/nickn")
    }
}

module.exports.help = {
    name: "gfix"
}