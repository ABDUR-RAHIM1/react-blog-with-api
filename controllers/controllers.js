const Blog = require("../model/blogModel")

// get all blogs
const getAllBlog = async (req, res) => {
    try {
        const blog = await Blog.find()
        res.json(blog)
    } catch (error) {
        res.json({ Massege: "Shomthing went wrong on Srever", error })
    }
}


// create blogs
const createBlog = async (req, res) => { 
    try {
        const newBlog = await Blog({
            title : req.body.title,
            description : req.body.description,
            author : req.body.author
        })
        await newBlog.save()
        res.status(200).json(newBlog)
    } catch (error) {
        res.json({ Massege: "Shomthing went wrong on Srever"})
    }
}

// update blog
const updateBlog = async (req, res) => {
    try {
        const blogId = req.params.id
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $set: req.body
        })
        res.send(" updateBlog bblogs")
    } catch (error) {
        res.json({ Massege: "Shomthing went wrong on Srever", error })
    }

}

// delete blog
const deleteBlog = async (req, res) => {
    const blogId = req.params.id
    try {
         const blog = await Blog.findOneAndDelete({_id : blogId})
         res.json({message : "blog deleted Successfull"})
    } catch (error) {
        res.json({ message: "Shomthing went wrong on Srever"})
    }

 
}


module.exports = { getAllBlog, createBlog, updateBlog, deleteBlog }