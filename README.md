# Blog-Backend

Blog Backend API is developed using node.js and express. This API allows to fetch blogs , add, update, and delete blogs which are stored in Mongodb database server.
    
**Features**

  * Get All Blogs
  
  * Get Blog By BlogId
  
  * Add Blog
  
  * Update Blog
  
  * Delete Blog
 
 **Each Blog Has following Keys**

  * blogID (required)

  * blogTitle (required)
  
  * blogContent (required)
  
  * author (required)
  
  * blogImage
  
  * createdAt
  
  * tags
  
  * relatedLinks
  
  
## Set-up Project

To Setup this project locally follow below mentioned steps:

#### Installation and Run

 1. Installation
 
   - Clone the Repository
   
   ```
    git clone https://github.com/kulsumansari/Todo-API-Mongoose-ModeSwitch.git
  ```
  - navigate to the root folder and run the following commands to install node modules.
   
  ```
  npm install
  ```
  
  2. Configure Database 
   
      a.Install Mongodb database in your system 
   
      b.Create a database named BlogDB
   
   
  3. Create Configuration File (config.env) containing following variables :
   
  ```
    MONGODB_URI = <YOUR_DB_URL>
    PORT = <YOUR_PORT>
    CLOUD_NAME= <CLOUDINARY_CLOUD_NAME>
    API_KEY = <CLOUDINARY_API_KEY>
    API_SECRET = <CLOUDINARY_API_SECRETKEY>
  ```
   
  4. Run the Project
  
  ```
  node server.js
  ```
    
##### API Endpoint : http://127.0.0.1:YOUR_PORT


## API

### Get All Blogs

 * Request :
   
   url : /blogs

   Method : `GET` 

 * Response :
 
    ![Get all blogs](https://kulsumansari.github.io/webpage-data/blogAPI-images/getAllBlogs.png)
 
 
 ### Get Blog By BlogID

 * Request :
   
   url : /blogs/:blogId

   Method : `GET` 
   
   req params : blogId

 * Response :
 
    ![Get blog](https://kulsumansari.github.io/webpage-data/blogAPI-images/getBlogById.png)



 ### Add Blog
 
 **With All Keys (using Form-Data)**
 
 * Request :
   
   url : /blogs

   Method : `POST` 
   
   body : 
   
    ![Add blogs](https://kulsumansari.github.io/webpage-data/blogAPI-images/AddBlogFormData.png)

 * Response :
 
    ![Add blogs](https://kulsumansari.github.io/webpage-data/blogAPI-images/ADDBlogFormDataResult.png)

  **With Only Required Keys (using JSON Data)**
    
    ![Add blogs](https://kulsumansari.github.io/webpage-data/blogAPI-images/addBlogJsonDsta.png)



 ### Update Blog By BlogId
 
 * Request :
   
   url : /blogs/:blogId

   Method : `PUT` 
   
   req params : blogId
   
   body : 
   
    ![Update blogs](https://kulsumansari.github.io/webpage-data/blogAPI-images/UpdateBlog.png)

 * Response :
 
    ![Update blogs](https://kulsumansari.github.io/webpage-data/blogAPI-images/UpdateBlogResult.png)


### Delete Blog By BlogId
 
 * Request :
   
   url : /blogs/:blogId

   Method : `DELETE` 
   
   req params : blogId
   
   * Response :
   
        status code : 204
        
        body : none
        


## Global Error Handling 

  In Blog backend API server Global Error Handler has been implemented to handle errors in the application and send response according to them. 
  
  For example : 404-Page Not Found Errors can be handled as
  
  ![Error Handler](https://kulsumansari.github.io/webpage-data/blogAPI-images/NotFound.png)

   
   
## Run in postman

You can test this API on Postman :

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/e07bdc4cb309a7f9145d?action=collection%2Fimport)

## Project Folder Structure
```bash

├── app.js
├── server.js
├── package.json
├── package-lock.json
├── README.md
├── config.env
├── controllers
│   └── blogController.js
│   └── fileUploadController.js
│   └── globalErrorController.js
├── models
│   └── blogModel.js
├── routes
│   └── blogRouter.js
└── utils
     └── cloudinary.js
     └── sendReponse.js
     └── validators.js     
    
```


## Referencs

* [Express](http://expressjs.com/en/api.html)

* [async await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

* [Mongoose](https://mongoosejs.com/docs/guide.html)

* [Cloudinary](https://cloudinary.com/documentation/node_integration)

* [multer](https://www.npmjs.com/package/multer)

