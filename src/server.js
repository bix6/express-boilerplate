const knex = require("knex");
const app = require("./app");
const { PORT, DATABASE_URL } = require("./config");

// WebSocket setup
// const http = require("http").createServer(app);
// const io = require("socket.io")(http);

const db = knex({
  client: "pg",
  connection: DATABASE_URL,
});

app.set("db", db);

// WebSocket Hello World
/*
io.on("connection", (socket) => {
    console.log("user connected");
  });
*/

// WebSocket Use http instead of app
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
