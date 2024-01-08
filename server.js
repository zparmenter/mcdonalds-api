const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const port = 4000;

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${req.url}] ${req.method} - ${new Date().toLocaleTimeString()}`);
    next();
});

app.use('/api/v1', routes.products);

app.listen(port, () => {
    console.log(`server listening on port ${port}.`);
});