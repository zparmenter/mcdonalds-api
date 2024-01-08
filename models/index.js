const mongoose = require('mongoose');
require('dotenv').config();

const connectionString = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(connectionString)
    .then(() => console.log('MongoDB connected successfully!!'))
    .catch((err) => console.error(`MongoDb connection error: ${err}.`))

module.exports = {
    Product: require('./Product'),
}
