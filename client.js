const { IP, PORT } = require('./constants');

const net = require('net');
/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on("connect", () => {
    console.log ("Successfully connected to game server");
    conn.write("Name: MIN");
  });

  conn.on('data', () => {
    console.log("you ded cuz you idled");
  });


  return conn;
}

module.exports = {connect};