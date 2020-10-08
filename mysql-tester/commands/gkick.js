const Discord = require("discord.js");
const { rolename } = require("../config.json");

module.exports.run = async (bot, message, args, mvconnection, remakeconnection) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    if(args[1] == "id") {
        if(!message.mentions.members.first()) return message.channel.send(":x: You have to mention someone!");
        mvconnection.query(`SELECT * FROM \`mv_users\` WHERE \`discord_id\`='${message.mentions.members.first().id}'`, (error, results) => {
            if(!results[0]){
                return message.channel.send(":x: No such account found in the database or accounts not linked with their discord ID!")
            }else{
                console.log("d");
                mvconnection.query(`UPDATE \`mv_users\` SET \`kick\` = '1' WHERE \`discord_id\`='${message.mentions.members.first().id}'`);
                message.channel.send("✅");
            }
        })
    }
    else if(args[1] == "nickn") { // UPDATE `mv_users` SET `kick` = '1' WHERE `mv_users`.`id` = 1861;
    if(!args[2]) return message.channel.send(":x: You have to give me a nickname");
    mvconnection.query(`SELECT * FROM \`mv_users\` WHERE \`nickname\`='${args[2]}'`, (error, results) => {
        if(!results[0]){
            return message.channel.send(":x: No such account found in the database or accounts not linked with their discord ID!")
        }else{
            console.log("d");
            mvconnection.query(`UPDATE \`mv_users\` SET \`kick\` = '1' WHERE \`nickname\`="${args[2]}"`);
            message.channel.send("✅");        }
    })
    }
    else if(args[1] == "all") { // UPDATE `mv_users` SET `kick` = '1' WHERE `mv_users`.`id` = 1861;
    mvconnection.query(`SELECT * FROM \`mv_users\``, (error, results) => {
        if(!results[0]){
            return message.channel.send(":x: No such account found in the database or accounts not linked with their discord ID!")
        }else{
            console.log("d");
            mvconnection.query(`UPDATE \`mv_users\` SET \`kick\` = '0'`);
            settimeout(function() {mvconnection.query(`UPDATE \`mv_users\` SET \`kick\` = '1'`); message.channel.send("done");},10000)
         }
    })
    }
    else {
        message.channel.send("Correct usage: gfix id/nickn/all")
    }
}

module.exports.help = {
    name: "gkick"
}