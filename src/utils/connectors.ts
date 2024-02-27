/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ethers } from 'ethers';
import { InjectedConnector } from '@web3-react/injected-connector';
import { AbstractConnector } from '@web3-react/abstract-connector';

const injected = new InjectedConnector({ supportedChainIds: [43114, 43113] });

const Connect = async (
  activate: (
    connector: AbstractConnector,
    onError?: ((error: Error) => void) | undefined,
    throwErrors?: boolean | undefined
  ) => Promise<void>
) => {
  activate(injected);
  return activate;
};

const logOut = async (deactivate: () => void) => {
  deactivate();
  return deactivate;
};

const getIsTestnet = async () => {
  // let isTestnet = false;
  // await injected.activate().then(async (value: any) => {
  //   const ethersProv = new ethers.providers.Web3Provider(value.provider);
  //   await (isTestnet = (await ethersProv._networkPromise).chainId === 43113);
  // });
  // return isTestnet;
};

const getShortHex = (hex: string) => {
  let rString = '';
  if (hex !== undefined) {
    rString = `${hex.substring(0, 5)}*****${hex.substring(hex.length - 4)}`;
  }
  return rString;
};

export { logOut, Connect, injected, getShortHex, getIsTestnet };
