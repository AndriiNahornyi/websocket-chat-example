const ws = new require("ws");

const wsServer = new ws.Server({ port: 5500 });

const clients = [];

wsServer.on("connection", (newClient) => {
  clients.push(newClient);
  // setTimeout(() => {
  //     newClient.send("Hello from ws server")
  // }, 3000);
  clients.forEach((client) => {
    if (client !== newClient) {
      client.send("New member joined");
    }
  });
});
