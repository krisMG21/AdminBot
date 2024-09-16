const { SlashCommandBuilder } = require('discord.js');
const { handleServerInfo, handleUserInfo, handleChannelInfo, handleRoleInfo } = require('../../lib/infoFunctions');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Get information about various server elements')
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Get information about the server'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Get information about a user')
                .addUserOption(option => option.setName('target').setDescription('The user to get info about').setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
                .setName('channel')
                .setDescription('Get information about a channel')
                .addChannelOption(option => option.setName('target').setDescription('The channel to get info about').setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
                .setName('role')
                .setDescription('Get information about a role')
                .addRoleOption(option => option.setName('target').setDescription('The role to get info about').setRequired(true))),

    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();

        switch (subcommand) {
            case 'server':
                await handleServerInfo(interaction);
                break;
            case 'user':
                await handleUserInfo(interaction);
                break;
            case 'channel':
                await handleChannelInfo(interaction);
                break;
            case 'role':
                await handleRoleInfo(interaction);
                break;
        }
    },
};
