const Discord = require ('discord.js');
const bot = new Discord.Client();
const botsettings = require("./botsettings.json");

bot.on('ready', function() {
    bot.user.setGame("Command: n:info");
    console.log("XD-NINTENDO Connecté !")
});

bot.login(botsettings.token);

bot.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("name","🎮*~Player~*🎮")
    member.guild.channels.find("name","annonces")
    .sendMessage(":maple_leaf: " + member.toString() + " a rejoins le serveur !")
    member.addRole(role)
    console.log("Nouveau membre !")
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name","annonces")
    .send(`:maple_leaf: ** ${member.user.username} ** a quitté le serveur.`)
    console.log("Quelqu'un a leave.")
})
