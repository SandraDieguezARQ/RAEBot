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

//client.on('connected', () => {
//    client.say('Connected successfully');
//});

//Is Upper Case String Function

// We shall pass the parameters which shall be required
client.on('message', (channel, tags, message, self) => {
    switch (message) {
        case message:
            var msg = message.toString();
            
            msg.split(" ");

            
            // Common Word Errors
            if (msg.includes(['onvre'])) {
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
	
            if (msg.includes('ke')) {
            client.say(channel, `@${tags.username}: Escribe bien, que te estoy mirando!!`);
            break;
            }
            
            if (msg.includes('khe')) {
                client.say(channel, `@${tags.username}: Escribe bien, que te estoy mirando!!`);
                break;
            }

            if (msg.includes('aver')) {
                client.say(channel, `@${tags.username}: Escribe bien, que te estoy mirando!!`);
                break;
            }

            if (msg.includes('haver')) {
                client.say(channel, `@${tags.username}: Escribe bien, que te estoy mirando!!`);
                break;
            }

            if (msg.includes('poya')) {
                client.say(channel, `@${tags.username}: Palabras como esas no deberias usarlas`);
                break;
            }

            if (msg.includes('khe')) {
                client.say(channel, `@${tags.username}: Escribe bien, que te estoy mirando!!`);
                break;
            }

            if (msg.includes('aki')) {
                client.say(channel, `@${tags.username}: Escribe bien, que te estoy mirando!!`);
                break;
            }

            if (msg.includes('hola')) {
                client.say(channel, `Pa' tí mi cola!! @${tags.username}`);
                break;
            }

            if (msg.includes('vuenas')) {
                client.say(channel, `@${tags.username}: Escribe bien, que te estoy mirando!!`);
                break;
            }

            if (msg.includes('abe')) {
                client.say(channel, `@${tags.username}: Escribe bien, que te estoy mirando!!`);
                break;
            }

            if (msg.includes(13)) {
                client.say(channel, `Agarramela que me crece!! (Te Falta Semaforo Bro!!) @${tags.username}`);
                break;
            }

            if (msg.includes(5)) {
                client.say(channel, `Por el culo te la hinco!! (Te Falta Semaforo Bro!!) @${tags.username}`);
                break;
            }

            
            if (msg.includes(8)) {
                client.say(channel, `Por el culo te la entocho!! (Te Falta Semaforo Bro!!) @${tags.username}`);
                break;
            }

            if (msg.includes('ZIN TONTERIAS') || msg.includes('zin tonterias')) {
                client.say(channel, `Zin Tonterias eh!! @${tags.username}`);
                break;
            }

    }       
});