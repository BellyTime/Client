const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const port = parseInt(process.env.PORT, 10) || 3000;
const handle = app.getRequestHandler();
   
app.prepare().then(() => {
    const server = express();
    const path = require('path');
     
    server.get("/service-worker.js", (req, res) => {
        const filePath = path.join(__dirname, '.next', 'service-worker.js')
        app.serveStatic(req, res, filePath);
    });
     
    server.get('*', (req, res) => {
        return handle(req, res);
    });
     
    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
})