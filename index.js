var express = require("express");
var server = express();
var fs = require('fs');
const http = require('http');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

server.listen( port, hostname, () => {
    console.log(`Server runnint at https://${hostname}:${port}/`);
})
server.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname,'index.html'));
});
server.get("*", (req, res) => {
    res.status(400).json({ "Ruta no encontrada.": 404 });
});