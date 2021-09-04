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
        req.result = await cloudinary.uploader.upload(req.blogImage.path)
      } 
      next()
    }catch(err) {
      let errObj=new GlobalErrorhandling({
        message: 'Bad Request',
        error: err,
      }).Error()
      return next(errObj)
    }
  }

  module.exports ={
      uploadFile,
      upload
  }