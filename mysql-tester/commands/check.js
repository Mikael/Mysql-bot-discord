const Discord = require("discord.js");
const { rolename } = require("../config.json");

module.exports.run = async (bot, message, args, mvconnection, remakeconnection) => {
	console.log(args[1]);    
    var sql = `SELECT * FROM users where nickname = "${args[1]}"`;
    remakeconnection.query(sql, args[1], (error, results) => {
            if (error || results === "undefined") {
                return console.error(error.message);
            }
                let ip_addr = results[0]["ip_address"];
                let nick = results[0]["nickname"];
                message.channel.send("Searching for "+nick+" with address "+ip_addr);
                var sql = `SELECT * FROM users`;
                remakeconnection.query(sql, args[1], (error, results) => {
                if (error) {
                    return message.channel.send(error.message);
                }
                number = 0;
                for(let i = 0; i<results.length; i++) {
                    if(results[i]["ip_address"] == ip_addr) {
                        number++;
                        message.channel.send("Alt found: "+results[i]["nickname"]);
                    }
                }
                message.channel.send("Done, Found: " + number + " Accounts matched to ["+args[1]+"]("+ip_addr+")");
            });
            
            remakeconnection.end();
    });
}

module.exports.help = {
    name: "check"
}