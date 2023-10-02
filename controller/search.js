module.exports = (req,res)=>{
    console.log(req.blogs);
    res.status(200).json({
        blog: 0
    })
}