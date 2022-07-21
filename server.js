//require express add html and api routes

const PORT = process.env.PORT || 3001
const app = express();
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

