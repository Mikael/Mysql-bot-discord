const Discord = require("discord.js");
const { rolename } = require("../config.json");
Array.prototype.contains = function ( needle ) {
    for (i in this) {
       if (this[i] == needle) return true;
    }
    return false;
 }
module.exports.run = async (bot, message, args, mvconnection, remakeconnection) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    if(args[1] == "eu" && args[2] == "on") {
        if(!args[1]) return message.channel.send(":x: You have to give me channel first.");
        mvconnection.query(`SELECT * FROM \`mv_channels\` WHERE \`id\`=1`, (error, results) => {
            if(!results[0]){
                return message.channel.send(":x: No such account found in the database or accounts not linked with their discord ID!")
            }else{
                console.log("d");
                mvconnection.query(`UPDATE \`mv_channels\` SET \`maintenance\` = '1' WHERE \`mv_channels\`.\`id\` = 1`);
                message.channel.send("✅");
            }
        })
    }
    else if(args[1] == "na" && args[2] == "on") { // UPDATE `mv_users` SET `kick` = '1' WHERE `mv_users`.`id` = 1861;
    if(!args[1]) return message.channel.send(":x: You have to give me channel first.");
    mvconnection.query(`SELECT * FROM \`mv_channels\` WHERE \`id\`=2`, (error, results) => {
        if(!results[0]){
            return message.channel.send(":x: No such account found in the database or accounts not linked with their discord ID!")
        }else{
            console.log("d");
            mvconnection.query(`UPDATE \`mv_channels\` SET \`maintenance\` = '1' WHERE \`mv_channels\`.\`id\` = 2`);
            message.channel.send("✅");        }
    })
    }
    else if(args[1] == "sa" && args[2] == "on")  { // UPDATE `mv_users` SET `kick` = '1' WHERE `mv_users`.`id` = 1861;
    if(!args[1]) return message.channel.send(":x: You have to give me channel first.");
    mvconnection.query(`SELECT * FROM \`mv_channels\` WHERE \`id\`=3`, (error, results) => {
        if(!results[0]){
            return message.channel.send(":x: No such account found in the database or accounts not linked with their discord ID!")
        }else{
            console.log("d");
            mvconnection.query(`UPDATE \`mv_channels\` SET \`maintenance\` = '1' WHERE \`mv_channels\`.\`id\` = 3`);
            message.channel.send("✅");        }
    })
    }
    if(args[1] == "eu" && args[2] == "off") {
        if(!args[1]) return message.channel.send(":x: You have to give me channel first.");
        mvconnection.query(`SELECT * FROM \`mv_channels\` WHERE \`id\`=1`, (error, results) => {
            if(!results[0]){
                return message.channel.send(":x: No such account found in the database or accounts not linked with their discord ID!")
            }else{
                console.log("d");
                mvconnection.query(`UPDATE \`mv_channels\` SET \`maintenance\` = '0' WHERE \`mv_channels\`.\`id\` = 1`);
                message.channel.send("✅");
            }
        })
    }
    else if(args[1] == "na" && args[2] == "off") { // UPDATE `mv_users` SET `kick` = '1' WHERE `mv_users`.`id` = 1861;
    if(!args[1]) return message.channel.send(":x: You have to give me channel first.");
    mvconnection.query(`SELECT * FROM \`mv_channels\` WHERE \`id\`=2`, (error, results) => {
        if(!results[0]){
            return message.channel.send(":x: No such account found in the database or accounts not linked with their discord ID!")
        }else{
            console.log("d");
            mvconnection.query(`UPDATE \`mv_channels\` SET \`maintenance\` = '0' WHERE \`mv_channels\`.\`id\` = 1`);
            message.channel.send("✅");        }
    })
    }
    else if(args[1] == "sa" && args[2] == "off")  { // UPDATE `mv_users` SET `kick` = '1' WHERE `mv_users`.`id` = 1861;
    if(!args[1]) return message.channel.send(":x: You have to give me channel first.");
    mvconnection.query(`SELECT * FROM \`mv_channels\` WHERE \`id\`=3`, (error, results) => {
        if(!results[0]){
            return message.channel.send(":x: No such account found in the database or accounts not linked with their discord ID!")
        }else{
            console.log("d");
            mvconnection.query(`UPDATE \`mv_channels\` SET \`maintenance\` = '0' WHERE \`mv_channels\`.\`id\` = 3`);
            message.channel.send("✅");        
        }
    })
}
else if(args[1] == "all" && args[2] == "on")  { // UPDATE `mv_users` SET `kick` = '1' WHERE `mv_users`.`id` = 1861;
if(!args[1]) return message.channel.send(":x: You have to give me channel first.");
mvconnection.query(`UPDATE \`mv_channels\` SET \`maintenance\` = '1' WHERE \`mv_channels\`.\`id\` = 1`);
mvconnection.query(`UPDATE \`mv_channels\` SET \`maintenance\` = '1' WHERE \`mv_channels\`.\`id\` = 2`);
mvconnection.query(`UPDATE \`mv_channels\` SET \`maintenance\` = '1' WHERE \`mv_channels\`.\`id\` = 3`);
message.channel.send("✅");        

}
else if(args[1] == "all" && args[2] == "off")  { // UPDATE `mv_users` SET `kick` = '1' WHERE `mv_users`.`id` = 1861;
if(!args[1]) return message.channel.send(":x: You have to give me channel first.");
mvconnection.query(`UPDATE \`mv_channels\` SET \`maintenance\` = '0' WHERE \`mv_channels\`.\`id\` = 1`);
mvconnection.query(`UPDATE \`mv_channels\` SET \`maintenance\` = '0' WHERE \`mv_channels\`.\`id\` = 2`);
mvconnection.query(`UPDATE \`mv_channels\` SET \`maintenance\` = '0' WHERE \`mv_channels\`.\`id\` = 3`);
message.channel.send("✅");        

}
    else if (!args[1] || !args[2]) {
        message.channel.send("Correct usage: gmaintenance eu/na/sa on/off")
    }
}

module.exports.help = {
    name: "gmaintenance",
    aliases: ["gmain", "gmaintenanc", "glockdown", "glockd"]
}