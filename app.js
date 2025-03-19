const express = require('express');
const dotenv = require('dotenv');
const connectToDatabase = require('./config/database');
const itemRoutes = require('./routes/itemRoutes');

dotenv.config();
connectToDatabase();

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/', itemRoutes);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
