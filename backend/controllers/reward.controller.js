import User from "../models/user.model.js";

export const getRewardPoints = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);
    res.json({
      success: true,
      message: "Rewards fetched successfully",
      rewardPoints: user.rewardPoints,
    });
  } catch (error) {
    console.log("Error in getting rewards Conltroller : ", error.message);
    res.json({ success: false, message: "Internal Server Error" });
  }
};

export const updateRewardPoints = async (req, res) => {
  try {
    const { userId, addPoints } = req.body;
    const user = await User.findById(userId);
    user.rewardPoints = user.rewardPoints + addPoints;
    await user.save();

    res.json({
      success: true,
      message: "Updated rewards successfully.",
      rewards: user.rewardPoints,
    });
  } catch (error) {
    console.log("Error in updating rewards Conltroller : ", error.message);
    res.json({ success: false, message: "Internal Server Error" });
  }
};
