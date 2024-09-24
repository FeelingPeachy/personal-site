const express = require("express");
const router = express.Router();
const Posts = require("../models/posts");
router.use(express.json());

// Get all posts
router.get("/", async (req, res) => {
    try {
        const all_posts = await Posts.find(); // return all entries in table
        console.log(all_posts)
        res.json(all_posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/preview", async (req, res) => {
    try {
        const all_posts = await Posts.find().limit(3); // return all entries in table
        console.log(all_posts)
        res.json(all_posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific post
router.get("/:id", async (req, res) => {

});

// POST route for creating a new post
router.post("/", async (req, res) => {
    console.log("hello")
    const post = new Posts({
        title: req.body.title,         // Access title from the request body
        description: req.body.description,
        link: req.body.link
    });

    try {
        const newPost = await post.save();
        res.status(201).json(newPost);  

    } catch (err) {
        res.status(400).json({ err });
    }
});
// Update one post
router.patch("/:id", async (req, res) => {

});


// Delete all posts
router.delete("/deleteall", async (req, res) => {
    try {
        const result = await Posts.deleteMany({});
        res.status(200).json({ message: `${result.deletedCount} posts deleted successfully.` });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
