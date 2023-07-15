import express from "express";
import bookController from "./book.controller";

const router = express.Router();
router.post("/createbook", bookController.createBook);
router.get("", bookController.getAllBook);

export const BookRoute = router;
