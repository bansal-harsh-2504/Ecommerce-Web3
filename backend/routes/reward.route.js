import {
  getRewardPoints,
  updateRewardPoints,
} from "../controllers/reward.controller.js";
import express from "express";
import authUser from "../middleware/auth.js";

const rewardRouter = express.Router();

rewardRouter.get("/get", authUser, getRewardPoints);
rewardRouter.post("/update", authUser, updateRewardPoints);

export default rewardRouter;
