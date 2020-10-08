const Discord = require("discord.js");
const { rolename } = require("../config.json");

module.exports.run = async (bot, message, args, mvconnection, remakeconnection) => {
    mvconnection.query(`SELECT * FROM \`mv_users\` WHERE \`discord_id\`='${message.author.id}'`, (error, results) => {
        if(!results[0]){
            return message.channel.send(":x: No such account found in the database!")
        }else{
            mvconnection.query(`UPDATE \`mv_users\` SET \`discord_id\` = '' WHERE \`mv_users\`.\`discord_id\`=${message.author.id}`);
			message.channel.send(":white_check_mark:");
        }
    })
}

module.exports.help = {
    name: "unlink"
}