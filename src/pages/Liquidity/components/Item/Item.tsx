import { ItemProps } from 'pages/Liquidity/@types';
import * as S from './ItemStyled';

export const Item = ({
  dark,
  icon,
  name,
  price,
  amount,
  description,
  isSecondary = false
}: ItemProps) => {
  return (
    <S.ItemContainer isSecondary={isSecondary} dark={dark}>
      {icon !== '' && <S.Img src={icon} alt={`Icon ${name}`} />}
      <S.Container larger>
        <S.Container isColumn>
          <S.Title>{name}</S.Title>
          <S.Text dark={dark}>{description}</S.Text>
        </S.Container>
        <S.Container isColumn>
          <S.Title isEnd>{amount}</S.Title>
          <S.Text dark={dark}>{price}</S.Text>
        </S.Container>
      </S.Container>
    </S.ItemContainer>
  );
};
