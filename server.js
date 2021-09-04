const mongoose = require('mongoose')
require('dotenv').config({path:'./config.env'})
const app = require('./app')

mongoose
    .connect(process.env.MONGODB_URI ,{
        useNewUrlParser: true,
        useUnifiedTopology:  true,
    })
    .then((con)=>{
        console.log("Connected to DB")
        const port = process.env.PORT || 3001 ; 
        app.listen( port , ()=>{
            console.log(`server started at port ${port}`);
        })
    })
    .catch((err)=>{
        console.log(err);
    })



