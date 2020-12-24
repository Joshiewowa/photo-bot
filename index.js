const { prefix, genre_category, channels_to_react, botToken, update_channel } = require("./config/config.json");

//Discord Setup
const discord = require("discord.js");
const client = new discord.Client();
let mainServerUpdateChannel; 
let initialBoot;

//Logged in
client.on('ready', () => {
    console.log(`Succesfully logged in as ${client.user.tag}`);
    client.user.setActivity("Watching the Genres category.");
    mainServerUpdateChannel = client.channels.cache.get(update_channel);
    initialBoot = true;
    setInterval(function() {
        checkBotOnline()
    }, 30000)
});

client.on('message', async(message) => {
   
    if (channels_to_react.includes(message.channel.id) && message.attachments.size > 0 ) {
        message.react("⭐")
    }
});

function checkBotOnline() {
    if (!initialBoot) {
        var d = new Date();
        const embed = new discord.MessageEmbed()
                .setColor("#6C9990")
                .setTitle('Availability tracker')
                .setThumbnail(client.user.avatarURL())
                .addField("Status:", `${client.user.presence.status}`, false)
                .addField("Current bot time:", `${d.toLocaleTimeString()}`, false)
        mainServerUpdateChannel.send(embed);
    }
    initialBoot = false;
}

//Log in to discord
client.login(botToken);