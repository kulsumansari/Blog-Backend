const mongoose = require('mongoose')
const {validateURL} = require('../utils/validators')

const blogSchema = mongoose.Schema({
    blogId :{
        type: String,
        required: [true, 'Cannot create blog without blogId'],
        unique: true
    },
    blogTitle:{
        type: String,
        required: [true, 'Cannot Create blog without Title']
    },
    blogContent:{
        type:String,
        required:[true, 'Cannot create blog without Content']
    },
    author:{
        type:String,
        required:[true,'Author name is required']
    },
    createdAt:{
        type:String,
        default: ""
    },
    blogImage:{
        type:String,
        default: "",
    },
    relatedLinks:{
        type:[{
            title:{
                type:String,
                required:[true, 'Provide Valid description']
            },
            href:{
                type:String,
                required:[true, 'Provide Valid Link'],
                validate:[validateURL , 'Link is invalid']
            }
        }],
        default:[]
    },
    tags:{
        type:Array,
        default:[],
    }
})


const Blog = mongoose.model('Blogs' , blogSchema)

module.exports = Blog;