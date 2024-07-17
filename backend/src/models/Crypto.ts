import { Schema, model, Document } from 'mongoose';

interface Crypto extends Document {
  code: string;
  name: string;
  color: string;
  allTimeHighUSD: number;
  rate: number;
  markets: number;
  volume: number;
  cap: number;
  liquidity: number;
  delta: {
    hour: number;
    day: number;
  };
  timestamp: Date; 
}

const cryptoSchema = new Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  color: { type: String, required: true },
  allTimeHighUSD: { type: Number, required: true },
  rate: { type: Number, required: true },
  markets: { type: Number, required: true },
  volume: { type: Number, required: true },
  cap: { type: Number, required: true },
  liquidity: { type: Number, required: true },
  delta: {
    hour: { type: Number, required: true },
    day: { type: Number, required: true },
  },
  timestamp: { type: Date, required: true, default: Date.now }
});

export default model<Crypto>('Crypto', cryptoSchema);
