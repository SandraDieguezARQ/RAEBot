// Require necessary node modules
// Make the variables inside the .env element available to our Node project
require('dotenv').config(); //Extrae los datos de login del bot

const tmi = require('tmi.js'); //Hace capaz al bot de operar por el chat

// Setup connection configurations
// These include the channel, username and password
const client = new tmi.Client({ //Con esto se conecta
    options: { debug: true, messagesLogLevel: "info" },
    connection: {
        reconnect: true,
        secure: true
    },

    identity: {
        username: process.env.TWITCH_USERNAME,
        password: process.env.TWITCH_OAUTH
    },

// Lack of the identity tags makes the bot anonymous and able to fetch messages from the channel
// for reading, supervision, spying, or viewing purposes only
    channels: [`${process.env.TWITCH_CHANNEL}`] //Con esto inicia el canal en el cual escuchara todo
});

// Connect to the channel specified using the setings found in the configurations
// Any error found shall be logged out in the console
client.connect().catch(console.error);

// We shall pass the parameters which shall be required
client.on('message', (channel, tags, message, self) => {
    // This logs out all the messages sent on the channel on the terminal
    console.log(message);

    switch (message.toLowerCase()) {
        case message:
            msg = message.toString();
            
            if (msg.includes('onvre')) {
                client.say(channel, `@${tags.username}: Escribe bien, que te estoy mirando!!`);
                break;
            }

            if (msg.includes('aber')) {
                client.say(channel, `@${tags.username}: Escribe bien, que te estoy mirando!!`);
                break;
            }

            if (msg.includes('komo')) {
                client.say(channel, `@${tags.username}: Escribe bien, que te estoy mirando!!`);
                break;
            }

            if (msg.includes('ai')) {
                client.say(channel, `@${tags.username}: Escribe bien, que te estoy mirando!!`);
                break;
            }

            if (msg.includes('!raebot')) {
                client.say(channel, `@${tags.username}: Soy RAEBot, un bot desarrollado por INovomiast!!`);
                break;
            }

            if (msg.includes('!github')) {
                client.say(channel, `@${tags.username}: Mi Codigo Fuente: https://github.com/KyeentProject/RAEBot`);
                break;
            }
    }       
});
