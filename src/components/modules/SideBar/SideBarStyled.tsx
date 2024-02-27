import styled, { css } from 'styled-components';
import { StyleProps } from './@types';

export const SideBarContainer = styled.div<StyleProps>`
  left: 0;
  gap: 8px;
  bottom: 0;
  width: 100%;
  height: auto;
  display: flex;
  position: fixed;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 4px #0000004f;
  background-color: ${({ theme }) => theme.palette.color.light};
  ${({ dark }) =>
    dark &&
    css`
      background-color: ${({ theme }) => theme.palette.background.medium};
    `};
`;
export const Item = styled.div<StyleProps>`
  width: auto;
  height: 100%;
  display: flex;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  svg {
    width: 25px;
    ${({ dark }) =>
      dark &&
      css`
        filter: invert(1);
      `};
  }

  ${({ isActive, dark }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.palette.color.white?.light};
      ${dark &&
      css`
        background-color: ${({ theme }) => theme.palette.color.blue?.medium};
      `};
    `};
`;
export const Title = styled.h2<StyleProps>`
  font-size: ${({ theme }) => theme.typography.fontSizeLight}rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
`;
