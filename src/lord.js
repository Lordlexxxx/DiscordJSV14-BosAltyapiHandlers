const { Client, Routes, REST, Collection } = require("discord.js");
const client = new Client({ intents: 519 });
const fs = require("fs");
const { token } = require("./config.json");
global.client = client;
client.commands = global.commands = [];

//#region komut load

fs.readdir(`./src/commands`, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);

    client.commands.push({
      name: props.name.toLowerCase(),
      description: props.description,
      options: props.options,
      type: props.type,
    });
    console.log(`👍 ${props.name} Komutu Yüklendi `);
  });
});

//#endregion

//#region event load
fs.readdir(`./src/events`, (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let event = require(`./events/${file}`);
    let eventName = file.split(`.`)[0];

    console.log(`👍 ${eventName} Eventi yüklendi!`);
    client.on(eventName, (...args) => {
      event(client, ...args);
    });
  });
});
//#endregion

//#region Button Load
client.buttons = new Collection();
const buttonFolders = fs.readdirSync(`./src/buttons`);

fs.readdir(`./src/buttons`, (__err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let buton = require(`./buttons/${file}`);
    let customId = file.split(`.`)[0];

    console.log(`👍 ${buton.name} Butonu yüklendi`);
  });
});
//#endregion

//#region SelectMenu
fs.readdir(`./src/selectmenu`, (___err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let menu = require(`./selectmenu/${file}`);
    let customId = file.split(`.`)[0];

    console.log(`👍 ${menu.name} Menüsü yüklendi`)
  });
});
//#endregion 

client.on("ready", async () => {
  console.log(`${client.user.tag} ile giriş yapıldı.`);
  client.user.setActivity("Mine Network 💖 Lord", { type: "WATCHING" });
  const rest = new REST({ version: "10" }).setToken(token);
  try {
    await rest.put(Routes.applicationCommands(client.user.id), {
      body: commands,
    });
  } catch (error) {
    console.error(error);
  }
});
client.login(token);
