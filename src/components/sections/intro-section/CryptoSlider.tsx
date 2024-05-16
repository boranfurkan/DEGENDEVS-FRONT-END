import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CryptoSlider = () => {
  return (
    <div className="flex flex-row gap-3 flex-wrap max-sm:items-center max-sm:justify-center">
      <motion.img
        className="fade-in"
        src="/icons/sol.png"
        width={50}
        height={50}
        alt="Bitcoin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0, duration: 3 }}
      />
      <motion.img
        className="fade-in"
        src="/icons/ethereum.svg"
        width={50}
        height={50}
        alt="Ethereum"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 3 }}
      />
      <motion.img
        className="fade-in"
        src="/icons/bitcoin.svg"
        width={50}
        height={50}
        alt="Bitcoin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0, duration: 3 }}
      />
      <motion.img
        className="fade-in"
        src="/icons/usd.svg"
        width={50}
        height={50}
        alt="Usd"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 3 }}
      />
      <motion.img
        className="fade-in"
        src="/icons/cosmos.svg"
        width={50}
        height={50}
        alt="Cosmos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 3 }}
      />
      <motion.img
        className="fade-in"
        src="/icons/tether.svg"
        width={50}
        height={50}
        alt="Tether"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 3 }}
      />
      <motion.img
        className="fade-in"
        src="/icons/tron.svg"
        width={50}
        height={50}
        alt="Tron"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 3 }}
      />
      <motion.img
        className="fade-in"
        src="/icons/binance.svg"
        width={50}
        height={50}
        alt="Binance"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 3 }}
      />
      <motion.img
        className="fade-in"
        src="/icons/ethereum-classic.svg"
        width={50}
        height={50}
        alt="Ethereum Classic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 3 }}
      />
      <motion.img
        className="fade-in"
        src="/icons/dogecoin.svg"
        width={50}
        height={50}
        alt="Dogecoin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 3 }}
      />
      <motion.img
        className="fade-in"
        src="/icons/xrp.svg"
        width={50}
        height={50}
        alt="Xrp"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 3 }}
      />
      <motion.img
        className="fade-in"
        src="/icons/bitcoin.svg"
        width={50}
        height={50}
        alt="Bitcoin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 3 }}
      />
      <motion.img
        className="fade-in"
        src="/icons/ethereum.svg"
        width={50}
        height={50}
        alt="Ethereum"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 3 }}
      />
      <motion.img
        className="fade-in"
        src="/icons/usd.svg"
        width={50}
        height={50}
        alt="Usd"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 3 }}
      />
      <motion.img
        className="fade-in"
        src="/icons/cosmos.svg"
        width={50}
        height={50}
        alt="Cosmos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 3 }}
      />
    </div>
  );
};

export default CryptoSlider;
