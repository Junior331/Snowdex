import styled, { css } from 'styled-components';
import media from 'styles/breakpoints';
import { HomeProps } from './@types';

const GenericContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px 25px 35px;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const HomeContainer = styled(GenericContainer)`
  gap: 21px;
  flex-wrap: wrap;
  overflow-y: auto;

  > div:last-child {
    flex: 1 1 auto;
  }
  ${media.lessThan('large')`
    max-height: 100vh;
    > div:first-child > div:first-child {
      height: auto;
    }
    > div:nth-child(3n) {
      height: auto;
      flex: 1 1 auto;
    }
  `}
`;
export const Container = styled(GenericContainer)<HomeProps>`
  gap: 24px;
  padding: 0;
  height: 100%;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  width: ${({ width }) => width};
  ${({ isActive }) => media.lessThan('large')`
    height: auto;
    display: none;
    ${
      isActive &&
      css`
        display: flex;
      `
    };
  `}
`;
export const Title = styled.h2`
  width: 100%;
  text-align: center;
`;

export const Img = styled.img<HomeProps>`
  width: ${({ size }) => size || '30%'};
`;
export const Logo = styled.div<HomeProps>`
  gap: 5px;
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.typography.fontSize - 0.2}rem;
`;
export const ContainerInfo = styled.div``;
export const Info = styled.div``;
export const CustonContent = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  > div:first-child {
    height: 48%;
  }
  > div:nth-child(2n) {
    height: 20px;
  }
  > div:last-child {
    height: 42%;
  }
  > div:first-child {
    gap: 5px;
    > div:last-child {
      border-radius: 0;
    }
  }
  > div:last-child {
    gap: 0;
  }
  ${media.lessThan('small')`
    > div:first-child {
      height: 46%;
    }
  `}
  ${media.lessThan('large')`
    > div:first-child, div:last-child {
      max-height: 245px;
    }
  `}
`;
export const Tr = styled.div<HomeProps>`
  width: 100%;
  display: flex;
  padding: 5px 0px;
  align-items: center;
  justify-content: space-between;

  ${({ isPadding }) =>
    isPadding &&
    css`
      padding: 5px 22px;
    `};
`;
export const Td = styled.div<HomeProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: ${({ width }) => width};
`;
export const Status = styled.div<HomeProps>`
  width: 100%;
  display: flex;
  margin: 10px 0px;
  padding-left: 20px;
  align-items: center;
  justify-content: flex-start;
  h2 {
    width: auto;
  }
`;
export const Icon = styled.img<HomeProps>`
  width: 14px;
  height: 12px;
  margin: 0 5px 0 8px;
`;
export const Type = styled.p<HomeProps>`
  width: 100%;
  height: 25px;
  display: flex;
  max-width: 60px;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  color: ${({ theme }) => theme.palette.color.light};
  font-size: ${({ theme }) => theme.typography.fontSizeLight}rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};

  background-color: ${(props) => {
    if (props.type === 'sell') {
      return `${props.theme.palette.color.red}`;
    }
    return `${props.theme.palette.color.regular}`;
  }};
`;
export const Text = styled.p<HomeProps>`
  font-size: ${({ theme }) => theme.typography.fontSize}rem;
  ${({ blue }) =>
    blue &&
    css`
      color: ${({ theme }) => theme.palette.color.blue?.light};
      font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
    `};
  ${({ green }) =>
    green &&
    css`
      color: ${({ theme }) => theme.palette.color.regular};
    `};

  ${({ isLow }) =>
    isLow &&
    css`
      color: ${({ theme }) => theme.palette.color.red};
    `};
`;
export const TypeTransaction = styled.p<HomeProps>`
  color: ${({ theme }) => theme.palette.color.blue?.light};
  font-size: ${({ theme }) => theme.typography.fontSizeLight}rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  ${({ dark }) =>
    dark &&
    css`
      color: ${({ theme }) => theme.palette.color.gray?.light};
    `};
`;
