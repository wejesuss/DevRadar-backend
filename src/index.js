const { MONGO_DB, MONGO_USER, MONGO_PASS, PORT } = require('../.env');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0-c8lyf.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

app.use(cors());
app.use(express.json());
app.use(routes);


server.listen(PORT || 3333);
