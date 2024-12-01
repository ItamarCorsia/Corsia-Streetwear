import 'dotenv/config'
import express from 'express'
import { verifyStripe, placeOrder, placeOrderStripe, allOrders, userOrders, updateStatus } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Admin features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// Payment features
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)

// User Feature
orderRouter.post('/userOrders', authUser, userOrders)

// verify payment
orderRouter.post('/verifyStripe', authUser, verifyStripe)

export default orderRouter 