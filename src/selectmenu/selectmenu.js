const {
  CommandInteraction,
  Client,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  SelectMenuBuilder,
  SelectMenuOptionBuilder,
  SelectMenuInteraction,
} = require("discord.js");
const interactionCreate = require("../events/interactionCreate");
module.exports = {
  name: "selectmenu",
  /**
   *
   * @param {Client} client
   * @param {SelectMenuInteraction} SelectMenuInteraction
   *
   */
  run: async (client, interaction) => {
    if (interaction.values == 1) {
      interaction.reply({
         content: `1. Seçeneği seçtin!`, 
         ephemeral: true 
        });
    } else if (interaction.values == 2) {
      interaction.reply({
        content: `2. Seçeneği seçtin!`,
        ephemeral: true,
      });
    } else if (interaction.values == 3) {
        interaction.reply({
            content: `3. Seçeneği seçtin!`,
            ephemeral: true
        })
    }
  },
};
