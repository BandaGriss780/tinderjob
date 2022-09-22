import { Router } from 'express'
import postController from "../../controllers/posts/index.js"
const router = Router()

router
    .get("/", postController.getAllPosts)
    .get("/:id", postController.getOnePost)
    .post("/", postController.createNewPost)
    .put("/:id", postController.updatePost)
    .delete("/:id", postController.deletePost)

export default router