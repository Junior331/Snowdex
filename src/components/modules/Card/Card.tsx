import { Props } from './@types';
import * as S from './CardStyled';

const Card = ({
  dark,
  width,
  height,
  isActive = true,
  noPadding,
  isColumn,
  children
}: Props) => {
  return (
    <S.CardContainer
      dark={dark}
      width={width}
      height={height}
      isActive={isActive}
      isColumn={isColumn}
      noPadding={noPadding}
      data-testid="card_test"
    >
      {children}
    </S.CardContainer>
  );
};

export default Card;
