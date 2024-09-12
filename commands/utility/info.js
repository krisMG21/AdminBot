const { SlashCommandBuilder } = require('discord.js');
const { getServerInfo, getChannelInfo, getRoleInfo, getUserInfo } = require('../../lib/infoFunctions.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Provides information about the server and its components.')
        .addSubcommand(subcommand =>
            subcommand.setName('server')
                .setDescription('Provides information about the server.'))
        .addSubcommand(subcommand =>
            subcommand.setName('channel')
                .setDescription('Provides information about a channel.')
                .addStringOption(option =>
                    option.setName('channel')
                        .setDescription('The channel to get information about.')
                        .setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand.setName('role')
                .setDescription('Provides information about a role.')
                .addStringOption(option =>
                    option.setName('role')
                        .setDescription('The role to get information about.')
                        .setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand.setName('user')
                .setDescription('Provides information about a user.')
                .addStringOption(option =>
                    option.setName('user')
                        .setDescription('The user to get information about.')
                        .setRequired(true))),

    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        const channel = interaction.options.getChannel('channel');
        const role = interaction.options.getRole('role');
        const user = interaction.options.getUser('user');

        switch (subcommand) {
            case 'server':
                await interaction.reply(getServerInfo(interaction.guild));
                break;
            case 'channel':
                await interaction.reply(getChannelInfo(interaction.guild, channel));
                break;
            case 'role':
                await interaction.reply(getRoleInfo(interaction.guild, role));
                break;
            case 'user':
                await interaction.reply(getUserInfo(interaction.guild, user));
                break;
            default:
                await interaction.reply('Invalid subcommand.');
                break;
        }
    },
};
