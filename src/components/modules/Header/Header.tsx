/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from 'react';
import { Button, Input, Switch } from 'components/elements';
import icons from 'assets/img/Icon';
import { ThemeContext } from 'contexts/ThemeContext';
import { Links } from 'services/mocks/Links';
import { useMobile } from 'hooks/useMobile';
import { ShowWalletContext } from 'contexts/ShowWalletContext';
import { useNavigate } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import { injected, logOut } from 'utils/connectors';
import { Navigation } from './components';
import * as S from './HeaderStyled';
import { Wallet } from '..';

const Header = () => {
  const [isMobile] = useMobile();
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const { deactivate } = useWeb3React();
  const [walletAddres, setWalletAddres] = useState('');
  const [isShowInput, setIsShowInput] = useState(false);
  const isWalletConect = localStorage.getItem('isConectWallet');
  const { isOpen, toggleShowWallet } = useContext(ShowWalletContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleNavigate = (router: string) => {
    navigate(router);
  };

  const connectedWallet = async () => {
    injected.activate().then(async (value: any) => {
      toggleShowWallet(true);
      setWalletAddres(value.account);
      localStorage.setItem('isConectWallet', 'true');
    });
  };

  const disconnectWallet = async () => {
    setWalletAddres('');
    toggleShowWallet(false);
    await logOut(deactivate);
    localStorage.setItem('isConectWallet', 'false');
  };

  useEffect(() => {
    if (walletAddres === '' && isWalletConect) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      injected.activate().then(async (value: any) => {
        setWalletAddres(value.account);
        toggleShowWallet(true);
      });
    }
  }, []);
  return (
    <S.HeaderContainer>
      <S.Logo onClick={() => handleNavigate('/')}>
        Snow<S.Span>DEX</S.Span>
      </S.Logo>
      <S.SubContainer>
        {isMobile ? (
          <>
            <S.IconSearch
              alt="Icon search"
              dark={isDarkMode}
              src={icons.search}
              onClick={() => setIsShowInput(!isShowInput)}
            />
            {isShowInput && (
              <S.ContainerSearch dark={isDarkMode} isOpen={isShowInput}>
                <div>
                  <Input
                    search
                    dark={isDarkMode}
                    placeholder="Search"
                    iconUrl={icons.search}
                    size={isMobile ? 'large' : 'small'}
                  />
                  <Button
                    size="small"
                    onClick={() => setIsShowInput(!isShowInput)}
                  >
                    Cancel
                  </Button>
                </div>
                <S.Shadow />
              </S.ContainerSearch>
            )}
          </>
        ) : (
          <Input
            search
            dark={isDarkMode}
            placeholder="Search"
            iconUrl={icons.search}
            size={isMobile ? 'large' : 'small'}
          />
        )}

        {isMobile && (
          <S.Menu
            isOpen={isShow}
            dark={isDarkMode}
            onClick={() => setIsShow(!isShow)}
          >
            <S.Line dark={isDarkMode} />
            <S.Line dark={isDarkMode} />
            <S.Line dark={isDarkMode} />
          </S.Menu>
        )}
      </S.SubContainer>

      {isMobile ? (
        <S.Mobile
          isOpen={isShow}
          dark={isDarkMode}
          onClick={() => setIsShow(!isShow)}
        >
          <S.SubContent onClick={(e) => e.stopPropagation()}>
            <S.Header dark={isDarkMode}>
              <S.Title>Menu</S.Title>
              <svg
                onClick={() => setIsShow(!isShow)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="#000"
              >
                <path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z" />
              </svg>
            </S.Header>
            <Navigation
              Links={Links}
              isDark={isDarkMode}
              handlePushRouter={() => setIsShow(!isShow)}
            />
            {isOpen && walletAddres.includes('0x') && (
              <S.ContainerWallet>
                <div>
                  <S.Title>Wallet</S.Title>
                  <S.ContainerTheme>
                    <S.Text dark={isDarkMode}>
                      {isDarkMode ? 'Dark' : 'Light'}
                    </S.Text>
                    <Switch
                      dark={isDarkMode}
                      isChecked={isDarkMode}
                      handleToggle={() => toggleTheme(!isDarkMode)}
                    />
                  </S.ContainerTheme>
                </div>
                <S.Content>
                  <Wallet />
                </S.Content>
              </S.ContainerWallet>
            )}
            <S.Footer>
              <Button
                gradient
                size={isMobile ? 'large' : 'small'}
                onClick={() =>
                  walletAddres.includes('0x')
                    ? disconnectWallet()
                    : connectedWallet()
                }
              >
                {walletAddres.includes('0x')
                  ? 'Disconnect Wallet'
                  : 'Connect Wallet'}
              </Button>
              {walletAddres === '' && (
                <S.ContainerTheme>
                  <S.Text dark={isDarkMode}>
                    {isDarkMode ? 'Dark' : 'Light'}
                  </S.Text>
                  <Switch
                    dark={isDarkMode}
                    isChecked={isDarkMode}
                    handleToggle={() => toggleTheme(!isDarkMode)}
                  />
                </S.ContainerTheme>
              )}
            </S.Footer>
          </S.SubContent>
        </S.Mobile>
      ) : (
        <S.Container dark={isDarkMode}>
          <Navigation isDark={isDarkMode} Links={Links} />
          <S.SubContainer>
            <S.ContainerTheme>
              <S.Text dark={isDarkMode}>{isDarkMode ? 'Dark' : 'Light'}</S.Text>
              <Switch
                dark={isDarkMode}
                isChecked={isDarkMode}
                handleToggle={() => toggleTheme(!isDarkMode)}
              />
            </S.ContainerTheme>

            <Button
              gradient
              size="small"
              onClick={() =>
                walletAddres !== '' ? toggleShowWallet(true) : connectedWallet()
              }
            >
              {walletAddres !== '' ? 'View Wallet' : 'Connect Wallet'}
            </Button>
          </S.SubContainer>
        </S.Container>
      )}
      {!isMobile && <Wallet />}
    </S.HeaderContainer>
  );
};
export default Header;
