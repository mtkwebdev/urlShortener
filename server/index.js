const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const urls = require('./db/urls');
const app = express();

app.use(morgan('tiny')); //tiny is a way to format the logs produced, its the most simplest form of logging
app.use(bodyParser.json());
app.use(express.static('../public'));

app.post('/api/url', async (req, res) => {
    console.log(req.body);
    try {
        const url = await urls.create(req.body);
        res.json(url);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
});




// app.get('/', (req, res) => {
//     res.send('./public');
// });

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})