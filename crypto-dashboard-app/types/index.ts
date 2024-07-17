export interface Crypto {
  name: string;
  code: string;
}

export interface Entry {
  _id: string;
  code: string;
  name: string;
  color: string;
  allTimeHighUSD: number;
  rate: number;
  volume: number;
  cap: number;
  liquidity: number;
  delta: {
    hour: number;
    day: number;
  };
  timestamp: Date;
}
