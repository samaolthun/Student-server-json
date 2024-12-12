const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const cors = require("cors");

server.use(cors()); // Apply CORS middleware first if required
server.use(middleware); // JSON Server middleware must be applied next
server.use(router); // Router must be applied last

const port = 3000;

server.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
