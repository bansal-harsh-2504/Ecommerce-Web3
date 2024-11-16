import Order from "../models/order.model.js";
import User from "../models/user.model.js";
import Stripe from "stripe";
import razorpay from "razorpay";

//gloabl variables
const currency = process.env.CURRENCY;
const deliveryCharge = process.env.DELIVERY_CHARGE;

//gateway initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// const razorpayInstance = new razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

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

//Place Stripe Order
export const placeOrderStripe = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const { origin } = req.headers;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "Stripe",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new Order(orderData);
    await newOrder.save();

    const line_items = items.map((item) => ({
      price_data: {
        currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency,
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: deliveryCharge * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
      line_items,
      mode: "payment",
    });

    res.json({
      success: true,
      message: "Order Placed with stripe",
      session_url: session.url,
    });
  } catch (error) {
    console.log("Error in stripe order controller : ", error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Verify Stripe payment
export const verifyStripe = async (req, res) => {
  const { userId, orderId, success } = req.body;
  try {
    if (success === "true") {
      await Order.findByIdAndUpdate(orderId, { payment: true });
      await User.findByIdAndUpdate(userId, { cartData: {} });

      res.json({ success: true, message: "Payment verified successfully" });
    } else {
      await Order.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Payment failed!" });
    }
  } catch (error) {
    console.log("Error verifying stripe payment : ", error.message);
    res.json({ success: false, message: error.message });
  }
};

//Place Razorpay Order
/*
export const placeOrderRazorpay = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "Razorpay",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new Order(orderData);
    await newOrder.save();

    const options = {
      amount: amount * 100,
      currency: currency.toUpperCase(),
      receipt: newOrder._id.toString(),
    };

    await razorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.json({ success: false, message: error });
      }
      return res.json({
        success: true,
        message: "Order placed successfully",
        order,
      });
    });
  } catch (error) {
    console.log("Error in razorpay order controller : ", error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//Verify Razorpay payment
export const verifyRazorpay = async (req, res) => {
  try {
    const { userId, razorpay_order_id } = req.body;
    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);

    if (orderInfo.status === "paid") {
      await Order.findByIdAndUpdate(orderInfo.receipt, { payment: true });
      await User.findByIdAndUpdate(userId, { cartData: {} });
      res.json({ success: true, message: "Payment Successfull" });
    } else {
      res.json({ success: false, message: "Payment Failed" });
    }
  } catch (error) {
    console.log(
      "Error in verify razorpay payment controller : ",
      error.message
    );
    res.json({
      success: false,
      message: error.message,
    });
  }
};
*/

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
