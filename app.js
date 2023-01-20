//Require necessary node modules.
//Make the variables inside the .env element avalible for the Node Project.
require('dotenv').config();

const tmi = require('tmi.js');

//SetUp connection configuration.
// This includes the channel, username and password.
const client = new tmi.Client({
    options: { debug: true, messagesLogLevel: "info" },
    connection: {
        reconnect: true,
        secure: true
    },

    channels: [`${process.env.TWITCH_CHANNEL}`]
});


client.on('message', (channel, tags, message, self) => {
    // Lack of this statement or it's inverse (!self) will make it in active
    if (self) return;

    // Create up a switch statement with some possible commands and their outputs
    // The input shall be converted to lowercase form first
    // The outputs shall be in the chats
    
    switch (message.toLowerCase()) {
        // Use 'tags' to obtain the username of the one who has keyed in a certain input
        // 'channel' shall be used to specify the channel name in which the message is going to be displayed
        //For one to send a message in a channel, you specify the channel name, then the message
        // We shall use backticks when using tags to support template interpolation in JavaScript
        
        // In case the message in lowercase is equal to the string 'commands', send the sender of that message some of the common commands

        case 'commands':
            client.say(channel, `@${tags.username}, available commands are:
            Commands Help Greetings Hi !Website !Name
           
            For more help just type "Help"
            `);
            break;
            
            // In case the message in lowercase is equal to the string '!website', send the sender of that message your personal website
        case '!website':
            client.say(channel, `@${tags.username}, my website is www.section.io!`);
            break;
            
            // In case the message in lowercase is equal to the string 'greetings', send the sender of that message 'Hello @Username, what's up?!'
        case 'greetings':
            client.say(channel, `Hello @${tags.username}, what's up?!`);
            break;
            
            // In case the message in lowercase is equal to the string 'hi', send the sender of that message 'Username, hola'
        case 'hi':
            client.say(channel, `${tags.username}, hola!`);
            break;
            
            // In case the message in lowercase is equal to the string '!name', send the sender of that message the name of the chatbot
        case '!name':
            client.say(channel, `Hello @${tags.username}, my name is ChatBot! Type "help" to continue...`);
            break;
            
            // In case the message in lowercase is equal to the string 'help', send the sender of that message all the available help and commands
        case 'help':
            client.say(channel, `${tags.username}, Use the following commands to get quick help:
            -> Commands: Get Commands || 
            Help: Get Help || 
            Greetings: Get Greetings || 
            Hi: Get "Hola" || 
            !Website: Get my website || 
            !Name: Get my name || 
            !Upvote first_name second_name: Upvote user first_name second_name ||  Upvote first_name second_name: Upvote user first_name second_name || 
            !Cheer first_name second_name: Cheer first_name second_name || Cheers first_name second_name: Cheer first_name second_name --

            For more help just ping me up!
            `);
            break;
            
            
            // In case the message in lowercase is none of the above, check whether it is equal to '!upvote' or '!cheers'
            // these are used to  like certain users' messages or celebrate them due to an achievement
            
        default:
            // We shall convert the message into a string in which we shall check for its first word
            // and use the others for output
            let mymessage = message.toString();
            
            // We shall split the input message and check the string before the space if it is equal to '!upvote' or 'upvote'
            if ((mymessage.split(' ')[0]).toLowerCase() === '!upvote' || 'upvote') {
            
                // You can add some emojis which will appear in the chat using their emoji names
                // For example "PopCorn" or "TwitchLit" (fire emoji)
                // We shall then take the first and second strings after the space and display them together with the username
                // This shall output 'fireEmoji first_name second_name fireEmoji you have been UPVOTED by USERNAME'
                client.say(channel, `TwitchLit @${(mymessage.split(' ')[1] + '_' + mymessage.split(' ')[2])} TwitchLit  you have been UPVOTED by ${ tags.username }`);


                // We shall check if it is !cheer or cheers
                // If so, we shall display beer emojis (HSCheers) and messages
                // The bots output shall be 'beerEmoji first_name second_name beerEmoji you have been UPVOTED by USERNAME'
            } else if ((mymessage.split(' ')[0]).toLowerCase() === '!cheer' || 'cheers') {
                console.log(`HSCheers @${(mymessage.split(' ')[1] + '_' + mymessage.split(' ')[2])} HSCheers you have been UPVOTED by ${ tags.username }`);
            }
            break;
    }
});