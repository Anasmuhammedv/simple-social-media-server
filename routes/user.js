import express from 'express'
import { createUser, getAuser, loginUser } from '../controller/userAuth.js'
import { trycatch } from '../middleware/tryCatchMiddleware.js'

const router = express.Router()

router.post('/user',trycatch(createUser))
router.post('/user/login',trycatch(loginUser))
router.get('/user/:id',trycatch(getAuser))


export default router