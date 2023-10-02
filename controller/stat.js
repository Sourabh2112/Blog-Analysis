const lodash = require('lodash');


module.exports = (req,res)=>{
    console.log("data retrived succefully");
    const blogs = req.blogs;
    const blogSize = lodash.size(blogs);
    
    let len = 0;
    let val = ""
    // for (const key in blogs) {
    //     console.log(blogs[key])
    //     break;
    // }
    // blogs.foreach(blog => {
    //     if(blog.title.length>len){
    //         val = blog.title
    //         len = blog.title.length
    //     }
    // });
    const longestTitle = lodash.maxBy(blogs, (blog) => blog.title.length);
    // console.log('Longest title:', longestTitle ? longestTitle.title : 'No title found');
    // const longestTitle = lodash.maxBy(strings, 'length');

    res.status(200).json({
        longestTitle : longestTitle.title,
        blogSize : blogSize
    })
}