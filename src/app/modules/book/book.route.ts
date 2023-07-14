import express from "express";
import userController from "./book.controller";

const router = express.Router();
router.post("/create-book", userController.createUser);
router.get("", userController.getAllUser);

export const UserRoute = router;
