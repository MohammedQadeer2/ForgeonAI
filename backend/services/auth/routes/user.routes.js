import express from "express";
const router = express.Router()
import { login } from "../controllers/user.controller.js";

router.post("/api/auth/login", login);

export default router;