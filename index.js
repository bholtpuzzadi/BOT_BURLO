const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login("OTM5MjU3Njk2MTgyNTAxNDQ2.Yf2N5Q.60jDtfUcrrch9UI_fyr0nniXQdY")

client.on("ready", () => {
    console.log("Bot ONLINE")
})

client.on("messageCreate", (message) => {
    if (message.content == "!twitch") {
        message.channel.send("Iscriviti al mio canale twitch: https://www.twitch.tv/capocantina413")
    }

    if (message.content == "!embed") {
        var embed = new Discord.MessageEmbed()
            .setTitle("Titolo embed")
            .setDescription(`${message.author.username} ha scritto il messaggio`)
            .setThumbnail("https://www.nonsprecare.it/wp-content/uploads/2017/03/come-parlano-alberi-significato-simbolico-1.jpg")

        message.channel.send({ embeds: [embed] })

    }

    if (message.content == "!youtube") {
        message.channel.send("Iscriviti al mio canale youtube: https://www.youtube.com/channel/UCEtaQTvNXKV_X9QrvjNbNWg")
    }
})