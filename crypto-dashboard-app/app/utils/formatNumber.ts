// utils/formatNumber.ts
export const formatNumber = (num: number): string => {
    if (num >= 1e9) {
      return (num / 1e9).toFixed(2) + ' B'; // Billions
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(2) + ' M'; // Millions
    } else {
      return num.toLocaleString(); // Less than a million
    }
  };
  