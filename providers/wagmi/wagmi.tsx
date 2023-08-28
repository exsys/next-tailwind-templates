"use client";
import React from 'react';
import Web3Provider from "@/providers/wagmi/web3";

const WagmiProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='h-full'>
            <Web3Provider>
                {children}
            </Web3Provider>
        </div>
    )
};

export default WagmiProvider;