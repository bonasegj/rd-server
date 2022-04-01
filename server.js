const express = require('express');
const { SMTPClient, Message } = require('emailjs');
//const stringify = require('fast-json-stable-stringify');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json({limit: '1mb'}));
app.use(express.urlencoded({ extended: false }));

const cors=require("cors");
const corsOptions ={
   origin:'*', 
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.post('/mail/send', function(req, res) {
    const pClient = req.body.client;
    const pMessage = req.body.message;

    const client = new SMTPClient(pClient);
    const message = new Message(pMessage);

    // send the message and get a callback with an error or details of the message that was sent
    client.send(message, function (err, message) {
    console.log(err || message);
    });

    res.send({
        'client': pClient,
        'message': pMessage
    });
  });

app.listen(port);
console.log('Server started at http://localhost:' + port);

