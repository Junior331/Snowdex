import { Button } from 'components/elements';
import icons from 'assets/img/Icon';
import { Props } from './@types';
import * as S from './CardTradeStyled';

export const CardTrade = ({
  icon,
  name,
  dark,
  tagName,
  marketCap,
  hourVolume,
  hourChange,
  tokenPrice,
  isSecondary
}: Props) => {
  return (
    <S.CardTradeContainer dark={dark}>
      <S.Logo>
        <S.Img src={icon} alt={`Icon ${name}`} />
        <div>
          <S.Title>{name}</S.Title>
          {tagName && (
            <S.Text blue dark={dark}>
              {tagName}
            </S.Text>
          )}
        </div>
      </S.Logo>
      <S.Content>
        <S.Info>
          <S.Title blue dark={dark} data-testid="title_test_token">
            Token Price
          </S.Title>
          <S.Text>{tokenPrice}</S.Text>
        </S.Info>
        <S.Info>
          <S.Title blue dark={dark} data-testid="title_test_change">
            24 Hour Change
          </S.Title>
          <S.Text green>{hourChange}</S.Text>
        </S.Info>
        <S.Info>
          <S.Title blue dark={dark} data-testid="title_test_volume">
            24 Hour Volume
          </S.Title>
          <S.Text>{hourVolume}</S.Text>
        </S.Info>
        <S.Info>
          <S.Title blue dark={dark} data-testid="title_test_market">
            Market Cap
          </S.Title>
          <S.Text>{marketCap}</S.Text>
        </S.Info>
      </S.Content>
      {isSecondary ? (
        <S.ContainerButtons>
          <S.Button dark={dark}>
            <S.Img size="22px" src={icons.fire} alt="Icon fire" />
          </S.Button>
          <S.Button dark={dark}>
            <S.Text>Website</S.Text>
          </S.Button>
          <Button gradient size="large">
            Trade
          </Button>
        </S.ContainerButtons>
      ) : (
        <>
          <S.Img src={icons.fire} alt="Icon fire" />
          <Button gradient size="small">
            Trade
          </Button>
        </>
      )}
    </S.CardTradeContainer>
  );
};
