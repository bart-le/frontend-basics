const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === '/') {
		res.write('<html>');
		res.write(`
			<head>
				<title>My first Node server</title>
			</head>
			<body>
				<form action="/message" method="post">
					<input type="text" name="message">
					<button type="submit">Send</button>
				</form>
			</body>
		`);
		res.write('</html>');
		return res.end();
	}
	if (url === '/message' && method === 'POST') {
		fs.writeFileSync('message.txt', 'General Kenobi.');
		res.statusCode = 302;
		res.setHeader('Location', '/');
		return res.end();
	}
	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write(`
		<head>
			<title>My first Node server</title>
		</head>
		<body>
			<h1>Hello from my Node.js server!</h1>
		</body>
	`);
	res.write('</html>');
	res.end();
});

server.listen(3000);
