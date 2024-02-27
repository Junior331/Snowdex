import icons from 'assets/img/Icon';
import * as S from './SubHeaderStyled';
import { SubHeaderProps } from '../@types';

export const SubHeader = ({ dark }: SubHeaderProps) => {
  return (
    <S.SubHeaderContainer>
      <S.Logo>
        <S.Img src={icons.logo} alt="Logo SnowDEX" data-testid="icon_test" />
        <S.Title>SDEX/AVAX</S.Title>
      </S.Logo>
      <S.Content>
        <S.Info>
          <S.Title blue dark={dark} data-testid="title_test_token">
            Token Price
          </S.Title>
          <S.Text>$1.00</S.Text>
        </S.Info>
        <S.Info>
          <S.Title blue dark={dark} data-testid="title_test_change">
            24 Hour Change
          </S.Title>
          <S.Text green>+1.38%</S.Text>
        </S.Info>
        <S.Info>
          <S.Title blue dark={dark} data-testid="title_test_volume">
            24 Hour Volume
          </S.Title>
          <S.Text>$587,235.00</S.Text>
        </S.Info>
        <S.Info>
          <S.Title blue dark={dark} data-testid="title_test_market">
            Market Cap
          </S.Title>
          <S.Text>$40,000,000.00</S.Text>
        </S.Info>
      </S.Content>
    </S.SubHeaderContainer>
  );
};
