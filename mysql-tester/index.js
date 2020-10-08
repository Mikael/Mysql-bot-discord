const Discord = require("discord.js");
const mysql = require("mysql");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const config = require("./config.json");

let mvconnection = mysql.createConnection({
    host: "ip",
    user: "username",
    password: "password",
    database: "database"
});

mvconnection.connect((err) => {
    if(err){
        console.log("❌  Failed to connect to the ToyShooters database");
        return;
    }
    console.log(`✔️  Successfully connected to the ToyShooters database!`)
});
	
let remakeconnection = mysql.createConnection({
    host: "ip",
    user: "username",
    password: "password",
    database: "database"
});

remakeconnection.connect((err) => {
    if(err){
        console.log("❌  Failed to connect to the Remakenetwork database");
        return;
    }
    console.log(`✔️  Successfully connected to the Remakenetwork database!`)
});

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
        console.log("Couldn't find commands.");
        return;
    }
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${new Date().getHours()}:${new Date().getMinutes()} | ${f} loaded!`);
        bot.commands.set(props.help, props);
    })
})

bot.on("ready", async () => {
    console.log(`${bot.user.username} is ready!`);
})

bot.on("message", async message => {
    let messageArgs = message.content.split(" ");
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    let cmd = messageArgs[0].toLowerCase();
    const args = message.content.slice(config.prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if(!message.content.startsWith(config.prefix)) return;
    let commandfile = bot.commands.find(c => c.help.name == cmd.slice(config.prefix.length)) || bot.commands.find(c => c.help.aliases && c.help.aliases.includes(cmd.slice(config.prefix.length)));
    if(commandfile) commandfile.run(bot, message, messageArgs, mvconnection, remakeconnection);
    if (!bot.commands.has(commandName)) return;
})

bot.login(config.token);