import { Router } from "express";

//import controllers
import { getPosts, createPost,updatePost,deletePost,getPostById } from "../controllers/post.controllers.js";

const router = Router();

router.get("/posts",getPosts)

router.post("/posts", createPost);
router.put("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);
router.get("/posts/:id", getPostById);


export default router;