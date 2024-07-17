import axios from "axios";
import Crypto from "../models/Crypto";

export enum CODES {
  BTC = "BTC",
  ETH = "ETH",
  USDT = "USDT",
  BNB = "BNB",
  SOL = "SOL",
}

const makeApiCall = async (code: string) => {
  const url = new URL(
    "/coins/single",
    process.env.LIVECOINWATCH_BASE_URL
  ).toString(); 
  const response = await axios.post(
    url,
    {
      currency: "USD",
      code: code,
      meta: true,
    },
    {
      headers: {
        "content-type": "application/json",
        "x-api-key": process.env.API_KEY as string,
      },
      timeout: 10000, // 10 seconds timeout
    }
  );

  return { ...response.data, code };
};

export const fetchAndStoreCryptoData = async () => {
  const codesArray = Object.values(CODES);
  const responsesWithTimestamp = [];

  for (const code of codesArray) {
    const response = await makeApiCall(code);
    responsesWithTimestamp.push({
      ...response,
      timestamp: new Date(),
    });
  }

  await Crypto.insertMany(responsesWithTimestamp);

  return responsesWithTimestamp;
};
