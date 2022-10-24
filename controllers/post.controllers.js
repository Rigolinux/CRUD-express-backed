import Post from "../models/Post.js";

//cloudinary imports

import { uploader, destroyImage } from "../libs/cloudinari.js";

//file management imports from server
import fs from "fs-extra";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  //destructuring the body of the request
  const { title, description } = req.body;
  let image = null;
  if (req.files?.image) {
    const rest = await uploader(req.files.image.tempFilePath);
    //delete the image from the server tmp
    await fs.remove(req.files.image.tempFilePath);
    console.log(rest);
    //save the image url and public_id in the database
    image = {
      url: rest.secure_url,
      public_id: rest.public_id,
    };
  }

  try {
    //create a new post
    const post = new Post({ title, description, image });
    //save the post
    await post.save();
    console.log(post);
    res.json(post);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const UpdatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(UpdatedPost);
};

export const deletePost = async (req, res) => {
  try {
    const postRemove = await Post.findByIdAndDelete(req.params.id);
    //exist post?
    if (!postRemove) return res.status(404).send("Post not found");

    //delete image from cloudinary
    if (postRemove.image.public_id) {
      await destroyImage(postRemove.image.public_id);
    }
    res.sendStatus(204);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const getPostById = async (req, res) => {
  const PostOne = await Post.findById(req.params.id).catch((error) => {
    console.log(error);
    return res.status(500).json({ message: error.message });
  });

  if (!PostOne) return res.status(404);

  res.json(PostOne);
};
