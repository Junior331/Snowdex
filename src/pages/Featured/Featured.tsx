/* eslint-disable react/no-array-index-key */
import Card from 'components/modules/Card/Card';
import { useContext } from 'react';
import { ThemeContext } from 'contexts/ThemeContext';
import icons from 'assets/img/Icon';
import { CardTrade } from 'components/modules';
import * as S from './FeaturedStyled';

export const Featured = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <S.FeaturedContainer>
      <S.Container>
        <Card dark={isDarkMode} width="90%" height="auto" isColumn>
          <CardTrade
            isSecondary
            tagName="SDEX"
            name="SnowDEX"
            dark={isDarkMode}
            icon={icons.logo}
            tokenPrice="$1.00"
            hourChange="+1.38%"
            hourVolume="$587,235.00"
            marketCap="$40,000,000.00"
          />
        </Card>
        <Card dark={isDarkMode} width="90%" height="auto" isColumn>
          <CardTrade
            isSecondary
            tagName="SDEX"
            name="SnowDEX"
            dark={isDarkMode}
            icon={icons.logo}
            tokenPrice="$1.00"
            hourChange="+1.38%"
            hourVolume="$587,235.00"
            marketCap="$40,000,000.00"
          />
        </Card>
      </S.Container>
    </S.FeaturedContainer>
  );
};
