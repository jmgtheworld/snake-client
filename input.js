// Stores the active TCP connection object.
let connection; 

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(conn);
  return stdin;
}

const handleUserInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;

  stdin.on('data', (data) => {
    if (data === '\u0003') process.exit();
  });

  stdin.on('data', (data) => {
    if (data === 'w') {
      conn.write("Move: up");
    }
  });

  stdin.on('data', (data) => {
    if (data === 's') {
      conn.write("Move: down");
    }
  });

  stdin.on('data', (data) => {
    if (data === 'a') {
      conn.write("Move: left");
    }
  });

  stdin.on('data', (data) => {
    if (data === 'd') {
      conn.write("Move: right");
    }
  });
}

module.exports = {setupInput};