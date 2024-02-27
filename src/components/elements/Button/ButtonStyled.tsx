import styled, { css } from 'styled-components';
import { StyledButtonProps } from './@types';

export const Button = styled.button<StyledButtonProps>`
  border: none;
  height: 48px;
  display: flex;
  cursor: pointer;
  padding: 0 12px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  transition: 0.2s color ease;
  color: ${({ theme }) => theme.palette.color.light};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  font-size: ${({ theme }) => theme.typography.fontSizeLight}rem;
  background-color: ${({ theme }) => theme.palette.color.blue?.default};
  ${({ secondary, theme }) =>
    secondary &&
    css`
      background-color: ${theme.palette.color.blue?.dark};
    `};
  ${({ noActive }) =>
    noActive &&
    css`
      cursor: no-drop;
    `};
  ${({ gradient }) =>
    gradient &&
    css`
      background-image: linear-gradient(90deg, #5935ff 0%, #5c86ff 100%);
    `};
  width: ${({ size }) => {
    if (size === 'large') {
      return '100%';
    }
    if (size === 'medium') {
      return '60%';
    }
    if (size === 'small') {
      return '15%';
    }
    return '15%';
  }};
`;
