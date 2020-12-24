const { prefix, genre_category, channels_to_react, botToken } = require("./config/config.json");

//Discord Setup
const discord = require("discord.js");
const client = new discord.Client();




//Logged in
client.on('ready', () => {
    console.log(`Succesfully logged in as ${client.user.tag}`);
    client.user.setActivity("Watching the Genres category.");
});

client.on('message', async(message) => {
    // if(message.channel.id)
    // if (message.author.id == "155420542898274304" || message.author.id == "146444902861897728") {
        if (channels_to_react.includes(message.channel.id) && message.attachments.size > 0 ) {
            message.react("⭐")
        }
    // }

});

//Log in to discord
client.login(botToken);