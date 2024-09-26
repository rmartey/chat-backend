import express from "express";
import { getAllUsers, getUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getAllUsers);

router.get("/:id", getUser);

export default router;
