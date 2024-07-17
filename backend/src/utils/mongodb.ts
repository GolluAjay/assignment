import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    throw error;
  }
};

export default connectDB;
