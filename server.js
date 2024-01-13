const express = require("express");
const ngrok = require('@ngrok/ngrok');
require('dotenv').config();

express()
  .use(express.static(__dirname + "/src"))
  .set('view engine', 'html')
  .get('/*', (req, res) => res.sendFile(__dirname + '/src/index.html'))
  .listen(8080, () => console.log('Node.js web server at 8080 is running...')); // TODO: change the port

// Get your endpoint online
ngrok.connect({ addr: 8080, authtoken_from_env: true })
  .then(listener => console.log(`Ingress established at: ${listener.url()}`)); // FIXME: change the port