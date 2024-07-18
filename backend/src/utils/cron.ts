import cron from 'node-cron';
import { fetchAndStoreCryptoData } from '../services/cryptoService';

// Schedule tasks to be run on the server
const startCronJobs = () => {
  // Run the task every 5 seconds
  cron.schedule('*/5 * * * * *', async () => {
    try {
      console.log('Fetching and storing crypto data...');
      await fetchAndStoreCryptoData();
      console.log(new Date().toUTCString(), 'Crypto data stored successfully.');
    } catch (error) {
      console.error('Error fetching and storing crypto data:', error);
    }
  });
};

export default startCronJobs;
