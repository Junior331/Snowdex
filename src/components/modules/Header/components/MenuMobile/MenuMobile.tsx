import { useContext } from 'react';
import { Button, Switch } from 'components/elements';
import { ThemeContext } from 'contexts/ThemeContext';
import { Links } from 'services/mocks/Links';
import { useWeb3React } from '@web3-react/core';
import * as S from './MenuMobileStyled';
import { Navigation } from '..';

const MenuMobile = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { account } = useWeb3React();

  return (
    <S.Container dark={isDarkMode}>
      <Navigation isDark={isDarkMode} Links={Links} />
      <S.ContainerTheme>
        <S.Text dark={isDarkMode}>{isDarkMode ? 'Dark' : 'Light'}</S.Text>
        <Switch
          dark={isDarkMode}
          isChecked={isDarkMode}
          handleToggle={() => toggleTheme(!isDarkMode)}
        />
      </S.ContainerTheme>
      <Button gradient size="small">
        {account ? 'View Wallet' : 'Connect Wallet'}
      </Button>
    </S.Container>
  );
};

export default MenuMobile;
