const express = require('express');
const app = new express();
const https = require('https');
const fs = require('fs');
const path = require('path');
let host = '192.168.42.154';
let options = {
  key : fs.readFileSync('./ssl/key.pem'),
  cert: fs.readFileSync( './ssl/cert.pem' ),
  requestCert: false,
  rejectUnauthorized: false
};
app.use(express.static('static'));
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'index.html'));
});

let server = https.createServer(options,app);

server.listen(8848,host,()=>{
  console.log("listening http://192.168.42.154:8080/");
});