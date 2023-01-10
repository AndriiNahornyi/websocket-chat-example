const ws = new require("ws");

const wsServer = new ws.Server({ port: 5500 });

const users = [];

wsServer.on("connection", (newUser) => {
  users.push(newUser);

  newUser.on("message", (data) => {
    // console.log(data);
    const newData = JSON.stringify(JSON.parse(data));
    users.forEach((user) => {
      if (user !== newUser) {
        user.send(newData);
      }
    });
  });
});
