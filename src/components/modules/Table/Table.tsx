import { Props } from './@types';
import * as S from './TableStyled';

const Table = ({
  Title,
  listTh,
  isGray,
  isBlue,
  isDark,
  striped,
  children,
  isPadding
}: Props) => {
  return (
    <S.TableContainer>
      <S.Title isPadding={isPadding}>{Title}</S.Title>
      <S.Container isPadding={isPadding}>
        {listTh?.map((item) => {
          return (
            <S.Title blue={isBlue} gray={isGray} width="16.5%">
              {item}
            </S.Title>
          );
        })}
      </S.Container>
      <S.List striped={striped} isDark={isDark}>
        {children}
      </S.List>
    </S.TableContainer>
  );
};

export default Table;
