require("dotenv").config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./dbConnect')
const movieRoutes = require('./routes/movie-controller')


const app = express();
app.use(express.json());

app.use(cors());
app.use("/api",movieRoutes);

dbConnect();

const port = process.env.PORT || 8000;
app.listen(port,() => console.log(`Listening on port ${port}`));