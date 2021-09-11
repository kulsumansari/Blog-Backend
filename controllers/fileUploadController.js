const multer = require('multer');
const cloudinary = require('../utils/cloudinary')
let maxSize = 1 * 1024 * 1024;
var storage = multer.diskStorage({})
const GlobalErrorhandling = require('./globalErrorController')

  
const upload = multer({
    storage: storage ,
    fileFilter: (req, file, cb) => {
        if (
          file.mimetype == "image/png" ||
          file.mimetype == "image/jpg" ||
          file.mimetype == "image/jpeg"
        ) {
          cb(null, true);
        } else {
          cb(null, false);
          return cb(new GlobalErrorhandling({
            message: 'Bad Request',
            error: 'File Type Not Supported',
          }).Error());
        }
      },
      limits: { fileSize: maxSize },
    });


const uploadFile = async(req, res, next) => {
    try {
      if(req.file){
        req.result = await cloudinary.uploader.upload(req.file.path)
        return next()
      } 
      return next()
    }catch(err) {
      console.log(err)
      let errObj=new GlobalErrorhandling({
        message: 'Bad Request',
        error: err.message,
      }).Error()
      return next(errObj)
    }
  }

  module.exports ={
      uploadFile,
      upload
  }