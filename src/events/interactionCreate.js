const {Client, CommandInteraction} = require("discord.js");
const fs = require("fs");

/**
 * 
 * @param {Client} client 
 * @param {CommandInteraction} interaction 
 */
module.exports = async (client, interaction) => {
    if (interaction.isCommand()){
    try {
      fs.readdir(`./src/commands/`, (err, files) => {
        if (err) throw err;

        files.forEach(async (f) => {
          const command = require(`../commands/${f}`);
          if (
            interaction.commandName.toLowerCase() === command.name.toLowerCase()
          ) {
            return command.run(client, interaction);
          }
        });
      });
    } catch (err) {
      console.error(err);
    }
  }
 if(interaction.isButton()) {
    fs.readdir(`./src/buttons`, (err,files) => {
        if(err) throw err;

        files.forEach(async (f) => {
            const button = require(`../buttons/${f}`)
            if(interaction.customId == button.name) {
                button.run(client, interaction)
            }
        })
    })
 }
 if(interaction.isSelectMenu()) {
    fs.readdir(`./src/selectmenu`, (err,files) => {
        if(err) throw err;

        files.forEach(async (f) => {
            const menu = require(`../selectmenu/${f}`)
            if(interaction.customId == menu.name) {
                menu.run(client,interaction)
            }
        })
    })
 }
};