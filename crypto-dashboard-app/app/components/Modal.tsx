import React from "react";
import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  cryptos: { code: string; name: string }[];
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  cryptos,
}) => {
  if (!isOpen) return null; // Render nothing if not open

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Select Cryptocurrency</h3>
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700 font-bold"
            onClick={onClose}
          >
            X
          </button>
        </div>

        <ul className="space-y-2">
          {cryptos.map((crypto) => (
            <li key={crypto.code} className="border-b last:border-b-0">
              <Link key={crypto.code} href={`/dashboard/${crypto.code}`} onClick={onClose}>
                <button
                  type="button"
                  className="w-full text-left py-2 px-4 hover:bg-gray-100"
                >
                  {crypto.name} ({crypto.code})
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
