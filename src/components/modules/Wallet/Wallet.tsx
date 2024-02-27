/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeContext } from 'contexts/ThemeContext';
import { useContext, useEffect, useState } from 'react';
import { getShortHex, injected, logOut } from 'utils/connectors';
import { ShowWalletContext } from 'contexts/ShowWalletContext';
import icons from 'assets/img/Icon';
import { Button } from 'components/elements';
import { useWeb3React } from '@web3-react/core';
import { useMobile } from 'hooks/useMobile';
import { ethers } from 'ethers';
import * as S from './WalletStyled';

const Wallet = () => {
  const [isMobile] = useMobile();
  const [IsConnected] = useState(true);
  const [myBalance, setMyBalance] = useState('');
  const { isDarkMode } = useContext(ThemeContext);
  const [walletAddres, setWalletAddres] = useState('');
  const isWalletConect = localStorage.getItem('isConectWallet');
  const { activate, library, deactivate } = useWeb3React();
  const { isOpen, toggleShowWallet } = useContext(ShowWalletContext);

  const disconnectWallet = async () => {
    await logOut(deactivate);
    toggleShowWallet(false);
  };

  const getBalance = async () => {
    injected.activate().then(async (value: any) => {
      const response = await library.getBalance(value.account);
      const balanceFormat = response.toString();
      setMyBalance(balanceFormat.substring(0, 2));
    });
  };

  useEffect(() => {
    if (isWalletConect) {
      getBalance();
      activate(injected);
    }
    if (walletAddres === '' && isWalletConect) {
      injected.activate().then(async (value: any) => {
        setWalletAddres(value.account);
      });
    }
  }, []);
  return (
    <S.WalletContainer
      isOpen={isOpen}
      dark={isDarkMode}
      onClick={() => toggleShowWallet(false)}
    >
      <S.Content
        isOpen={isOpen}
        dark={isDarkMode}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <S.Title bold>
            {walletAddres?.substring(0, 4)}****{walletAddres?.substring(38)}
          </S.Title>
          <S.Status dark={isDarkMode}>
            {IsConnected ? 'Connected' : 'Not connected'}
          </S.Status>
          <S.Title>Total Balance</S.Title>
          <S.Token>
            <div>
              <S.Icon src={icons.logo_avax} alt="logo avax" />
              <S.Title>AVAX</S.Title>
            </div>
            <S.Text>{myBalance}</S.Text>
          </S.Token>
          <S.Token>
            <div>
              <S.Icon src={icons.logo} alt="logo SDEX" />
              <S.Title>SDEX</S.Title>
            </div>
            <S.Text>9,000.00</S.Text>
          </S.Token>
        </div>
        {!isMobile && (
          <Button gradient size="large" onClick={() => disconnectWallet()}>
            Disconnect Wallet
          </Button>
        )}
      </S.Content>
    </S.WalletContainer>
  );
};

export default Wallet;
