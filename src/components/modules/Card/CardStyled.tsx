import styled, { css } from 'styled-components';
import media from 'styles/breakpoints';
import { Props } from './@types';

export const CardContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  border-radius: 15px;
  justify-content: space-between;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  flex-direction: ${({ isColumn }) => (isColumn ? 'column' : 'row')};
  padding: ${({ noPadding }) => (noPadding ? '18px 0px 0px' : '18px 22px')};
  background-color: ${({ theme }) => theme.palette.color.white?.light};

  ${({ dark }) =>
    dark &&
    css`
      background-color: ${({ theme }) => theme.palette.background.medium};
    `};
  ${({ isActive }) => media.lessThan('large')`
      display: none;
    ${
      isActive &&
      css`
        display: flex;
      `
    };
  `}
`;
