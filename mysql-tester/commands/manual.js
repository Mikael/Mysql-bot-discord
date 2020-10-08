const Discord = require("discord.js");
const { rolename } = require("../config.json");

module.exports.run = async (bot, message, args, mvconnection, remakeconnection) => {
    mvconnection.query(`SELECT * FROM \`mv_users\` WHERE \`discord_id\`='${message.author.id}'`, (error, results) => {
        if(!results[0]){
            let role = message.guild.roles.cache.find(x => x.name == rolename);
            if(!role) return message.channel.send(`:x: Role named \`${rolename}\` not found`)
            message.member.roles.add(role);
            message.channel.send("✅");
        }else{
            return;
        }
    })
}

module.exports.help = {
    name: "manual"
}