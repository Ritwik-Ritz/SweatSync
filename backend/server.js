require('dotenv').config()
const cors = require('cors');
const express = require('express');
const wourkoutRoutes = require('./routes/workouts');
const loginRoutes = require('./routes/user');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(cors({origin:"http://localhost:3000"}));

app.use('/api/workouts',wourkoutRoutes);
app.use('/api/user', loginRoutes);


mongoose.connect(process.env.DBURI).then(()=>{
    app.listen(process.env.PORT);
    console.log("server is running!");
});
