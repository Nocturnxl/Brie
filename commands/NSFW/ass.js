const fetch = require('node-fetch');
const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'ass',
    description: 'Fetch random ass.',
    execute: async (client, message, args) => {

        let embednotnsfw = new RichEmbed()
        .setTitle('NSFW Error')
        .setDescription('You can only use this in a NSFW channel.')
        .setColor('#363942')
        // NSFW Channel check will send the above embed if the channel is not set to NSFW.
        if(!message.channel === message.channel.nsfw) {
            return message.channel.send(embednotnsfw);
            
        }
        const url = await fetch('https://nekobot.xyz/api/image?type=ass')
			.then(response => response.json())
			.then(body => body.message);
            let embed = new RichEmbed()
            .setTitle('Ass')
            .setURL(url)
            .setColor('#363942')
            .setImage(url)
            message.channel.send(embed);
	}
  }