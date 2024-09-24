require('dotenv').config();
const cors = require('cors');
const express = require('express');
const path = require('path');
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// Connecting to the database
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => { console.log(error) });
db.once("open", () => { console.log("Connected to database") });

// Middleware
app.use(cors());
app.use(express.json()); 
app.use(express.static(path.join(__dirname, '../frontend/dist'))); 

// Routes
const postRoutes = require('./routes/posts'); // Create this file later
const homeRoutes = require('./routes/home');


app.use('/posts', postRoutes);
app.use('/', homeRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
