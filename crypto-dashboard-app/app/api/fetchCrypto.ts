// api/fetchEntries.ts
import axios from "axios";
import { Entry } from "@/types";

export const fetchEntries = async (code: string): Promise<Entry[]> => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/crypto/last/20/${code}`,
      {
        cache: "no-cache",
      }
    );
    return response.json();
  } catch (error) {
    console.error("Failed to fetch entries:", error);
    return [];
  }
};

export const fetchCryptos = async () => {
  const response = await fetch("http://localhost:8080/api/crypto/codes");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
