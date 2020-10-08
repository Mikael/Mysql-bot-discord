const Discord = require("discord.js");
const { rolename } = require("../config.json");

module.exports.run = async (bot, message, args, connection) => {
    connection.query(`SELECT * FROM \`mv_users\` WHERE \`username\`='${args[1]}'`, (error, results) => {
        if(!results[0]){
            return message.channel.send(":x: No such account found in the database!")
        }else{
            connection.query(`UPDATE \`mv_users\` SET \`discord_id\` = '${message.author.id}' WHERE \`mv_users\`.\`username\`='${args[1]}'`);
			message.channel.send(":white_check_mark:");
        }
    })
}

module.exports.help = {
    name: "linku"
}