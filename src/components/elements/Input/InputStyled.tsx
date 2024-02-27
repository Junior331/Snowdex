import styled, { css } from 'styled-components';
import { StyledInputProps } from './@types';

export const ContainerSearch = styled.div<StyledInputProps>`
  gap: 8px;
  height: 100%;
  display: flex;
  font-size: 15px;
  padding: 0 12px;
  min-width: 240px;
  min-height: 48px;
  border-radius: 4px;
  border-radius: 8px;
  align-items: center;
  box-sizing: border-box;
  text-overflow: ellipsis;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.color.white?.light};
  ${({ search }) =>
    search === false &&
    css`
      width: 100%;
    `};

  ${({ dark }) =>
    dark &&
    css`
      background-color: ${({ theme }) => theme.palette.color.blue?.medium};
    `};

  width: ${({ size }) => {
    if (size === 'large') {
      return '100%';
    }
    if (size === 'medium') {
      return '50%';
    }
    if (size === 'small') {
      return '30%';
    }
    return 'max-content';
  }};

  ${({ isSecondary, dark }) =>
    isSecondary &&
    css`
      background-color: 2px solid
        ${({ theme }) => theme.palette.color.white?.regular};
      background-color: ${({ theme }) => theme.palette.color.white?.medium};
      ${dark &&
      css`
        background-color: ${({ theme }) => theme.palette.color.blue?.medium};
      `};
    `};
`;
export const Input = styled.input<{ dark: boolean }>`
  border: 0;
  width: 100%;
  height: 100%;
  font-weight: 500;
  background-color: transparent;
  font-size: ${({ theme }) => theme.typography.fontSize}rem;
  ::placeholder {
    color: ${({ theme }) => theme.palette.color.black};
  }
  :focus {
    outline: none;
  }
  :-webkit-autofill {
    -webkit-background-clip: text !important;
  }

  :-webkit-outer-spin-button,
  :-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${({ dark }) =>
    dark &&
    css`
      color: ${({ theme }) => theme.palette.color.light};
      ::placeholder {
        color: ${({ theme }) => theme.palette.color.light};
      }
    `};
`;
export const Icon = styled.img<StyledInputProps>`
  width: 15px;
  filter: invert(1);
  ${({ dark }) =>
    dark &&
    css`
      filter: invert(0);
    `};
`;
export const Text = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize}rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
`;
