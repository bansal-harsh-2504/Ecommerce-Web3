import Order from "../models/order.model.js";
import User from "../models/user.model.js";

//COD orders
export const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new Order(orderData);
    await newOrder.save();

    await User.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log("Error in cod order controller : ", error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//Stripe Orders
export const placeOrderStripe = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error in stripe order controller : ", error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//Razorpay Orders
export const placeOrderRazorpay = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error in razorpay order controller : ", error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// All Orders data for admin panel
export const allOrders = async (req, res) => {
  try {
    const orders = await Order.find({});

    res.json({
      success: true,
      message: "fetched all orders for admin panel",
      orders,
    });
  } catch (error) {
    console.log("Error in all orders for admin controller : ", error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//User Order data for frontend
export const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await Order.find({ userId });
    res.json({ success: true, message: "Order fetched successfully", orders });
  } catch (error) {
    console.log("Error in user order data controller : ", error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//Update Order Status from admin panel
export const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await Order.findByIdAndUpdate(orderId, { status });
    res.json({
      success: true,
      message: "Status updated",
    });
  } catch (error) {
    console.log("Error in update order status controller : ", error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};
