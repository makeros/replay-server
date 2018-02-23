
const talkback = require("talkback");

const opts = {
  host: "https://sonic-eu1-test.disco-api.com",
  port: 3001,
  path: "./sonic-tapes"
};
const server = talkback(opts);
server.start(() => console.log("Talkback Started"));
