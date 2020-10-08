const Discord = require("discord.js");
const { rolename } = require("../config.json");

module.exports.run = async (bot, message, args, mvconnection, remakeconnection) => {
    if(!args[1]) {
        return message.channel.send("Error withs args");  
    }

    if(args[1] == "id") {
        if(!message.mentions.members.first()) return message.channel.send(":x: You have to mention someone!");
        mvconnection.query(`SELECT * FROM \`mv_users\` WHERE \`discord_id\`='${message.mentions.members.first().id}'`, (error, results) => {
            if(error) {
                message.channel.send("Unknow user");
            }
            else {
                let nickname = results.map(({ nickname }) => nickname).join('\n');
                let clan = results.map(({ clan }) => clan).join('\n');
                let level = results.map(({ level }) => level).join('\n');
                let score = results.map(({ score }) => score).join('\n');
                let kills = results.map(({ kills }) => kills).join('\n');
                let deaths = results.map(({ deaths }) => deaths).join('\n');
                let tokens = results.map(({ tokens }) => tokens).join('\n');
                let avatar = results.map(({ avatar }) => avatar).join('\n');
                var e = new Discord.MessageEmbed()
                .setAuthor("Remake | MicroVolts", )
                .setDescription("Result for " + args[2])
                .addField("Nickname",nickname,false)
                .addField("Clan",clan,false)
                .addField("Level",level,true)
                .addField("Score",score,true)
                .addField("Kills",kills,true)
                .addField("Deaths",deaths,true)
                .addField("K/D",Math.ceil(kills/deaths),true)
                .addField("Tokens",tokens + " :rt:",true)
                .setThumbnail(avatar);
                    message.channel.send(e);
                }
        });
    }
    else if(args[1] == "nickn") { // UPDATE `mv_users` SET `kick` = '1' WHERE `mv_users`.`id` = 1861;
    if(!args[2]) return message.channel.send(":x: You have to give me a nickname in order to get stats");
    mvconnection.query(`SELECT * FROM \`mv_users\` WHERE \`nickname\`='${args[2]}'`, (error, results) => {
        if(error) {
            message.channel.send("Unknown user");
        }
        else {
            let nickname = results.map(({ nickname }) => nickname).join('\n');
            let clan = results.map(({ clan }) => clan).join('\n');
            let level = results.map(({ level }) => level).join('\n');
            let score = results.map(({ score }) => score).join('\n');
            let kills = results.map(({ kills }) => kills).join('\n');
            let deaths = results.map(({ deaths }) => deaths).join('\n');
            let tokens = results.map(({ tokens }) => tokens).join('\n');
            let avatar = results.map(({ avatar }) => avatar).join('\n') || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
            var e = new Discord.MessageEmbed()
            .setAuthor("Remake | MicroVolts", )
            .setDescription("Result for " + args[2])
            .addField("Nickname",nickname,false)
            .addField("Clan",clan,false)
            .addField("Level",level,true)
            .addField("Score",score,true)
            .addField("Kills",kills,true)
            .addField("Deaths",deaths,true)
            .addField("K/D",Math.ceil(kills/deaths),true)
            .addField("Tokens",tokens + " :rt:",true)
            .setThumbnail(avatar);
                message.channel.send(e);
            }
    });
    }
    else {
        message.channel.send("Correct usage: gstats id/nickn mention/nickname")
    }
}

module.exports.help = {
    name: "gstats"
}