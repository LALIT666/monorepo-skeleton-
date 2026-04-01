import express from "express";
import { client } from "@repo/db/client";

const app = express();

const port = 3002;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const user = await client.user.create({
    data: {
      username,
      password,
    },
  });

  res.status(200).json({
    message: "signup successful",

    username: user.username,
    id: user.id,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
