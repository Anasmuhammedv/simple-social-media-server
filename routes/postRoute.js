import express from 'express'
import { createPost, getAllPost } from '../controller/postController.js'
import { trycatch } from '../middleware/tryCatchMiddleware.js'

const router = express.Router()

router.post('/post/:id',trycatch(createPost))
router.get('/post',trycatch(getAllPost))

export default router