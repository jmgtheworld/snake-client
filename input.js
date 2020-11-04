/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;
}

const handleUserInput = function() {
  const stdin = process.stdin;
  stdin.on('data', (data) => {
    if (data === '\u0003') process.exit();
  });
}

module.exports = {setupInput};