# xpx-faucet

Get XPX from testnet

# How to use

```typescript
import { getXPX } from 'xpx-faucet';

const address = 'VC2LUD4BBPA2TS7RF3HPIIYPKEZGJPQIXHIPDJ53';

const test = () => {
  const result = getXPX(address).then((result) => {
    console.log(result);
  });
};

test();
```
