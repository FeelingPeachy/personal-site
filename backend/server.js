require('dotenv').config()
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
db.once("open", () => { console.log("connected to database") });


// Serve static files from the React app
// the way i understand it is that express serves the initial index html, from which point react handles navigation and express handles apis
app.use(express.static(path.join(__dirname, '../frontend/dist'))); // Change 'dist' to 'build' if using Create React App
app.use(cors());

//routes
const postRoutes = require('./routes/posts'); // Create this file later
const homeRoutes = require('./routes/home');

app.use('/posts', postRoutes);
app.use('/home', homeRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});