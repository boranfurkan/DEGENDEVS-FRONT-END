import React from "react";
import Image from "next/image";

const CryptoSlider = () => {
  return (
    <div className="flex flex-row gap-3">
      <Image src="/icons/bitcoin.svg" width={50} height={50} alt="Bitcoin" />
      <Image src="/icons/ethereum.svg" width={50} height={50} alt="Ethereum" />
      <Image src="/icons/usd.svg" width={50} height={50} alt="Usd" />
      <Image src="/icons/cosmos.svg" width={50} height={50} alt="Cosmos" />
      <Image src="/icons/tether.svg" width={50} height={50} alt="Tether" />
      <Image src="/icons/tron.svg" width={50} height={50} alt="Tron" />
      <Image src="/icons/binance.svg" width={50} height={50} alt="Binance" />

      <Image
        src="/icons/ethereum-classic.svg"
        width={50}
        height={50}
        alt="Ethereum Classic"
      />
      <Image src="/icons/dogecoin.svg" width={50} height={50} alt="Dogecoin" />
      <Image src="/icons/xrp.svg" width={50} height={50} alt="Xrp" />
      <Image src="/icons/bitcoin.svg" width={50} height={50} alt="Bitcoin" />
      <Image src="/icons/ethereum.svg" width={50} height={50} alt="Ethereum" />
      <Image src="/icons/usd.svg" width={50} height={50} alt="Usd" />
      <Image src="/icons/cosmos.svg" width={50} height={50} alt="Cosmos" />
    </div>
  );
};

export default CryptoSlider;
