var express = require("express");
var server = express();
const path = require('path');

const hostname = 'localhost';
const port = 3000;

server.use(express.static(path.join(__dirname, 'assets')));
server.use(express.static(path.join(__dirname, 'STORAGE')));

server.listen( port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
})
server.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname,'index.html'));
});
server.get("*", (req, res) => {
    res.status(400).json({ "Ruta no encontrada.": 404 });
});