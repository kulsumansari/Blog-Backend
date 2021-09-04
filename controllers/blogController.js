const uniqid = require('uniqid');
const Blog = require('../models/blogModel')
const {sendResponse} = require('../utils/sendResponse')
const GlobalErrorhandling = require('./globalErrorController')

const getAllBlogs =async(req, res, next)=>{
    try{
        let blogs = await Blog.find({},{_id:0, __v:0});
        return sendResponse({
            res,
            statusCode: 200,
            message: "Blogs fetched successfully",
            data: blogs,
        });
    }
    catch(error){
        return next( new GlobalErrorhandling({
            message: 'Internal Server Error',
            error: error,
        }).Error());
    }
}

const getBlogById =async(req, res, next)=>{
    try{
        let {blogId} = req.params;
        let blog = await Blog.findOne({blogId : blogId},{_id:0, __v:0})
        if(!blog){
            return next(new GlobalErrorhandling({
                message: 'Not Found',
            }).Error()) 
        }
        return sendResponse({
            res,
            statusCode: 200,
            message: "Blog fetched successfully",
            data: blog,
        });
    }

   catch(error){
       return next( new GlobalErrorhandling({
            message: 'Internal Server Error',
            error: error,
        }).Error())
   }
}


const addBlog =async (req, res, next)=>{
    try{
        let {blogTitle, blogContent, blogImage, author, createdAt, tags, relatedLinks} = req.body;
        if(typeof relatedLinks === 'string'){
            relatedLinks = JSON.parse(relatedLinks)
        }
        if(req.blogImage){
            blogImage = req.result.url 
        }
        
        let newBlog = new Blog({
            blogId: uniqid(),
            blogTitle ,
            blogContent ,
            blogImage ,
            author,
            createdAt,
            tags,
            relatedLinks
        })
        data = await newBlog.save() 
        if(data){
            return sendResponse({
                res,
                statusCode: 201,
                message: "Blog added successfully",
                data: data,
            });
        }
    }

    catch(err){
        console.log(err)
        if(err.name === 'ValidationError'){   
            return next(new GlobalErrorhandling({
                message: 'Bad Request',
                error: err,
            }).Error())
            
        } 
        return next(new GlobalErrorhandling({
            message: 'Internal Server Error',
            error: err,
        }).Error())
    }
}


const updateBlog =async (req, res, next)=>{
    try{
        
        if(typeof req.body.relatedLinks === 'string'){
            req.body.relatedLinks = JSON.parse(req.body.relatedLinks)
        }
        if(req.file){
            req.body.blogImage = req.result.url 
        }
        let {blogId} =req.params;
        let blog = await Blog.findOneAndUpdate({blogId : blogId} , req.body , {new: true})
        if(blog){
            return sendResponse({
                res,
                statusCode: 200,
                message: "Blog Updated successfully",
                data: blog,
            });
        }
    }
    catch(err){
        if(err.name === 'ValidationError'){   
            return next(new GlobalErrorhandling({
                message: 'Bad Request',
                error: err,
            }).Error())
            
        } 
        return next(new GlobalErrorhandling({
            message: 'Internal Server Error',
            error: err,
        }).Error())
        
    }
}

const deleteBlog =async (req, res, next)=>{
    try{
        let {blogId} =req.params;
        let blog = await Blog.findOneAndDelete({blogId : blogId})
        if(blog){
            return sendResponse({
                res,
                statusCode: 204,
                message: "successfully deleted task",
            });
        }
        return next(new GlobalErrorhandling({
            message: 'Not Found',
        }).Error()) 
        
    }
    catch(err){
        return next(new GlobalErrorhandling({
            message: 'Internal Server Error',
            error: err,
        }).Error())   
    }
}
module.exports = {
    addBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
}