const { CommandInteraction,Client,ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
module.exports = {
    name: "button",
    description: "Button",
    type:1,
    options:[],
    /**
     * 
     * @param {Client} client
     * @param {CommandInteraction} CommandInteraction
     */
    run: async (client, interaction) => {
        const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('button')
                .setLabel('Button')
                .setStyle(ButtonStyle.Primary),
        );

    await interaction.reply({ content: `Düğmeye basma!`, components: [button] });

    }
}