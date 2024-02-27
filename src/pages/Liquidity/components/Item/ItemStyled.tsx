import { Props } from 'pages/Liquidity/@types';
import styled, { css } from 'styled-components';

const GenericContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ItemContainer = styled(GenericContainer)<Props>`
  gap: 20px;
  > div:first-child {
    gap: 20px;
  }
  ${({ isSecondary, dark }) =>
    isSecondary &&
    css`
      height: auto;
      padding: 14px 20px;
      border-radius: 15px;
      /* color: ${({ theme }) => theme.palette.color.light}; */
      background-color: ${({ theme }) => theme.palette.color.white?.medium};
      ${dark &&
      css`
        background-color: ${({ theme }) => theme.palette.color.blue?.medium};
      `};
    `};
`;
export const Container = styled(GenericContainer)<Props>`
  width: auto;
  align-items: flex-start;
  flex-direction: ${({ isColumn }) => (isColumn ? 'column' : 'row')};

  ${({ larger }) =>
    larger &&
    css`
      width: 100%;
      justify-content: space-between;
    `};
`;
export const Title = styled.h2<Props>`
  width: 100%;
  line-height: 30px;
  letter-spacing: 1px;
  text-align: ${({ isEnd }) => (isEnd ? 'end' : 'start')};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  font-size: ${({ theme }) => theme.typography.fontSizeRegular}rem;
`;
export const Text = styled.p<Props>`
  width: auto;
  font-weight: ${({ theme }) => theme.typography.fontWeightLight + 100};
  font-size: ${({ theme }) => theme.typography.fontSizeRegular - 0.2}rem;

  ${({ dark }) =>
    dark &&
    css`
      color: #9c99a5;
    `};
`;

export const Img = styled.img<Props>`
  width: ${({ size }) => size || '54px'};
`;
