import express, { Application, Request, Response } from "express";
import cors from "cors";
import { BookRoute } from "./app/modules/book/book.route";
import { UserRoute } from "./app/modules/user/user.router";

const app: Application = express();

// middleware
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Book Application
app.use("/api/v1/books/", BookRoute);
app.use("/api/v1/users/", UserRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Working successfully");
});

export default app;
