const express = require('express')
const router = express.Router()
const { getAllBlogs, addBlog, updateBlog, getBlogById, deleteBlog } = require('../controllers/blogController')
const { uploadFile, upload } = require('../controllers/fileUploadController')

router.route('/')
    .get(getAllBlogs)
    .post([upload.single('blogImage'),uploadFile,addBlog])

router.route('/:blogId')
    .get(getBlogById)
    .put(upload.single('blogImage'),uploadFile,updateBlog)
    .delete(deleteBlog)

module.exports = router ;