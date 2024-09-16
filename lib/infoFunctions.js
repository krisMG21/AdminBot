const { EmbedBuilder } = require('discord.js');

async function handleServerInfo(interaction) {
    const guild = interaction.guild;

    const serverInfoEmbed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle(`${guild.name} Server Information`)
        .setThumbnail(guild.iconURL({ dynamic: true }))

    const fields = [
        { name: 'Server ID', value: guild.id, inline: true },
        { name: 'Created On', value: guild.createdAt.toDateString(), inline: true },
        { name: 'Member Count', value: guild.memberCount.toString(), inline: true },
        { name: 'Roles', value: guild.roles.cache.size.toString(), inline: true },
        { name: 'Channels', value: guild.channels.cache.size.toString(), inline: true },
        { name: 'Boost Level', value: guild.premiumTier.toString(), inline: true },
        { name: 'Boost Count', value: guild.premiumSubscriptionCount.toString(), inline: true },
        { name: 'Verification Level', value: guild.verificationLevel.toString(), inline: true },
    ];

    const validFields = fields.filter(field => field.value !== 'None' && field.value !== 'N/A' && field.value !== '');

    serverInfoEmbed.addFields(validFields);

    await interaction.reply({ embeds: [serverInfoEmbed] });
}

async function handleUserInfo(interaction) {
    const user = interaction.options.getUser('target');
    const member = await interaction.guild.members.fetch(user.id);

    const userInfoEmbed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle(`User Information for ${user.tag}`)
        .setThumbnail(user.displayAvatarURL({ dynamic: true }))

    const fields = [
        { name: 'User ID', value: user.id || 'None', inline: true },
        { name: 'Nickname', value: member.nickname || 'None', inline: true },
        { name: 'Joined Server', value: member.joinedAt.toDateString(), inline: true },
        { name: 'Account Created', value: user.createdAt.toDateString(), inline: true },
        { name: 'Roles', value: member.roles.cache.map(role => role.name).join(', ') || 'None' }
    ];
    const validFields = fields.filter(field => field.value !== 'None' && field.value !== 'N/A' && field.value !== '');

    userInfoEmbed.addFields(validFields);

    await interaction.reply({ embeds: [userInfoEmbed] });
}

async function handleChannelInfo(interaction) {
    const channel = interaction.options.getChannel('target');

    const channelInfoEmbed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle(`Channel Information for #${channel.name}`)

    const fields = [
        { name: 'Channel ID', value: channel.id.toString(), inline: true },
        { name: 'Type', value: channel.type.toString(), inline: true },
        { name: 'Created On', value: channel.createdAt.toDateString(), inline: true },
        { name: 'Category', value: channel.parent ? channel.parent.name : 'None', inline: true },
        { name: 'Topic', value: channel.topic || 'None' }
    ];
    const validFields = fields.filter(field => field.value !== 'None' && field.value !== 'N/A' && field.value !== '');

    channelInfoEmbed.addFields(validFields);

    await interaction.reply({ embeds: [channelInfoEmbed] });
}

async function handleRoleInfo(interaction) {
    const role = interaction.options.getRole('target');

    const roleInfoEmbed = new EmbedBuilder()
        .setColor(role.color)
        .setTitle(`Role Information for @${role.name}`)

    const fields = [
        { name: 'Role ID', value: role.id, inline: true },
        { name: 'Color', value: role.hexColor, inline: true },
        { name: 'Created On', value: role.createdAt.toDateString(), inline: true },
        { name: 'Position', value: role.position.toString(), inline: true },
        { name: 'Mentionable', value: role.mentionable ? 'Yes' : 'No', inline: true },
        { name: 'Hoisted', value: role.hoist ? 'Yes' : 'No', inline: true },
        { name: 'Permissions', value: role.permissions.toArray().join(', ') || 'None' }
    ];
    const validFields = fields.filter(field => field.value !== 'None' && field.value !== 'N/A' && field.value !== '');

    roleInfoEmbed.addFields(validFields);

    await interaction.reply({ embeds: [roleInfoEmbed] });
}
module.exports = {
    handleServerInfo,
    handleUserInfo,
    handleChannelInfo,
    handleRoleInfo,
};
