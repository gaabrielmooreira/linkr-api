import { Router } from "express";
import { addFollow, delFollow , checkIfFollowed, checkIfFollowAtLeastOne} from "../controllers/follows.controller.js";
import { authValidate } from "../middlewares/authValidate.js";


const followsRouter = Router();

followsRouter.get("/follow/:followed_user_id", authValidate, checkIfFollowed)
followsRouter.get("/following/check", authValidate, checkIfFollowAtLeastOne)
followsRouter.post("/follow/:followed_user_id", authValidate, addFollow)
followsRouter.delete("/unfollow/:followed_user_id", authValidate, delFollow)

export default followsRouter