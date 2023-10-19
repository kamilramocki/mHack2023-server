require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const {connect} = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

const start = async () => {

    console.log('Connecting to database...');
    await connect(process.env.MONGO_URL);
    console.log('Connected to database!');

    app.listen(process.env.PORT, () => {
        console.log(`App listening on port ${process.env.PORT}.`);
    });
};

start().catch((e) => console.error('Error while starting application.', e));

