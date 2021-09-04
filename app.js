const express = require('express')
const cors =require('cors')
const blogRouter = require('./routes/blogRouter')
const GlobalErrorhandling = require('./controllers/globalErrorController')
const { sendErrorResponse } =require('./utils/sendResponse')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use("/blogs", blogRouter)

app.all('/*',(req,res,next)=>{
    let errObj=new GlobalErrorhandling({
        message: 'Not Found',
        error: 'Invalid Page Request'
      }).Error()
    return next(errObj)
})

app.use('*' , sendErrorResponse)

module.exports =app;




