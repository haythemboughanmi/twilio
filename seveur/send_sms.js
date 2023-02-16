const accountSid = "AC03c739bc56e41fa98673d3c0a9ba223a";
const authToken = "5de26866e067bd16768aa2c443ba6255";
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Holla',
     from: '+13158971873',
     to: '+21623786458'
   })
  .then(message => console.log(message.sid));