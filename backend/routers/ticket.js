import { Router } from "express";
import { getAllTickets, editTicket } from "../controllers/tickets.js";


const ticket_router = Router();

// Define your routes here
ticket_router.get("/", getAllTickets);
ticket_router.put("/:id", editTicket);


export default ticket_router;