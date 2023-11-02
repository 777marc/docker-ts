import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  return res.json({ status: 200, message: "all is well, Marcos!" });
});

app.get("/heyo", (req: Request, res: Response) => {
  return res.json({ message: "heyo!!!!" });
});

app.listen(3000, () => console.log("listening on port 3000"));
