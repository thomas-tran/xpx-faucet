import test from 'ava';

import { getXPX } from './faucet';

test('getXPX', async (t) => {
  const address = 'VC2LUD4BBPA2TS7RF3HPIIYPKEZGJPQIXHIPDJ53';

  const result = await getXPX(address);

  t.not(result, null);
  console.log(result);

});
