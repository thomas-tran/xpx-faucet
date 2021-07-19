import fetch from 'cross-fetch';

export const getXPX = async (address: string) => {
  const url = `https://bctestnetfaucet.xpxsirius.io/api/faucet/GetXpx/${address}`;

  const result = await fetch(url);

  return await result.json();
};
