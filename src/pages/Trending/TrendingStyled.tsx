import styled, { css } from 'styled-components';
import { Props } from './@types';

const GenericContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 20px 25px 35px;
  justify-content: flex-start;
`;
export const TrendingContainer = styled(GenericContainer)`
  gap: 20px;
  flex-direction: column;
  > div:first-child {
    gap: 20px;
    > button {
      height: 68px;
      font-weight: bold;
      font-size: ${({ theme }) => theme.typography.fontSize + 0.2}rem;
    }
  }
`;
export const Container = styled(GenericContainer)<Props>`
  gap: 5px;
  padding: 0;
  height: 100%;
  overflow-y: auto;
  max-height: 200px;
  flex-direction: column;
  justify-content: flex-start;
  flex: ${({ flex }) => flex};
  width: ${({ width }) => width};

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #a8a8a8;
  }
`;
export const Title = styled.h2<Props>`
  width: 100%;
  letter-spacing: 1px;
  font-size: ${({ size, theme }) =>
    size || theme.typography.fontSizeRegular}rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  ${({ small, theme }) =>
    small &&
    css`
      font-weight: ${theme.typography.fontWeightLight};
    `}
`;

export const Text = styled.p<Props>`
  font-size: ${({ theme }) => theme.typography.fontSize - 0.2}rem;
  ${({ dark }) =>
    dark &&
    css`
      color: #9c99a5;
    `};
  ${({ isSecondary }) =>
    isSecondary &&
    css`
      max-width: 380px;
      text-align: center;
      font-weight: ${({ theme }) => theme.typography.fontWeightRegular + 100};
    `};
`;
