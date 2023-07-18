import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();
router.post("/create-book", BookController.createBook);
router.post("/add-comment/:id", BookController.addComment);
router.get("/get-book", BookController.getAllBook);
router.get("/getSingle-books/:id", BookController.getSingleBook);
router.patch("/updateBook/:id", BookController.updateBooks);
router.delete("/deleteBook/:id", BookController.deleteBook);

export const BookRoute = router;
