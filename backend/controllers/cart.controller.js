import User from "../models/user.model.js";

//add products to cart
export const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    const userData = await User.findById(userId);
    let cartData = await userData.cartData;

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    await User.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log("Error while adding to cart : ", error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//update user cart
export const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    const userData = await User.findById(userId);
    let cartData = await userData.cartData;

    cartData[itemId][size] = quantity;

    await User.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Cart updated" });
  } catch (error) {
    console.log("Error while updating cart : ", error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//Get user cart data
export const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const userData = await User.findById(userId);
    let cartData = await userData.cartData;

    res.json({ success: true, message: "Cart data fetched", cartData });
  } catch (error) {
    console.log("Error while fetching cart data : ", error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};
