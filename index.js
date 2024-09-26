import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import chatRoutes from "./routes/chat.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DATABASE_URL;

// routes
app.use("/api/chats", chatRoutes);

app.use("/api/messages", messageRoutes);

app.use("/api/users", userRoutes);

app.get("/", function (req, res) {
  res.send("Hello World");
});

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
