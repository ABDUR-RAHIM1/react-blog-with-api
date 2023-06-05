const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    author : {
        type : String,
        default : "Unnamed"
    },
    date : {
        type : Date,
        default : Date.now
    }
});

const Blog = mongoose.model("Blog", BlogSchema);
module.exports =  Blog;