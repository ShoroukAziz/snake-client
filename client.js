const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect",()=> {
    console.log('Successfully connected to game server');
    conn.write("Name: SHA");
  });

  conn.on("connect", ()=>{

    // conn.write("Move: left");

  });

  conn.on("data",(incomingMessage)=>{
    console.log(`Server says: ${incomingMessage}`);
  })

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;

module.exports = {
  connect
};