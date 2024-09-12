async function getServerInfo(serverInfo) {
    return {
        title: serverInfo.name,
        description: serverInfo.description || 'No description.',
        fields: [
            {
                name: 'ID',
                value: serverInfo.id,
            },
            {
                name: 'Owner',
                value: serverInfo.ownerId,
            },
            {
                name: 'Members',
                value: serverInfo.memberCount.toString(), // Changed from membersCount to memberCount
            },
            {
                name: 'Channels',
                value: serverInfo.channels.cache.size.toString(),
            },
            {
                name: 'Roles',
                value: serverInfo.roles.cache.size.toString(),
            },
            {
                name: 'Emojis',
                value: serverInfo.emojis.cache.size.toString(),
            },
        ],
    };
}

async function getChannelInfo(channelInfo) {
    return {
        title: channelInfo.name,
        description: channelInfo.topic || 'No topic.',
        fields: [
            {
                name: 'ID',
                value: channelInfo.id,
            },
            {
                name: 'Type',
                value: channelInfo.type,
            },
            {
                name: 'Created',
                value: channelInfo.createdAt.toUTCString(),
            },
            {
                name: 'Position',
                value: channelInfo.position.toString(),
            },
            {
                name: 'Members',
                value: channelInfo.members?.size?.toString() || 'N/A',
            },
            {
                name: 'Category',
                value: channelInfo.parent?.name || 'None',
            },
        ],
    };
}

async function getRoleInfo(roleInfo) {
    return {
        name: roleInfo.name,
        description: roleInfo.description || 'No description.',
        fields: [
            {
                name: 'ID',
                value: roleInfo.id,
            },
            {
                name: 'Color',
                value: roleInfo.hexColor,
            },
            {
                name: 'Position',
                value: roleInfo.position.toString(),
            },
            {
                name: 'Hoist',
                value: roleInfo.hoist.toString(),
            },
            {
                name: 'Mentionable',
                value: roleInfo.mentionable.toString(),
            },
            {
                name: 'Permissions',
                value: roleInfo.permissions.toArray().join(', ') || 'None',
            },
        ],
    };
}

async function getUserInfo(userInfo) {
    return {
        username: userInfo.username,
        id: userInfo.id,
        fields: [
            {
                name: 'Roles',
                value: `Number of roles: ${userInfo.roles?.cache?.size || 'N/A'}`,
                fields: userInfo.roles?.cache?.map(role => ({
                    name: role.name,
                    value: role.id,
                })) || [],
            },
            {
                name: 'Presence',
                value: userInfo.presence?.status || 'N/A', // Changed 'values' to 'value'
            },
            {
                name: 'Avatar',
                value: userInfo.avatarURL() || 'None',
            },
            {
                name: 'Banner',
                value: userInfo.bannerURL() || 'None',
            },
            {
                name: 'Accent Color',
                value: userInfo.accentColor?.toString() || 'None', // Fixed typo in toString()
            },
            {
                name: 'Discriminator',
                value: userInfo.discriminator,
            },
            {
                name: 'Bot',
                value: userInfo.bot.toString(),
            },
            {
                name: 'System',
                value: userInfo.system.toString(),
            },
            {
                name: 'Created At',
                value: userInfo.createdAt.toUTCString(),
            },
        ],
    };
}

module.exports = {
    getServerInfo,
    getChannelInfo,
    getRoleInfo,
    getUserInfo,
};
