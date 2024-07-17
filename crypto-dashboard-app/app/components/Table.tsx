"use client";
import React, { useEffect, useState, useCallback } from "react";
import moment from "moment";
import { useDispatch, useSelector, UseSelector } from "react-redux";

import Modal from "./Modal";
import { formatNumber } from "../utils/formatNumber";
import { fetchEntries } from "../api/fetchCrypto";
import { Crypto, Entry } from "@/types";
import { useAppSelector } from "../redux/store";
import { updateModalState } from "../redux/Model/model-slice";
import { addEntries } from "../redux/Crypto/cryto-slice";

interface TableProps {
  initialEntries: Entry[];
  code: string;
  color: string;
  cryptos: Crypto[];
}

interface Data {
  [code: string]: Entry[];
}

const Table: React.FC<TableProps> = ({
  initialEntries,
  code,
  color,
  cryptos,
}) => {
  const dispatch = useDispatch();
  const { isModalOpen }: { isModalOpen: boolean } = useAppSelector(
    (state) => state.modal
  );
  const { data }: { data: Data } = useAppSelector((state) => state.cryto);

  useEffect(() => {
    dispatch(addEntries({ [code]: initialEntries }));
  }, [initialEntries, dispatch, code]);

  const fetchData = useCallback(async () => {
    const data = await fetchEntries(code);
    dispatch(addEntries({ [code]: data }));
  }, [code, dispatch]);

  const selectedCrypto = cryptos.filter((crypto) => crypto.code === code)[0];

  useEffect(() => {
    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 5000); // Poll every 5 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [fetchData]);

  if (data[code]?.length === 0) {
    return <p className="text-gray-600">No data available</p>;
  }

  // Determine the color from the first entry or use a default color
  const backgroundColor = data[code]?.[0]?.color || color || "#ffffff";

  const handleOpenModal = () => dispatch(updateModalState(true));
  const handleCloseModal = () => dispatch(updateModalState(false));

  const renderHeader = () => {
    return (
      <div className="flex-row justify-between flex items-center mb-4 mx-5">
        <div className="text-2xl font-semibold">
          {selectedCrypto?.name} ({selectedCrypto?.code})
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={handleOpenModal}
        >
          Select Cryptocurrency
        </button>
      </div>
    );
  };

  return (
    <div className="p-4 shadow-md bg-slate-500" style={{ backgroundColor }}>
      {renderHeader()}
      <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-md">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="py-3 px-4 border-b">All Time High (USD)</th>
            <th className="py-3 px-4 border-b">Rate</th>
            <th className="py-3 px-4 border-b">Volume</th>
            <th className="py-3 px-4 border-b">Cap</th>
            <th className="py-3 px-4 border-b">Liquidity</th>
            <th className="py-3 px-4 border-b">Delta (Hour)</th>
            <th className="py-3 px-4 border-b">Delta (Day)</th>
            <th className="py-3 px-4 border-b">Timestamp</th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {data[code]?.map((entry) => (
            <tr key={entry._id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">${entry.allTimeHighUSD.toFixed(2)}</td>
              <td className="py-2 px-4">${entry.rate.toFixed(2)}</td>
              <td className="py-2 px-4">${formatNumber(entry.volume)}</td>
              <td className="py-2 px-4">${formatNumber(entry.cap)}</td>
              <td className="py-2 px-4">${formatNumber(entry.liquidity)}</td>
              <td className="py-2 px-4">
                {((entry.delta.hour - 1) * 100).toFixed(2)}%
              </td>
              <td className="py-2 px-4">
                {((entry.delta.day - 1) * 100).toFixed(2)}%
              </td>
              <td className="py-2 px-4">
                {moment(entry.timestamp).format("MM-DD-YYYY, hh:mm:ss A")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        cryptos={cryptos}
      />
    </div>
  );
};

export default Table;
