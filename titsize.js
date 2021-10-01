const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "titsize",
  aliases: ["tits", "boobsize", "tittysize"],
  description: "Show's your tit Size!",
  usage: "TitSize <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let sizes = [
      "1/10 (   .    )  (    .    )",
      "2/10 (   .    )  (    .    )",
      "3/10 (   .    )  (    .    )",
      "4/10 (   .    )  (    .    )",
      "5/10 (   .    )  (    .    )",
      "6/10 (   .    )  (    .    )",
      "7/10 (   .    )  (    .    )",
      "8/10 (   .    )  (    .    )",
      "9/10 (   .    )  (    .    )",
      "10/10 (   .    )  (    .    )"
     
    ];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = sizes[Math.floor(Math.random() * sizes.length)];

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Tit Machine`)
      .setDescription(`${Member.user.username} tit size Is\n${Result}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
