import React from 'react';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { Chain } from '@wagmi/core';
import { mainnet } from '@wagmi/chains';

const projectId: string = "432edbd9307fd5a59c13815fff6f158c"; // NOTE: change to personal WC project id
const chains = [mainnet];
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);

const config = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
});

const ethClient: EthereumClient = new EthereumClient(config, chains);

const Web3Provider = ({ children }: { children: React.ReactNode }) => {
    return <>
        <WagmiConfig config={config}>
            {children}
        </WagmiConfig>

        <Web3Modal projectId={projectId} ethereumClient={ethClient} themeMode='dark' />
    </>
};

export default Web3Provider;