import express, { Application, Request, Response } from "express";
import cors from "cors";
import { UserRoute } from "./app/modules/user/user.route";

const app: Application = express();

// middleware
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// user Application
app.use("/api/v1/users/", UserRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Working successfully");
});

export default app;
