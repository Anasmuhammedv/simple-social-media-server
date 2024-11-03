import express from 'express'
import { createLike, getAllLikes, unlike } from '../controller/LikecController.js'
import { trycatch } from '../middleware/tryCatchMiddleware.js'

const router = express.Router()

router.post('/like/:id/post/:postId',trycatch(createLike))
router.delete('/like/:id/post/:postId',trycatch(unlike))
router.get('/like/post/:id', trycatch(getAllLikes));


export default router