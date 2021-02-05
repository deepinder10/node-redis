const Redis = require("ioredis");
const REDIS_URL = "127.0.0.1";
let redis;

(function init() {
	redis = new Redis({
		port: 6379, // Redis port
		host: REDIS_URL, // Redis host
		family: 4, // 4 (IPv4) or 6 (IPv6)
	});
})();

async function get(key) {
	const result = await redis.get(key);
	console.log(result);
	return result;
}

module.exports = redis;
