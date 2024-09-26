import express from "express";
const router = express.Router();
import {
  getChats,
  createChat,
  userChats,
  findChat,
} from "../controllers/chat.controller.js";

router.get("/", getChats);

router.post("/", createChat);

router.get("/:userId", userChats);

router.get("/find/:firstUser/:secondUser", findChat);

export default router;
