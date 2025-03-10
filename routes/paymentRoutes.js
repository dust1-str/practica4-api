import express from 'express'
import paymentController from '../controllers/paymentController.js'
const router = express.Router()

router.get('/', paymentController.get)

export default router