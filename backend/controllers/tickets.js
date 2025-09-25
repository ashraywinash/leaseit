import mongoose from 'mongoose';

// Define a schema and model for maintenance_tickets
const ticketSchema = new mongoose.Schema({}, { collection: 'maintenance_tickets' });
const Ticket = mongoose.model('Ticket', ticketSchema);

export async function getAllTickets(req, res) {
    try {
        const tickets = await Ticket.find({});
        res.json(tickets);
    } catch (error) {
        console.error("Error fetching tickets:", error);
        res.status(500).json({ error: "Failed to fetch tickets" });
    }
}

export function editTicket(req, res) {
    const ticketId = req.params.id;
    // Logic to edit the ticket with the given ID
    res.json({ message: `Editing ticket with ID: ${ticketId}` });

    
}