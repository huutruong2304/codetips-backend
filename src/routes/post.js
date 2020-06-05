const express = require("express");
const Post = require("../models/post");

const routerPost = express.Router();

//connect mongodb DB
require("../config/db");

routerPost
    .get("/posts", async(req, res) => {
        const posts = await Post.find();
        res.status(200).json(posts);
    })
    .get("/posts/:id", async(req, res) => {
        const post = await Post.findById(req.params.id).exec((err, post) => {
            if (err) {
                console.log("Error getting the post!");
            } else {
                res.status(200).json(post);
            }
        });
    })
    .post("/posts", async(req, res) => {
        const { title, url, description } = req.body;
        const post = new Post({
            title,
            url,
            description
        })
        await post.save();
        res.status(200).json(post);
    });

module.exports = routerPost;