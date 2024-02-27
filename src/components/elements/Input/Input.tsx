import { Props } from './@types';
import * as S from './InputStyled';

const Input = ({
  alt,
  dark,
  size,
  iconUrl,
  description,
  search = false,
  disabled = false,
  isSecondary = false,
  placeholder = '',
  reference = undefined,
  ...rest
}: Props) => {
  return (
    <S.ContainerSearch
      size={size}
      dark={dark}
      search={search}
      isSecondary={isSecondary}
      data-testid="input_test"
      className="SearchComponent"
    >
      {iconUrl && <S.Icon size={size} dark={dark} src={iconUrl} alt={alt} />}
      <S.Input
        dark={dark}
        ref={reference}
        disabled={disabled}
        placeholder={placeholder}
        {...rest}
      />
      {description && <S.Text>{description}</S.Text>}
    </S.ContainerSearch>
  );
};

export default Input;
