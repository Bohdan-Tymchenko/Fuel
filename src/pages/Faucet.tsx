import React, { useEffect } from "react";
import {
  Wallet,
  // Provider
} from "fuels";

import FaucetTable from '../components/faucetTable/faucetTable';

function Faucet(): JSX.Element {
  const PRIVATE_KEY = '0x9cc87a6f09c02b555aee77477cb5ba629232e3b20bbcf14aa0c4d0d15712d938';

  useEffect(() => {
    const wallet =  Wallet.fromPrivateKey(PRIVATE_KEY);
    const address = wallet.address;
    console.log('address ', address);

    // const provider = Provider.create('https://faucet-beta-5.fuel.network/');
    // console.log('provider ', provider);
  }, []);
  
  return (
    <div>
      <h1 className="page-title">Faucet for Fuel Network</h1>
      <FaucetTable />
    </div>
  );
}

export default Faucet;
