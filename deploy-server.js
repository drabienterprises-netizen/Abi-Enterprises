const { exec } = require('child_process');
const http = require('http');
const PORT = 3000;

http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/deploy') {
    console.log('Starting deployment…');
    exec('npm run deploy', (error, stdout, stderr) => {
      if (error) {
        console.error(`Deploy error: ${error}`);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: false, message: stderr }));
      }
      console.log(`Deploy output: ${stdout}`);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ success: true, message: stdout }));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
}).listen(PORT, () => {
  console.log(`Deploy server listening at http://localhost:${PORT}`);
});