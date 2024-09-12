const { SlashCommandBuilder } = require('discord.js');
const { getServerInfo, getChannelInfo, getRoleInfo, getUserInfo } = require('./infoFunctions.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Provides information about the server and its components.')
		.addBooleanOption(option =>
			option.setName('server')
				.setDescription('Whether to get information about the server.')
				.setRequired(false))
		.addStringOption(option =>
			option.setName('channel')
				.setDescription('The channel to get information about.')
				.setRequired(false))
		.addStringOption(option =>
			option.setName('role')
				.setDescription('The role to get information about.')
				.setRequired(false))
		.addStringOption(option =>
			option.setName('user')
				.setDescription('The user to get information about.')
				.setRequired(false)),

	async execute(interaction) {
		const { server, channel, role, user } = interaction.options;

		if (server) {
			const serverInfo = await interaction.guild.fetch();
			await interaction.reply({
				embed: await getServerInfo(serverInfo),
			});
		}

		if (channel) {
			const channelInfo = await channel.fetch();
			await interaction.reply({
				embed: await getChannelInfo(channelInfo),
			});
		}

		if (role) {
			const roleInfo = await role.fetch();
			await interaction.reply({
				embed: await getRoleInfo(roleInfo),
			});
		}

		if (user) {
			const userInfo = await user.fetch();
			await interaction.reply({
				embed: await getUserInfo(userInfo),
			});
		}
	},
};
