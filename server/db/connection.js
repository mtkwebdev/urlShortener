const monk = require('monk');
const connectionURL = process.env.MONGODB_URI || 'localhost:5001/api/url';
const db = monk('connectionURL');

module.exports = db;