module.exports = (req,res)=>{
    console.log(req.blog);
    res.status(200).json({
        blog: 0
    })
}