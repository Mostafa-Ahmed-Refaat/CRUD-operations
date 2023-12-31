const express = require('express');
const mongoose = require("mongoose");
const postRoutes = require('./routes/posts');
const app = express();
const morgan = require("morgan");

const dotenv = require("dotenv");
dotenv.config();
//db
mongoose.connect(process.env.MONGO_URI).then(() => console.log("DB Connected"));
    mongoose.connection.on("error", err => {console.log(`DB connection error: ${err.message}`);
    });

//middleware
app.get('/', (req, res) => {
    res.send('Welcome to my app for CRUD operations');
});
app.use(express.json());
app.use('/posts', postRoutes);
app.use(morgan("dev"));

const port=process.env.PORT ||8000;
app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
});