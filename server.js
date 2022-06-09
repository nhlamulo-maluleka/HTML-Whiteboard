const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('*', (_, res) => {
    res.redirect(path.join(__dirname, 'public', 'index.html'))
})

server.listen(PORT, () => {
    console.log(`Server running on ${server.address().address}::${server.address().port}`)
})