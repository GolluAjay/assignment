import React from 'react';
import Table from '../../components/Table'; // Adjust the import path as necessary

import { fetchEntries, fetchCryptos } from '@/app/api/fetchCrypto';



const Page = async ({ params }: { params: { code: string } }) => {
  const entries = await fetchEntries(params.code);
  const cryptos = await fetchCryptos();

  return <Table initialEntries={entries.slice(0, 20)} cryptos={cryptos} code={params.code} color={entries?.[0].color} />;
};

export default Page;
