module.exports = message => {
const { MessageEmbed } = require("discord.js")

let embed = new MessageEmbed() 
.setTitle("Your Bot Help")
.setDescription(":o this works?")
.setColor("RANDOM")
message.channel.send(embed)
};
