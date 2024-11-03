import express from 'express'
import { commentCreate, getPostComment } from '../controller/commentController.js'
import { trycatch } from '../middleware/tryCatchMiddleware.js'

const router =express.Router()
router.post('/comment/:id/post/:postId',trycatch(commentCreate))
router.get('/comment/:id',trycatch(getPostComment))

export default router