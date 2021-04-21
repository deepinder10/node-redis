const http = require("http");
const redis = require('./redis');
const { get } = require('./redis');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
	// Set a response type of plain text for the response
	res.writeHead(200, { "Content-Type": "text/plain" });

	// Send back a response and end the connection
	res.end("Hello World!\n");
});

// Start the server on port 3000
app.listen(3000, "127.0.0.1");
console.log("Node server running on port 3000");

callStringCommands();

// STRINGs functions
async function callStringCommands() {
	// we set a key with name foo and value bar, set also returns a promise
	redis.setex("foo", 10, "bar");
	// redis.set("foo", "bar");

	// const res = await redis.set("foo", "bar");
	// console.log(res);

	// // we fetch the key and it returns a promise.
	// const result = await redis.get("foo");
	// console.log(result);
	// // we delete the key in redis
	// const deleteResult = await redis.del("fo1o");
	// console.log(deleteResult);
	// // we fetch the deleted key which returns in null
	// const latest = await redis.get("foo");
	// console.log(latest);
}