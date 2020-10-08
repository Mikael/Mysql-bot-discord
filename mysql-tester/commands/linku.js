const Discord = require("discord.js");
const { rolename } = require("../config.json");

module.exports.run = async (bot, message, args, mvconnection, remakeconnection) => {
	console.log(args[1]);
	const member = message.mentions.members.first();
	console.log(member.id);
	if(!message.mentions.members.first()) return message.channel.send(":x: Correct Command Usage: mlinku Username Mention!");

if (member.roles.cache.some(role => role.name === 'Administrator')) {
    mvconnection.query(`SELECT * FROM \`mv_users\` WHERE \`username\`='${args[1]}'`, (error, results) => {
        if(!results[0]) {
            return message.channel.send(":x: No such account found in the database! Are you searching for the correct Username? mlinku Username @mention")
        }else{
            mvconnection.query(`UPDATE \`mv_users\` SET \`discord_id\` = '${member.id}' WHERE \`mv_users\`.\`username\`='${args[1]}'`);
			message.channel.send(":white_check_mark:");
     	   }
   	 })
	}
}

module.exports.help = {
    name: "linku"
}