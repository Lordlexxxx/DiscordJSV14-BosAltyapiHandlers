

const { CommandInteraction,Client,ActionRowBuilder, ButtonBuilder, ButtonStyle,SelectMenuBuilder,SelectMenuOptionBuilder,SelectMenuInteraction } = require("discord.js");
module.exports = {
    name: "selectmenu",
    description: "Select Menü",
    type:1,
    options:[],
    /**
     * 
     * @param {Client} client
     * @param {CommandInteraction} CommandInteraction
     */
    run: async (client, interaction) => {
        const selectMenu = new ActionRowBuilder()
        .addComponents(
            new SelectMenuBuilder()
                .setCustomId('selectmenu')
                .setPlaceholder('Seçilmedi')
                .setMinValues(1)
                .setMaxValues(1)
                .addOptions([
                    {
                        label: '1',
                        description: '1',
                        value: '1',
                    },
                    {
                        label: '2',
                        description: '2',
                        value: '2',
                    },
                    {
                        label: '3',
                        description: '3',
                        value: '3',
                    },
                ]),
        );

    await interaction.reply({ content: `Bir şey seç`, components: [selectMenu] });

    }
}