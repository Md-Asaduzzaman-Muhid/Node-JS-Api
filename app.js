const express = require('express');

const app = express();

const mongoose = require('mongoose');

require('dotenv/config');


//Middleware
// app.use('/posts', ()=>{
//     console.log('you are in posts middleware coosole');
// });


//Import Routes
const postsRoutes = require('./routes/posts');
app.use('/posts',postsRoutes);

//ROUTES
app.get('/',(req,res)=>{
    res.send('we are on home');
});



//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true },() => 
    console.log('connected to DB'),
);



app.listen(3000);