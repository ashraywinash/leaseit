import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { default as mcagent_router } from './routers/mcagent.js';
import { default as ticket_router } from './routers/ticket.js' ;

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8999;
const MONGO_URI = process.env.MONGO_CONNECTION_STRING;

// Middleware
app.use(express.json());

// MongoDB connection
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function connectDB() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(MONGO_URI, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectDB();


// Basic route
app.get('/', (req, res) => {
  res.send('LeaseIt backend running');
});

app.use('/api/mcagent', mcagent_router);
app.use('/api/ticket/', ticket_router);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});