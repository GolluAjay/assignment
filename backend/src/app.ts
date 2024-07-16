import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/mongodb';
import cryptoRoutes from './routes/cryptoRoutes';
import startCronJobs from './utils/cron';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/crypto', cryptoRoutes);

connectDB().then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.error('MongoDB connection error:', error);
  process.exit(1);
});

startCronJobs(); // Start the cron jobs

export default app;
