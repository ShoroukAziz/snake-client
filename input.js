const {KEYS} = require("./constants");

let connection;

// setup interface to handle user input from stdin

const handleUserInput =  key => {
  
  if (key === KEYS.EXIT_KEY) {
    process.exit();
  }
  else if(key === KEYS.MOVE_LEFT_KEY){
    connection.write("Move: left");
  }
  else if(key === KEYS.MOVE_RIGHT_KEY)
  {
    connection.write("Move: right");
  }
  else if(key === KEYS.MOVE_DOWN_KEY)  {
    connection.write("Move: down");
  }
  else if( key === KEYS.MOVE_UP_KEY)  {
    connection.write("Move: up");
  }
  else if( key === '\u0068')  {
    connection.write("Say: Hello");
  }
  else if( key === '\u006F')  {
    connection.write("Say: Ouch");
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = {setupInput};