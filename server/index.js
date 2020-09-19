const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('tiny')); //tiny is a way to format the logs produced, its the most simplest form of logging
app.use(bodyParser.json());
app.use(express.static('../public'));

// app.get('/', (req, res) => {
//     res.send('./public');
// });

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})