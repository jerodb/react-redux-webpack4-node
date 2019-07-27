import express from 'express'
import user from './user'

const router = express.Router()

router.post('/set/user', user.setUser)

export default router
