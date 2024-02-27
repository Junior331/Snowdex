import icons from 'assets/img/Icon';
import { Props } from './@types';
import * as S from './SwitchStyled';

const Switch = ({ dark, isChecked, handleToggle }: Props) => {
  return (
    <S.Container
      dark={dark}
      isChecked={isChecked}
      onClick={handleToggle}
      data-testid="switch_test"
    >
      <S.Icon
        alt="Icon"
        dark={dark}
        isChecked={isChecked}
        data-testid="icon_test"
        src={dark ? icons.moon : icons.sun}
      />
    </S.Container>
  );
};

export default Switch;
