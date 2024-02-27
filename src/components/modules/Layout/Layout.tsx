import { GlobalStyles } from 'styles/globalStyled';
import { useContext } from 'react';
import { ThemeContext } from 'contexts/ThemeContext';
import { LayoutProps } from './@types';
import * as S from './LayoutStyled';
import { Header } from '..';

const Layout = ({ children }: LayoutProps) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <S.LayoutContainer dark={isDarkMode}>
      <GlobalStyles />
      <Header />
      <S.LayoutContent>{children}</S.LayoutContent>
    </S.LayoutContainer>
  );
};

export default Layout;
