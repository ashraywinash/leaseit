import { Router } from "express";
import { getMcagentResponse } from "../controllers/mcagent.js";


const mcagent_router = Router();

// Define your routes here
mcagent_router.get("/", getMcagentResponse);

export default mcagent_router;