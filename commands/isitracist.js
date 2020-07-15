const config = require("../config.js");
const default_choices = ["Yes", "No", "Maybe", "¯\\_(ツ)_/¯"];

exports.run = async (client, message, args, level) => { 
  choices = []
  choices.push(...config.is_it_racist_choices);
  choices.push(...default_choices);
  const num = Math.floor(Math.random() * choices.length)
  const msg = await message.channel.send(choices[num]);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "isitracist",
  category: "Miscelaneous",
  description: "Is it racist?",
  usage: "isitracist"
};