import express  from "express";
import { getAllUser, signUp } from "../controllers/user-controller";

const router = express.Router();

router.get("/", getAllUser);
router.post("/signUp",signUp);
export default router;