const { CommandInteraction,Client,ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const interactionCreate = require("../events/interactionCreate");
module.exports = {
    name: 'button',
        /**
     * 
     * @param {Client} client
     * @param {ButtonInteraction} ButtonInteraction
     * 
     */
    run: async (client, interaction) => {
        interaction.reply({content: `Düğmeye bastın`,ephemeral:true}) 
    }
}