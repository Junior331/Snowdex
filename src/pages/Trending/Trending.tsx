/* eslint-disable react/no-array-index-key */
import Card from 'components/modules/Card/Card';
import { useContext } from 'react';
import { ThemeContext } from 'contexts/ThemeContext';
import icons from 'assets/img/Icon';
import { CardTrade } from 'components/modules';
import * as S from './TrendingStyled';

export const Trending = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <S.TrendingContainer>
      <Card dark={isDarkMode} width="90%" height="auto" isColumn>
        <CardTrade
          icon={icons.logo}
          name="SDEX/AVAX"
          dark={isDarkMode}
          marketCap="$40,000,000.00"
          hourVolume="$587,235.00"
          hourChange="+1.38%"
          tokenPrice="$1.00"
        />
      </Card>
      <Card dark={isDarkMode} width="90%" height="auto" isColumn>
        <CardTrade
          icon={icons.logo}
          name="SDEX/AVAX"
          dark={isDarkMode}
          marketCap="$40,000,000.00"
          hourVolume="$587,235.00"
          hourChange="+1.38%"
          tokenPrice="$1.00"
        />
      </Card>
    </S.TrendingContainer>
  );
};
