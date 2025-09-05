import express from "express"
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.route("/")
.get(getUsers)
.post(createUser)

userRouter.route("/:id")
.get(getUserById)
.put(updateUser)
.delete(deleteUser)

export default userRouter