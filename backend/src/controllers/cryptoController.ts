import { Request, Response } from "express";
import Crypto from "../models/Crypto";

export const getLast20EntitiesByCode = async (req: Request, res: Response) => {
  const { code, limit } = req.params;

  try {
    const entities = await Crypto.find({ code })
      .sort({ timestamp: -1 }) // Sort by _id in descending order
      .limit(parseInt(limit))
      .select('_id code market name color allTimeHighUSD rate volume cap liquidity delta timestamp'); // Specify fields to include
    res.status(200).json(entities);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data", details: error });
  }
};

export const getCodes = async (req: Request, res: Response) => {
  try {
    const uniqueCodes = await Crypto.aggregate([
      {
        $group: {
          _id: { code: "$code", name: "$name" },
        },
      },
      {
        $project: {
          _id: 0,
          code: "$_id.code",
          name: "$_id.name",
        },
      },
    ]);
    res.status(200).json(uniqueCodes);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching unique codes", details: error });
  }
};
