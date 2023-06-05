const { getAllBlog, createBlog, updateBlog, deleteBlog } = require('../controllers/controllers')

const router = require('express').Router()


// get all blogs
router.get("/get-blog", getAllBlog)
// create blog
router.post("/add-blog", createBlog)

// update blog
router.put("/update-blog/:id", updateBlog)

// delete blog
router.delete("/delete-blog/:id", deleteBlog)




module.exports = router