import express from "express";
import {
  allOrders,
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  updateStatus,
  userOrders,
  verifyStripe,
} from "../controllers/order.controller.js";
import adminAuth from "../middleware/admin.auth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

//Admin routes
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//Payment routes
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

//User routes
orderRouter.get("/userOrders", authUser, userOrders);

//Verify payment
orderRouter.post("/verifyStripe", authUser, verifyStripe);

export default orderRouter;
