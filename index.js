const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();


// bot status (NL : Community is online!)
bot.on("ready", async () => {
    console.log(`RaceTopia bot is online!`);
    bot.user.setActivity("test.ip", { type: "PLAYING" });
});

bot.login(process.env.token);  