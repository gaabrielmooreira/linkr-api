import { Router } from "express";
import { createPost, createRePost, deletePost, getNewPosts,  getPosts, getPostsByHashtag, getPostsFromUser, getRePostCount, toggleLike, updatePost, getPostAndRePost } from "../controllers/posts.controller.js";
import { postSchema } from "../schemas/postSchema.js";
import { schemaValidate } from "../middlewares/schemaValidator.js";
import { authValidate } from "../middlewares/authValidate.js";

const postsRouter = Router();

postsRouter.post("/create-post", schemaValidate(postSchema), authValidate, createPost);
postsRouter.post("/posts/:idPost/like", authValidate, toggleLike);
postsRouter.get("/posts", authValidate, getPosts)
postsRouter.get("/posts/since/:dateParam", authValidate, getNewPosts);
postsRouter.get("/hashtag/:hashtag", authValidate, getPostsByHashtag);
postsRouter.get("/user/:id", authValidate, getPostsFromUser);
postsRouter.put("/posts/:idPost", authValidate, updatePost);
postsRouter.delete("/posts/:idPost", authValidate, deletePost);
postsRouter.post("/re-post", authValidate, createRePost );
postsRouter.get("/re-post/:id", getRePostCount)
postsRouter.get("/post-reposts",authValidate, getPostAndRePost)

export default postsRouter;