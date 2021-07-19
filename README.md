# xpx-faucet

Get XPX from testnet

## Installation

```npm
npm install xpx-faucet --save
```

## How to use

```typescript
import { NetworkType, Account } from 'tsjs-xpx-chain-sdk';
import { getXPX } from 'xpx-faucet';


const account = Account.generateNewAccount(NetworkType.TEST_NET);
const test = () => {
  const result = getXPX(account.address.plain()).then((result) => {
    console.log(result);
  });
};

test();
```
